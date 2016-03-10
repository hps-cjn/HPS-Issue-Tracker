var React = require('react');

var Button = React.createClass({
  getHref: function() {
    return this.props.href || 'javascript:void(0)';
  },
  getClass: function() {
    return "button " + (this.props.classes || "");
  },
  render: function() {
    return (
      <a href={this.getHref()} className={this.getClass()}>
        {this.props.children}
      </a>
    );
  }
});

module.exports = Button;
