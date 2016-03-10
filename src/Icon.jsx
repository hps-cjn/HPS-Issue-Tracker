var React = require('react');

var Icon = React.createClass({
  render: function() {
    return (
      <i className={'fi-' + this.props.name}></i>
    );
  }
});

module.exports = Icon;
