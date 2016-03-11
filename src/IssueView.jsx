var React = require('react');

var IssueView = React.createClass({
  render: function() {
    return (
      <div>
        <div className='row'>
          <h2>An Issue</h2>
        </div>
        <div className='row'>
          <pre>{this.props.activeId}</pre>
        </div>
      </div>
    );
  }
});

module.exports = IssueView;
