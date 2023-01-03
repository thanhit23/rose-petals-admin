import AuthLayout from '../../../layouts/AuthLayout';
import OrderDetailComponent from '../../../components/Orders/Detail';

function OrderDetail() {
  return (
    <AuthLayout title="order_detail">
      <OrderDetailComponent />
    </AuthLayout>
  );
}

export default OrderDetail;
