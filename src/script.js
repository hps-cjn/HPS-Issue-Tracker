
(function(){
  // CallSharePoint();
})();

function CallSharePoint(callback) {
	"use strict";
  var subscriptionId = "489c022f-75a4-4247-a6c6-c06d52d3236f";
  var clientId = "b7318824-cf00-46da-a2ce-b7b14d7916aa";
  var resource = "https://aecio.sharepoint.com";

  window.config = {
    subscriptionId: subscriptionId,
    clientId: clientId,
    postLogoutRedirectUri: window.location.origin,
    endpoints: {
      sharepoint: "https://aecio.sharepoint.com/sites/Sales",
    },
    cacheLocation: 'localStorage'
  };
  var authContext = new AuthenticationContext(config);
  // Check For & Handle Redirect From AAD After Login
  var isCallback = authContext.isCallback(window.location.hash);
  authContext.handleWindowCallback();
  if (isCallback && !authContext.getLoginError()) {
    window.location = authContext._getItem(authContext.CONSTANTS.STORAGE.LOGIN_REQUEST);
  }
  // If not logged in force login
  var user = authContext.getCachedUser();
  if (user) {
    // Logged in already
    window.user = {
      title: user.profile.name,
      firstName: user.profile.given_name,
      email: user.profile.upn,
      username: user.userName
    };
		var txt = JSON.stringify(window.user);
		cookies.setCookie('hpsTrackerUser',txt,14,function(){
			location.reload();
		});
  }
  else {
    // NOTE: you may want to render the page for anonymous users and render
    // a login button which runs the login function upon click.
    authContext.login();
  }
  // Acquire token for Files resource.
  authContext.acquireToken(resource, function (error, token) {
    // Handle ADAL Errors.
    if (error || !token) {
      console.log('ADAL error occurred: ' + error);
      return;
    }

    if(callback){
      // Add token to local Storage
      if(token){
        if(typeof(Storage) !== "undefined") {
          localStorage.setItem('accessToken',token);
        }
        else {
            console.log('Local Storage not supported');
        }
      }
      callback();

      //GetMyTasks();
    }
		location.reload();
  });
}

function ConcatLongText(chars,text){
    var txt;
    var cutoff = chars - 4;

    var descrSubstr = text.substring(0,chars);

    var spaceIndex = descrSubstr.lastIndexOf(' ');
    if  (spaceIndex <= cutoff && spaceIndex > 0){
        return descrSubstr.substring(0,spaceIndex) + '...';
    }
    var periodIndex = descrSubstr.lastIndexOf('.');
    if  (periodIndex <= cutoff && periodIndex > 0){
        return descrSubstr.substring(0,periodIndex) + '...';
    }
    var commaIndex = descrSubstr.lastIndexOf(',');
    if  (commaIndex <= cutoff && commaIndex > 0){
        return descrSubstr.substring(0,commaIndex) + '...';
    }

    return descrSubstr;
}

function GetParameter(param){
    var params = window.location.search.substr(1).split('&');
    for (var i = 0; i < params.length; i++){
        var p = params[i].split('=');
        if(p[0] == param){
            return decodeURIComponent(p[1]);
        }
    }
}

function CreateGUID(){
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
  });
}

// Check if two objects are equivalent; i.e., they have identical property values
function isEquivalent(a, b) {
  var aProps = Object.getOwnPropertyNames(a);
  var aLen = aProps.length;
  var bProps = Object.getOwnPropertyNames(b);

  if (aLen != bProps.length) {
    return false;
  }

  for (var i = 0; i < aLen; i++) {
    var propName = aProps[i];

    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  // If we made it this far, the objects are equivalent
  return true;
}

var cookies = {
	setCookie: function(cname, cvalue, exdays, callback){
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
		if(callback){
			callback();
		}
	},
	getCookie: function(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
	},
	checkCookie: function() {
    var username = cookies.getCookie('hpsTrackerUser');
    if (username != '') {
        return true;
    }else{
				return false;
    }
	},
	deleteCookie: function(cname){
		var d = new Date();
		d.setTime(d.getTime() + (-1*24*60*60*1000));
		var expires = "expires="+d.toUTCString();
		document.cookie = cname + "=" + '' + "; " + expires;
	}
};
