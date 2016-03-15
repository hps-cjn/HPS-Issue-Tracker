var React = require('react');

var RibbonItem = React.createClass({
  render: function() {
    var style = this.props.text.replace(/\s+/g, '');
    return (
      <div className={'columns large-4 ribbonItem label-' + style}>{this.props.text}</div>
    );
  }
});

module.exports = RibbonItem;
