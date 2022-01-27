import PropTypes from 'prop-types';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentProfile } from '../actions/profile';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import avatar from '../images/user.png';

const Dashboard = ({ getCurrentProfile, auth: { user }, profile: { profile, loading } }) => {

  useEffect(() => {
    getCurrentProfile();
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid text-center text-white dashboard">
        <h1>Dashboard</h1>
        <h2>Welcome {user && user.name}</h2>
      <img src={avatar} alt="" className="img-fluid" />
        {profile !== null ? (
          <Fragment>has</Fragment>
        ) : (
          <Fragment>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to='/create-profile' className='btn btn-primary my-1 dashboard-btn'>
              Create Profile
            </Link>
          </Fragment>
        )}
      </div>
      <Footer />
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
