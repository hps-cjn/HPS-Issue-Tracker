var React = require('react');
var Issue = require('./Issue.jsx');

var i = Issues.getIssues();

var IssueList = React.createClass({
    getInitialState: function(){
        return ({
            data:i
        });
    },
    fetchDataFromServer: function(callback){
        var project = GetParameter('project');
        $.ajax({
             type: "GET",
             dataType: "json",
             url: "http://hpstracker.azurewebsites.net/api/issues/limited/?project=" + project,
             success: function(data){
                callback(data);
             }
         });
    },
    componentWillMount: function(){
        var list = this;
        this.fetchDataFromServer(function(results){
            list.setState({data:results});
        });
    },
    render: function(){
        var ai = this.props.activeId;
        var mobile = this.props.mobile;
        return (
            <div>
                <div className="columns large-12">
                    {this.state.data.map(function(item){
                        return (
                            <Issue activeId={ai} key={item._id} itemId={item._id} d={item} mobile={mobile}/>
                        );
                    })}
                </div>
            </div>
        );
    }
});

module.exports = IssueList;
