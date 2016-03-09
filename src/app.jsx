var React = require('react');
var IssueList = require('./IssueList.jsx');

var App = React.createClass({
  render: function() {
    return (
        <IssueList />
    );
  }
});

var element = React.createElement(App, {});
React.render(element, document.getElementById('main'));
