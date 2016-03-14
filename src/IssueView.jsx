var React = require('react');
var Icon = require('./Icon.jsx');
var Button = require('./Button.jsx');
var ButtonGroup = require('./ButtonGroup.jsx');
<<<<<<< HEAD
var TimeAgo = require('react-timeago');

var IssueView = React.createClass({
    getInitialState: function(){
        return {
            d:[],
            currentItemId: '',
            activeItemId:''
        }
    },
    componentWillReceiveProps: function(nextProps){
        var view = this;
        this.getFullDetails(nextProps.activeId,function(results){
            view.setState({d:results[0]});
        });
    },
    getFullDetails: function(id,callback){
        $.ajax({
             type: "GET",
             dataType: "json",
             url: "http://hpstracker.azurewebsites.net/api/issues/?id=" + id,
             success: function(data){
                callback(data);
             }
         });
    },
      render: function() {
          if(!this.props.activeId || this.state.d.length == 0){
              return false;
          } else {
        return (
          <div>

            <div className='row y-center'>
              <h4><i className="fa fa-bug fa-2"></i> {this.state.d.issueTitle}</h4>
            </div>
            <div className='row'>
              <span className="label highlight">{this.state.d.status}</span>
              <span className="label alert">{this.state.d.type}</span>
              <span className="label secondary">{this.state.d.priority}</span>
            </div>
            <div className='row'>
              <strong>{this.state.d.reportedBy}</strong> opened this issue <strong><TimeAgo date={this.state.d.dateReported} /></strong>
              <br></br>
              Assigned to <strong>{this.state.d.currentAssignedTitle}</strong>
              <br></br>
              Updated {this.state.d.lastUpdated}, Due {this.state.d.dueDate}
            </div>
            <div className='row'>
              <p>{this.state.d.issueDescription}</p>
            </div>
            <div className='row'>
              <div className='commentBox'>
                <h6><strong>At 9:06AM Jeff Peterson posted:</strong></h6>
                <p>Good idea @PeteJefferson! We should definitely have more cat pictures on the portal.</p>
              </div>
            </div>
            <div className='row'>
              <ButtonGroup classes='expanded'>
                <Button text='Comment' icon='pencil' />
                <Button text='Load More Comments' icon='cloud' />
              </ButtonGroup>
            </div>
          </div>
        );
    }
      }
=======

var IssueView = React.createClass({
  render: function() {
    return (
      <div>
        <div className='row y-center'>
          <h3>An Issue</h3>
        </div>
        <div className='row'>
          <span className="label highlight">Open</span>
          <span className="label alert">Defect</span>
          <span className="label secondary">Low Priority</span>
        </div>
        <div className='row'>
          <strong>Crystal Burt</strong> opened this issue 6 days ago.
          <br></br>
          Assigned to <strong>Eric Weintraub</strong>
          <br></br>
          Updated 03-10-2016, Due 03-10-2016
        </div>
        <div className='row'>
          <p>Reprehenderit officia labore enim occaecat reprehenderit proident non cupidatat. Irure pariatur irure eiusmod exercitation Lorem anim ea laboris velit velit veniam nulla ad magna. Qui deserunt sint esse ea.</p>
        </div>
        <div className='row'>
          <div className='commentBox'>
            <h6><strong>At 9:06AM Jeff Peterson posted:</strong></h6>
            <p>Good idea @PeteJefferson! We should definitely have more cat pictures on the portal.</p>
          </div>
        </div>
        <div className='row'>
          <ButtonGroup classes='expanded'>
            <Button text='Comment' icon='pencil' />
            <Button text='Load More Comments' icon='cloud' />
          </ButtonGroup>
        </div>
      </div>
    );
  }
>>>>>>> f1fcccccefc826c9f63f209ef1da2bada4ae83fa
});

module.exports = IssueView;
