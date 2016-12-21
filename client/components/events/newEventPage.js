import React from 'react';
import EventForm from './EventForm';
import { connect } from 'react-redux';
import { addFlashMessage } from '../../actions/flashMessages';
import { createEvent } from '../../actions/eventActions';

class newEventPage extends React.Component {
  render() {
    const { createEvent, addFlashMessage } = this.props;
    return (
      <div>
        <EventForm createEvent={createEvent} addFlashMessage={addFlashMessage} />
      </div>
    );
  }
}

newEventPage.propTypes = {
  createEvent: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

export default connect(null, { createEvent, addFlashMessage })(newEventPage);
