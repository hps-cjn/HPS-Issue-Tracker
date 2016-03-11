var React = require('react');
var Icon = require('./Icon.jsx');
var Button = require('./Button.jsx');

var IssueView = React.createClass({
  render: function() {
    return (
      <div>
        <div className='row y-center'>
          <h3>An Issue</h3>
        </div>
        <div className='row'>
          <span className="label highlight">Open</span>
          <span className="label alert">Defect</span>
          <span className="label secondary">Low Priority</span>
        </div>
        <div className='row'>
          <strong>Crystal Burt</strong> opened this issue 6 days ago.
          <br></br>
          Assigned to <strong>Eric Weintraub</strong>
          <br></br>
          Updated 03-10-2016, Due 03-10-2016
        </div>
        <div className='row'>
          <p>Reprehenderit officia labore enim occaecat reprehenderit proident non cupidatat. Irure pariatur irure eiusmod exercitation Lorem anim ea laboris velit velit veniam nulla ad magna. Qui deserunt sint esse ea.</p>
        </div>
        <div className='row'>
          <div className='large-4'>
            <Button text='Comment' icon='pencil' />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = IssueView;
