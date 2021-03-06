var React = require('react');
var ReactDOM = require('react-dom');
var Icon = require('./Icon.jsx');
var Modal = require('react-modal');
var NewItemForm = require('./NewItemForm.jsx');

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
            onRequestClose={this.closeModal}
        >
          <NewItemForm closeModal={this.closeModal}/>
        </Modal>
      </a>
    );
  }
});

module.exports = Button;
