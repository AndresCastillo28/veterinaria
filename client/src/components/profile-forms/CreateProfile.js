import React, { useState } from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({createProfile, history}) => {

  const [formData, setFormData] = useState({
      name: '',
      weight: '',
      vaccines: '',
      dissases: '',
      breed: ''

  }); 
  
  const {
    name,
    weight,
    vaccines,
    dissases,
    breed
  } = formData;

  const onChange = e => 
    setFormData({ ...formData, [e.target]: e.target.value });

  const onSubmit = e => {
      e.preventDefault();
      createProfile(formData, history);
    }

  return (
  <div>

    <form className='form' onSubmit={e => onSubmit(e)}>
      <label className="form-label fs-5">Name</label>
        <input
        type="text"
        className="form-control"
        name='name'
        value={name}
        onChange={e => onChange(e)}
        required
        />
      <label className="form-label fs-5">Weight</label>
      <input
        type="text"
        className="form-control"
        name='name'
        value={weight}
        onChange={e => onChange(e)}
        required
      />
      <label className="form-label fs-5">Vaccines</label>
      <input
        type="text"
        className="form-control"
        name='name'
        value={vaccines}
        onChange={e => onChange(e)}
        required
      />
      <label className="form-label fs-5">Dissases</label>
      <input
        type="text"
        className="form-control"
        name='name'
        value={dissases}
        onChange={e => onChange(e)}
        required
      />
      <label className="form-label fs-5">Breed</label>
      <input
        type="text"
        className="form-control"
        name='name'
        value={breed}
        onChange={e => onChange(e)}
        required
      />
    </form>
  </div>
  );
};

CreateProfile.propTypes = {};

const mapStateToProps = state => {
  createProfile: PropTypes.func.isRequired
}

export default connect(null, { createProfile })(withRouter(CreateProfile));
