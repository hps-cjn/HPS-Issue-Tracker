var React = require('react');

var ButtonGroup = React.createClass({
  getDefaultProps: function() {
    return {
      classes: ""
    };
  },
  render: function() {
    return (
      <div className={"button-group " + this.props.classes}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = ButtonGroup;
