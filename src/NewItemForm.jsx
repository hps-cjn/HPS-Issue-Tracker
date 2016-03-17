var React = require('react');

var NewItemForm = React.createClass({
    getInitialState: function(){
        var currentProject = GetParameter('project');
        return ({
            _id: CreateGUID(),
            project:currentProject,
            issueTitle:'',
            issueDescription:'',
            currentAssignedToTitle:'',
            dateReported:new Date().toISOString(),
            reportedBy:'',
            lastUpdated:new Date().toISOString(),
            status:"Open",
            priority:'Medium',
            type:'Defect'
        });
    },
    handleFieldChange: function(key){
        return function (e) {
          var currentState = this.state;
          currentState[key] = e.target.value;
          this.setState(currentState);
        }.bind(this);

    },
    handleSubmit: function(){
      var obj = this.state;
      var _this = this;
      $.ajax({
        url: "https://hpstracker.azurewebsites.net/api/issues",
        data: {d:obj},
        dataType: 'json',
        type:'POST',
        success: function(data){
          console.log(data);
          _this.handleCancel();
        },
        error: function(err){
          console.error(err);
        }
      });
    },
    handleCancel: function(e){
      if(e){
        e.preventDefault();
      }
      this.props.closeModal();
    },
    render: function() {
      return (
        <div className="row" id="input-form">
          <div>
            <form>
              <div className="row">
                  <div className="columns large-12">
                      <div className="columns large-4 small-12">
                        <label>Project
                            <input
                              tabIndex="1"
                              type="text"
                              placeholder="Project"
                              value={this.state.project}
                              onChange={this.handleFieldChange('project')}
                              />
                        </label>
                        <label>Type
                            <select
                              tabIndex="4"
                              value={this.state.type}
                              onChange={this.handleFieldChange('type')}
                              >
                                <option value="Defect" selected="selected">Defect</option>
                                <option value="Change">Change</option>
                                <option value="Future Enhancement">Future Enhancement</option>
                                <option value="Question">Question</option>
                            </select>
                        </label>

                      </div>
                      <div className="columns large-4 small-12">
                        <label>Title
                            <input
                              tabIndex="2"
                              type="text"
                              placeholder="Title"
                              value={this.state.issueTitle}
                              onChange={this.handleFieldChange('issueTitle')}
                            />
                        </label>
                        <label>Priority
                            <select
                              tabIndex="5"
                              value={this.state.priority}
                              onChange={this.handleFieldChange('priority')}
                              >
                                <option value="Critical">Critical</option>
                                <option value="High">High</option>
                                <option value="Medium" selected="selected">Medium</option>
                                <option value="Low">Low</option>
                                <option value="Informational">Informational</option>
                            </select>
                        </label>
                      </div>
                      <div className="columns large-4 small-12">
                        <label>Assigned To
                            <select
                              tabIndex="3"
                              value={this.state.currentAssignedToTitle}
                              onChange={this.handleFieldChange('currentAssignedToTitle')}
                            >
                              <option disabled="disabled" selected="selected">Please Select</option>
                              <option value="Eric Weintraub">Eric Weintraub</option>
                              <option value="Chris Nascone">Chris Nascone</option>
                            </select>
                        </label>
                        <label>Reported By
                            <select
                              tabIndex="6"
                              value={this.state.reportedBy}
                              onChange={this.handleFieldChange('reportedBy')}
                              >
                                <option disabled="disabled" selected="selected">Please Select</option>
                                <option value="Eric Weintraub">Eric Weintraub</option>
                                <option value="Chris Nascone">Chris Nascone</option>
                            </select>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="columns large-12">
                      <div className="columns large-12 medium-12 small-12">
                        <label>Description
                            <textarea
                              tabIndex="7"
                              placeholder="Description"
                              value={this.state.issueDescription}
                              onChange={this.handleFieldChange('issueDescription')}>
                            </textarea>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="columns large-12">
                      <div className="columns large-offset-9 large-3">
                        <a href="#" className="button alert" tabIndex="8" onClick={this.handleCancel}>Cancel</a>
                        <a href="#" className="button" onClick={this.handleSubmit} tabIndex="9">Save</a>
                      </div>
                    </div>
                  </div>
              </form>
          </div>
        </div>
      );
    }
});

module.exports = NewItemForm;
