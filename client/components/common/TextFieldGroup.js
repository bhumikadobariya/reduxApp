import React from 'react';
import classnames from 'classnames';

const TextFieldGroup = ({ field, value, label, error, type, id, onChange, placeholder, checkUserExists}) => {
  return (
    <div className={classnames("form-group", { 'has-error': error})}>
      <label className="control-label">{label}</label>
      <input
        type={type}
        name={field}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={checkUserExists}
        className="form-control form-control-inline"
        placeholder={placeholder}
      />
      {error && <span className="help-block">{error}</span>}
    </div>
  );
}

TextFieldGroup.propTypes = {
  field: React.PropTypes.string.isRequired,
  id: React.PropTypes.string,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string,
  checkUserExists: React.PropTypes.func
}

TextFieldGroup.defaultProps = {
  type: 'text',
  value: ''
}

export default TextFieldGroup;
