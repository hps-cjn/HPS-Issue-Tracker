var React = require('react');
var Button = require('./Button.jsx');
var ButtonGroup = require('./ButtonGroup.jsx');

var TrackerHeading = React.createClass({
  render: function() {
    return (
        <div className='row'>
          <div className="large-3 columns y-center">
            <h3>Activity Feed</h3>
          </div>
          <div className="large-9 columns y-center">
            <ButtonGroup classes="expanded">
              <Button><i className="fi-pencil"></i> File an Issue</Button>
              <Button><i className="fi-cloud"></i> Synergize Cloud</Button>
              <Button><i className="fi-torso"></i> Click Here If You're Eric</Button>
              <Button><i className="fi-star"></i> I'm Feeling Lucky</Button>
            </ButtonGroup>
          </div>
        </div>
    );
  }
});

module.exports = TrackerHeading;
