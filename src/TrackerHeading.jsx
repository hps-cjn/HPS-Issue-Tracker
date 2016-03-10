var React = require('react');
var Button = require('./Button.jsx');
var ButtonGroup = require('./ButtonGroup.jsx');

var TrackerHeading = React.createClass({
  render: function() {
    return (
      <div className="columns">
        <div className="large-5 columns y-center">
          <h3>Activity Feed</h3>
        </div>
        <div className="large-7 columns">
          <ButtonGroup classes="expanded y-center">
            <Button><i className="fi-pencil"></i> File an Issue</Button>
            <Button><i className="fi-cloud"></i> Synergize Cloud</Button>
            <Button><i className="fi-star"></i> I'm Feeling Lucky</Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
});

module.exports = TrackerHeading;
