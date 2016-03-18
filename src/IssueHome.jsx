var React = require('react');
var ReactDOM = require('react-dom');
var IssueList = require('./IssueList.jsx');
var TrackerHeading = require('./TrackerHeading.jsx');
var IssueView = require('./IssueView.jsx');
var Modal = require('react-modal');
var Navigation = require('./Navigation.jsx');

var IssueHome = React.createClass({
  getInitialState: function() {
    return {
      activeId: '',
    }
  },
  handleResize: function(e) {
    var w = window.innerWidth;
    switch (w <= 1024){
      case  true:
        if(this.state.mobile != true){
          this.setState({mobile:true});
        }
        return;
      case false:
        if(this.state.mobile != false){
          this.setState({mobile:false});
        }
        return;
      default:
        console.log('Unable to determine screen size');
        return;
    }
  },
  componentWillMount: function(){
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  componentWillUnmount: function() {
    window.removeEventListener('resize', this.handleResize);
  },
  updateId: function(id) {
    this.replaceState({ activeId: id });
  },
  openModal: function() {
      this.setState({modalIsOpen: true}).bind(this);
  },

  closeModal: function() {
      this.setState({modalIsOpen: false});
  },
  render: function() {
      console.log(this.state.mobile);
      EventSystem.subscribe('activeId.update', this.updateId);
      if(this.state.mobile){
        return (
          <div>
            <Navigation user={this.props.user}/>
          <div className="row">
            <div className="columns">
              <div>
                <div className='columns large-8'>
                  <TrackerHeading />
                  <IssueList activeId={this.state.activeId} clickFunction={this.openModal} mobile={this.state.mobile}></IssueList>
                </div>
                <div className='columns large-4'>
                  <Modal
                      isOpen={this.state.modalIsOpen}
                      onRequestClose={this.closeModal}>
                      <IssueView activeId={this.state.activeId}/>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
        );
      }
      else {
        return (
        <div>
          <Navigation user={this.props.user}/>
        <div>
          <div className="columns">
            <div>
              <div className='columns large-8 issue-list'>
                <TrackerHeading title="Project Feed" />
                <IssueList activeId={this.state.activeId} clickFunction={this.openModal} mobile={false}></IssueList>
              </div>
              <div className='columns large-4 issue-details'>
                <IssueView activeId={this.state.activeId}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    }
    }
});

module.exports = IssueHome;
