import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { useEffect } from 'react';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import { sendRequestToken } from './actions';

function Authenticated({ auth, children, onSendRequestToken }) {
  const token = sessionStorage.getItem('token');
  useEffect(() => {
    onSendRequestToken(token);
  }, []);
  console.log(children, 'children');
  if (token && auth) return children;
}

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
