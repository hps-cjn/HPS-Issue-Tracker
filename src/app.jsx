var React = require('react');
var IssueList = require('./IssueList.jsx');
var TrackerHeading = require('./TrackerHeading.jsx');
var IssueView = require('./IssueView.jsx');

var App = React.createClass({
  getInitialState: function() {
    return {
      activeId: ''
    }
  },
  updateId: function(id) {
    this.replaceState({ activeId: id });
  },
  render: function() {
    EventSystem.subscribe('activeId.update', this.updateId);
    return (
        <div>
          <div className='columns large-8'>
            <TrackerHeading title="Project Feed" />
            <IssueList activeId={this.state.activeId}></IssueList>
          </div>
          <div className='columns large-4'>
            <IssueView activeId={this.state.activeId} />
          </div>
        </div>
    );
  }
});

var boom = React.createElement(App, {});
React.render(boom, document.getElementById('main'));
