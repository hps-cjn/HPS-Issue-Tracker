var React = require('react');
var Button = require('./Button.jsx');
var ButtonWithModal = require('./ButtonWithModal.jsx');
var ButtonGroup = require('./ButtonGroup.jsx');

var TrackerHeading = React.createClass({
    render: function() {
        var t = GetParameter('project');
        return (
            <div className='row'>
                <div className="row">
                    <div className='large-12 columns y-center'>
                        <h3>{t}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className='large-12 columns y-center'>
                        <ButtonGroup classes='expanded'>
                        <ButtonWithModal text='File an Issue' icon='pencil' />
                        <Button text='Synergize Cloud' icon='cloud' />
                        <Button text="Click Here If You're Eric" icon='torso' />
                        <Button text="I'm Feeling Lucky" icon='star' />
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = TrackerHeading;
