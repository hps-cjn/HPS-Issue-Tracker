var React = require('react');
var Issue = require('./Issue.jsx');

var i = Issues.getIssues();

var IssueList = React.createClass({
    getInitialState: function(){
        return ({
            data:i
        });
    },
    render: function(){
        var ai = this.props.activeId;
        return (
            <div>
                <div className="columns large-12">
                    {this.state.data.map(function(item){
                        return (
                            <Issue activeId={ai} key={item._id} itemId={item._id} d={item} />
                        );
                    })}
                </div>
            </div>
        );
    }
});

module.exports = IssueList;
