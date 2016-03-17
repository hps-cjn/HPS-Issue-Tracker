var React = require('react');

var Issue = React.createClass({
    getInitialState: function(){
        return {
            status:this.props.d.status
        }
    },
    handleClick: function() {
        EventSystem.publish('activeId.update', this.props.itemId);
    },
    render: function(){
        var style = '';
        if (this.props.activeId == this.props.itemId) {
          var style = ' active ';
        }
        var concat = '';
        var descrSubstr;
        if(this.props.d.issueDescription && this.props.d.issueDescription.length > 200){
            descrSubstr = ConcatLongText(205,this.props.d.issueDescription);
            concat = ' concat';
        }
        else if (this.props.d.issueDescription){
            descrSubstr = this.props.d.issueDescription;
        }
        if(this.props.d.type){
            var type = this.props.d.type;
            type = type.replace(/\s+/g, '');
        }
        // console.log(this.props.d.project);
        return (
            <div className={"row issue " + style + type} onClick={this.handleClick}>
                <div className="columns large-3 issue-title">{this.props.d.issueTitle}</div>
                <div className="columns large-2 issue-status">{this.props.d.status}</div>
                <div className={"columns large-5 issue-description" + concat}>{descrSubstr}</div>
                <div className="columns large-2 issue-assignedTo">{this.props.d.currentAssignedTitle}</div>
            </div>
        );
    }
});

module.exports = Issue;
