import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../actions/profile';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ getCurrentProfile, auth: { user }, profile: {profile, loading} }) => {

  useEffect(() => {
    getCurrentProfile();
  }, []);

  return (
    <Fragment>
      <Navbar />
      <h1>Dashboard</h1>
      <h2>Welcome {user && user.name}</h2>
      {profile !== null ? (
      <Fragment>has</Fragment>
      ) : (
      <Fragment>
        <p>You have not yet setup a profile, please add some info</p>
        <Link to='/create-profile' className='btn btn-primary my-1'>
          Create Profile
        </Link>
      </Fragment>
      )}
    </Fragment>
  )
};



Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);