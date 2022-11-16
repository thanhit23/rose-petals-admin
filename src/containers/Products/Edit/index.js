import { compose } from 'redux';

import AuthLayout from '../../../layouts/AuthLayout';
import injectSaga from '../../../utils/injectSaga';
import saga from './saga';

function EditProduct() {
  const element = <h1>edit product</h1>;
  return <AuthLayout title="edit_user" children={element} />;
}

const withSaga = injectSaga({ key: 'editProduct', saga });

export default compose(withSaga)(EditProduct);
