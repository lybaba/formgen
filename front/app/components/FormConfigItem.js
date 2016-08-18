import React, { Component, PropTypes } from 'react';

// Default data configuration
const dateConfig = {
  weekday: "short",
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit"
};

class FormConfigItem extends Component {
  render() {
    let {form} = this.props;

    return(
      <div className='form'>
        <span className="form-name">{form.name}</span>
      </div>
    );
  }
}
FormConfigItem.propTypes = {
  form: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string
  }),
};

export default FormConfigItem;
