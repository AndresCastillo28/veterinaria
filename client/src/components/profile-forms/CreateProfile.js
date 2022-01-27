import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CreateProfile = (props) => {

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

  return <div></div>;
};

CreateProfile.propTypes = {};

export default CreateProfile;
