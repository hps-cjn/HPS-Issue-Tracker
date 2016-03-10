var React = require('react');

var Button = React.createClass({
  getHref: function() {
    return this.props.href || '#';
  },
  getClass: function() {
    return this.props.classes || "";
  },
  render: function() {
    return (
      <a href={this.getHref()} className={"button " + this.getClass()}>{this.props.children}</a>
    );
  }
});

module.exports = Button;
