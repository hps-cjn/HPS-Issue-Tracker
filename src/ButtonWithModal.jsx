var React = require('react');
var ReactDOM = require('react-dom');
var Icon = require('./Icon.jsx');
var Modal = require('react-modal');

var Button = React.createClass({
  getDefaultProps: function() {
    return {
      href: 'javascript:void(0)',
      className: '',
      text: 'Button',
      icon: ''
    }
  },
  getInitialState: function(){
      return ({
          modalIsOpen: false
      })
  },

  openModal: function() {
      this.setState({modalIsOpen: true});
  },

  closeModal: function() {
      this.setState({modalIsOpen: false});
  },
  render: function() {
      var x = this;
    return (
      <a href={this.props.href} className={'button ' + this.props.className} title={this.props.text} onClick={this.openModal}>
        <Icon name={this.props.icon} /> {this.props.text}
        <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}>

            <div>Test</div>
            <a href="javascript:void(0)" onClick={x.closeModal}>Close</a>
        </Modal>
      </a>
    );
  }
});

module.exports = Button;