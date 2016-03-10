var React = require('react');
var IssueList = require('./IssueList.jsx');
var TrackerHeading = require('./TrackerHeading.jsx');

var App = React.createClass({
  render: function() {
    return (
        <div>
          <TrackerHeading />
          <IssueList></IssueList>
        </div>
    );
  }
});

var boom = React.createElement(App, {});
React.render(boom, document.getElementById('main'));
