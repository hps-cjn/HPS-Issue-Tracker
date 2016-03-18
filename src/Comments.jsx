var React = require('react');
var ButtonGroup = require('./ButtonGroup.jsx');
var Button = require('./Button.jsx');
var TimeAgo = require('react-timeago');

var Comments = React.createClass({
  getInitialState: function () {
    return {
      showAll: false
    }
  },
  componentWillReceiveProps: function (nextProps) {
    if (!isEquivalent(nextProps, this.props)) {
      this.setState({showAll:false});
    }
  },
  allComments: function (item) {
    return (
      <div className='commentBox'>
        <h6><strong>{item.user} posted <TimeAgo date={item.date} />:</strong></h6>
        <p>{item.comment}</p>
      </div>
    );
  },
  mostRecent: function () {
    var len = this.props.replies.length;
    var item = this.props.replies[len - 1];
    return (
      <div>
        <span className='commentNotifier'>Showing most recent comment of {len}.</span>
        <div className='commentBox'>
          <h6><strong>{item.user} posted <TimeAgo date={item.date} />:</strong></h6>
          <p>{item.comment}</p>
        </div>
      </div>
    );
  },
  loadMore: function () {
    this.setState({ showAll: !this.state.showAll });
  },
  handleFieldChange: function(key){
      return function (e) {
        var currentState = this.state;
        currentState[key] = e.target.value;
        this.setState(currentState);
      }.bind(this);
  },
  handleSubmit: function(){
    var x = this;
    var commentObj = {
      comment: this.state.commentBoxValue,
      date: new Date(),
      user: window.user.title
    };
    var r = this.props.replies;
    r.push(commentObj);
    var updateObj = {
      comments: r,
      id: this.props.activeId
    };
    var _this = this;
    $.ajax({
      url: "/api/addComment",
      data: updateObj,
      dataType: 'json',
      type:'PUT',
      success: function(data){
        x.setState({
          commentBoxValue: ''
        });
      },
      error: function(err){
        console.error(err);
      }
    });
  },
  render: function () {
    var x = this;
    return (
      <div>
        <div className='row'>
          {this.state.showAll == true ? this.props.replies.map(this.allComments) : x.mostRecent()}
          <div className="commentForm">
            <textarea
              placeholder="Add a comment..."
              value={this.state.commentBoxValue}
              onChange={this.handleFieldChange('commentBoxValue')}
            ></textarea>
          </div>
        </div>
        <div className='row'>
          <ButtonGroup classes='expanded'>
            <Button text={this.state.showAll == true ? "Hide Comments" : "Load More Comments"} icon='cloud' onClick={x.loadMore} />
            <Button text='Comment' icon='pencil' onClick={this.handleSubmit}/>
          </ButtonGroup>
        </div>
      </div>
    );
  }
});

module.exports = Comments;
