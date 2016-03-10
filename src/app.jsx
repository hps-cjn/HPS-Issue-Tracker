var React = require('react');
var IssueList = require('./IssueList.jsx');
var Button = require('./Button.jsx');
var ButtonGroup = require('./ButtonGroup.jsx');

var App = React.createClass({
  render: function() {
    return (
        <div>
            <h1>Boom.</h1>
            <ButtonGroup classes='expanded'>
              <Button classes='alert'>Sup</Button>
              <Button>How Cool is This?</Button>
              <Button classes="warning">Real talk, this is awesome</Button>
            </ButtonGroup>
            <hr></hr>
            <IssueList></IssueList>
        </div>
    );
  }
});

var boom = React.createElement(App, {});
React.render(boom, document.getElementById('main'));
