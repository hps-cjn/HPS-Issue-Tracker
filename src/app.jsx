var React = require('react');
var IssueList = require('./IssueList.jsx');
var TrackerHeading = require('./TrackerHeading.jsx');

var App = React.createClass({
  getInitialState: function() {
    return {
      activeId: 'im breaking it'
    }
  },
  componentDidMount: function() {

  },
  updateId: function(id) {
    this.replaceState({ activeId: id });
  },
  render: function() {
    EventSystem.subscribe('activeId.update', this.updateId);
    return (
        <div>
          <TrackerHeading title="Project Feed" />
          <IssueList activeId={this.state.activeId}></IssueList>
        </div>
    );
  }
});

var boom = React.createElement(App, {});
React.render(boom, document.getElementById('main'));
