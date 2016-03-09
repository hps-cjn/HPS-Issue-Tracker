var React = require('react');
var IssueList = require('./IssueList.jsx');

var App = React.createClass({
  render: function() {
    return (
        <div>
            <h1>Boom.</h1>
        </div>
    );
  }
});

var boom = React.createElement(App, {});
React.render(boom, document.getElementById('main'));
