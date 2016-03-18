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
             url: "/api/issues/?id=" + id,
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
                <div className='row'>
                  <RibbonItem text={this.state.d.status} />
                  <RibbonItem text={this.state.d.priority} />
                  <RibbonItem text={this.state.d.type} />
                </div>
                <div className='row scootch-top'>
                  <i className='fi-page-add'></i> Opened <TimeAgo date={this.state.d.dateReported} />
                </div>
                {/*<div className='row'>
                  <i className='fi-clock'></i> Due <TimeAgo date={this.state.d.dueDate} />
                </div>*/}
                <div className='row scootch-bottom'>
                  <i className='fi-arrow-right'></i> Assigned to {this.state.d.currentAssignedTitle}
                </div>
                <div className='row'>
                  <div className="issue-text"><strong>{this.state.d.issueTitle}</strong></div>
                </div>
                <div className='row'>
                  <div className="issue-text"><p>{this.state.d.issueDescription}</p></div>
                </div>
                <Comments replies={this.state.d.comments} activeId={this.props.activeId}/>
              </div>
          );
        }
    }
});

module.exports = IssueView;
