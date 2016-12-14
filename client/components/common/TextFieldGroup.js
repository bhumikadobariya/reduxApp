import React from 'react';

const TextFieldGroup = ({ field, value, label, error, type, onChange, placeholder}) => {
  return (
    <div className="form-group">
      <label className="col-sm-2 control-label">{label}</label>
      <input
        type={type}
        name={field}
        value={value}
        onChange={onChange}
        className="form-control form-control-inline"
        placeholder={placeholder}
      />
      {error && <span className="help-block">{error}</span>}
    </div>
  );
}

TextFieldGroup.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  placeholder:React.PropTypes.string.isRequired,
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;
