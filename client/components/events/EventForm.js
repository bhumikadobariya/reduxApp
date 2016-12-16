import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/eventActions';

class EventForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      errors: {},
      isLoading: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault(e);
    this.props.createEvent(this.state);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render () {
    const { title, errors, isLoading } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1>Create New Game Event</h1>

          <TextFieldGroup
            field="title"
            label="Title"
            value={title}
            error={errors.title}
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
  createEvent: React.PropTypes.func.isRequired
}

export default connect(null, { createEvent })(EventForm);
