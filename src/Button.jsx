var React = require('react');
var Icon = require('./Icon.jsx');

var Button = React.createClass({
  getDefaultProps: function() {
    return {
      href: 'javascript:void(0)',
      className: '',
      text: 'Button',
      icon: ''
    }
  },
  render: function() {
    return (
      <a href={this.props.href} className={'button ' + this.props.className} title={this.props.text} onClick={this.props.onClick}>
        <Icon name={this.props.icon} /> {this.props.text}
      </a>
    );
  }
});

module.exports = Button;
