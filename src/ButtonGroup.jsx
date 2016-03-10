var React = require('react');

var ButtonGroup = React.createClass({
  getClass: function() {
    return "button-group " + (this.props.classes || "");
  },
  render: function() {
    return (
      <div className={this.getClass()}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = ButtonGroup;
