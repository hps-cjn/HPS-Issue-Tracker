var React = require('react');
var ReactDOM = require('react-dom');
var IssueList = require('./IssueList.jsx');
var TrackerHeading = require('./TrackerHeading.jsx');
var IssueView = require('./IssueView.jsx');
var Modal = require('react-modal');
var Navigation = require('./Navigation.jsx');
var IssueHome = require('./IssueHome.jsx');

var App = React.createClass({
  // getInitialState: function(){
  //   return({
  //     loggedIn:false
  //   });
  // },
  componentWillMount: function(){
    this.checkForCookie();
  },
  checkForCookie: function(){
    if(cookies.checkCookie()){
      console.log('cookie exists');
      var u = JSON.parse(cookies.getCookie('hpsTrackerUser'));
      this.checkIfUserInDatabase(u.email);
      this.setState({
        loggedIn:true,
        user:u.title
      });
      window.user = u;
    } else {
      console.log('cookie does not exist');
      this.setState({
        loggedIn:false
      });
    }
  },
  checkIfUserInDatabase: function(email){
    var a = this;
    $.ajax({
         type: "GET",
         dataType: "json",
         url: "/api/user/?email=" + email,
         success: function(data){
            console.log(data);
            console.log(data.length);
            if(data.length < 1){
              //a.addUserToDatabase();
            }
         }
     });
  },
  addUserToDatabase: function(){
    $.ajax({
      url: "http://localhost:8000/api/user",
      data: u,
      dataType: 'json',
      type:'POST',
      success: function(data){
        console.log('User Added');
      },
      error: function(err){
        console.error(err);
      }
    });
  },
  handleo365Click: function(){
    var t = this;
    CallSharePoint(function(){
      var txt = JSON.stringify(window.user);
      cookies.setCookie('hpsTrackerUser',txt,14,function(){
        console.log('cookie set');
        t.setState({
          loggedIn:true,
          user:window.user.title
        });
      });
    });
  },
  render: function() {
    if(this.state.loggedIn){
      return (<IssueHome user={this.state.user}/>);
    } else {
      return (
        <div className='splash-container'>
          <div className="row valign-middle">
            <div className="small-5 small-centered columns">
              <button href="#" className="google button" onClick={this.handleo365Click}> <span></span>Login with Office 365</button>
              {/*<button href="#" className="facebook left-icon button split"> <span></span>sign in with facebook</button>
              <button href="#" className="twitter left-icon button split"> <span></span>sign in with twitter</button>
              <button href="#" className="google left-icon button split"> <span></span>sign in with google +</button>*/}
            </div>
          </div>
        </div>);
    }

  }
});

var boom = React.createElement(App, {});
ReactDOM.render(boom, document.getElementById('main'));
