var React = require('react');

var Button = React.createClass({
  getDefaultProps: function() {
    return {
      href: "javascript:void(0)",
      className: ""
    }
  },
  render: function() {
    return (
      <a href={this.props.href} className={"button " + this.props.className}>
        {this.props.children}
      </a>
    );
  }
});

module.exports = Button;
