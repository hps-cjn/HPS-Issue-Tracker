var React = require('react');

var Issue = React.createClass({
    getInitialState: function(){
        status:this.props.d.status,
        assignedTo:''
    },
    render: function(){
        return (
            <div className="row issue">
                <div className="columns large-3 issue-title">{this.props.d.title}</div>
                <div className="columns large-2 issue-status">{this.props.d.status}</div>
                <div className="columns large-5 issue-description">{this.props.d.description}</div>
                <div className="columns large-2 issue-company">{this.props.d.company}</div>
            </div>
        );
    }
});

module.exports = Issue;
