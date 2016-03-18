var React = require('react');
var Icon = require('./Icon.jsx');
var LoginWithModal = require('./LoginWithModal.jsx');

var Navigation = React.createClass({
  handleAccountActionClick: function(){
    cookies.deleteCookie('hpsTrackerUser');
  },
  render: function() {
    return (
      <nav className="menu">
        <h1 className="name"><i className=""></i> Issue Tracker</h1>
        <ul className="inline-list show-for-medium-up">
          <li><a href="#">Home</a></li>
          <li className="active"><a href="#">Projects</a></li>
          <li><a href="#">Issues</a></li>
        </ul>
        <ul className="inline-list hide-for-small-only account-action">
          <li><a onClick={this.handleAccountActionClick}>{this.props.user}</a></li>
        </ul>
      </nav>
    );
  }
});

module.exports = Navigation;
