var React = require('react');
var Button = require('./Button.jsx');
var ButtonGroup = require('./ButtonGroup.jsx');

var TrackerHeading = React.createClass({
  render: function() {
    return (
        <div className='row'>
          <div className='large-3 columns y-center'>
            <h3>{this.props.title}</h3>
          </div>
          <div className='large-9 columns y-center'>
            <ButtonGroup classes='expanded'>
              <Button text='File an Issue' icon='pencil' />
              <Button text='Synergize Cloud' icon='cloud' />
              <Button text="Click Here If You're Eric" icon='torso' />
              <Button text="I'm Feeling Lucky" icon='star' />
            </ButtonGroup>
          </div>
        </div>
    );
  }
});

module.exports = TrackerHeading;
