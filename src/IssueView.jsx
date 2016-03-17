var React = require('react');
var Icon = require('./Icon.jsx');
var Button = require('./Button.jsx');
var ButtonGroup = require('./ButtonGroup.jsx');
var TimeAgo = require('react-timeago');
var RibbonItem = require('./RibbonItem.jsx');
var Comments = require('./Comments.jsx');

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
        if (!isEquivalent(nextProps, this.props)){
            this.getFullDetails(nextProps.activeId,function(results){
                view.setState({d:results[0]});
            });
        }
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
                  <h4 className="issueHeading" title={this.state.d.issueTitle}><i className="fa fa-bug fa-2"></i> {this.state.d.issueTitle}</h4>
                </div>
                <div className='row'>
                  <RibbonItem text={this.state.d.status} />
                  <RibbonItem text={this.state.d.priority} />
                  <RibbonItem text={this.state.d.type} />
                </div>
                <div className='row'>
                  <strong>{this.state.d.reportedBy}</strong> opened this issue <strong><TimeAgo date={this.state.d.dateReported} /></strong>
                  <br></br>
                  Assigned to <strong>{this.state.d.currentAssignedTitle}</strong>
                </div>
                <div className='row'>
                  <div className='columns large-3'>
                      <strong>Updated: </strong>
                  </div>
                  <div className="columns large-9">
                    <TimeAgo date={this.state.d.lastUpdated} />
                  </div>
                </div>
                <div className='row'>
                  <div className='columns large-3'>
                      <strong>Due: </strong>
                  </div>
                  <div className="columns large-9">
                    <TimeAgo date={this.state.d.dueDate} />
                  </div>
                </div>
                <div className='row'>
                  <p>{this.state.d.issueDescription}</p>
                </div>
                <Comments replies={this.state.d.comments} activeId={this.props.activeId}/>
              </div>
          );
        }
    }
});

module.exports = IssueView;
