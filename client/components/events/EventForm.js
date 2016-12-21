import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';

class EventForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      event: '',
      errors: {},
      isLoading: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault(e);
    // this.props.createEvent(this.state);
    this.props.createEvent(this.state).then(
      () => {
        this.props.addFlashMessage({
          type: 'success',
          text: 'Your event added successfully..'
        });
        // browserHistory.push('/');
        this.context.router.push('/new-event');
      },
      (err) => this.setState({ errors: err.response.data, isLoading: false })
    );
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render () {
    const { event, errors, isLoading } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1>Create New Game Event</h1>

          <TextFieldGroup
            field="event"
            label="Event"
            value={event}
            error={errors.event}
            onChange={this.onChange}
            type="text"
          />

          <button type="submit" className="btn btn-primary btn-lg">Create</button>

        </form>
      </div>
    );
  }
}

EventForm.propTypes = {
  createEvent: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

EventForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default EventForm;
