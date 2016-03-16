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
  componentWillReceiveProps: function () {
    this.setState({showAll:false});
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
    console.log(len);
    var item = this.props.replies[len - 1];
    return (
      <div>
        Showing most recent comment of {len}.
        <div className='commentBox'>
          <h6><strong>{item.user} posted <TimeAgo date={item.date} />:</strong></h6>
          <p>{item.comment}</p>
        </div>
      </div>
    );
  },
  loadMore: function () {
    this.setState({ showAll: true });
  },
  render: function () {
    var x = this;
    return (
      <div>
        <div className='row'>
          {this.state.showAll == true ? this.props.replies.map(this.allComments) : x.mostRecent()}
        </div>
        <div className='row'>
          <ButtonGroup classes='expanded'>
            <Button text='Comment' icon='pencil' />
            <Button text='Load More Comments' icon='cloud' onClick={x.loadMore} />
          </ButtonGroup>
        </div>
      </div>
    );
  } 
});

module.exports = Comments;