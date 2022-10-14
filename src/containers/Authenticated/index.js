import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import { sendRequestToken } from './actions';

function Authenticated({ auth, children, onSendRequestToken }) {
  const token = sessionStorage.getItem('token');
  useEffect(() => {
    onSendRequestToken(token);
  }, []);
  if (token && auth) return children;
}

Authenticated.prototype = {
  auth: PropTypes.object,
  children: PropTypes.element,
  onSendRequestToken: PropTypes.func,
};

const mapStateToProps = state => {
  const {
    global: { auth },
  } = state;
  return {
    auth,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSendRequestToken: bindActionCreators(sendRequestToken, dispatch),
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'authenticated', saga });

export default compose(withSaga, withConnect)(Authenticated);
