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
          var style = ' active';
        }
        return (
            <div className={"row issue " + style} onClick={this.handleClick}>
                <div className="columns large-3 issue-title">{this.props.d.title}</div>
                <div className="columns large-2 issue-status">{this.props.d.status}</div>
                <div className="columns large-5 issue-description">{this.props.d.description}</div>
                <div className="columns large-2 issue-company">{this.props.d.company}</div>
            </div>
        );
    }
});

module.exports = Issue;
