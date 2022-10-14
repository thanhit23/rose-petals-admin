import HeaderList from '../../components/HeaderList';
import Table from './Table';
import AuthLayout from '../../layouts/AuthLayout';
function ProductPage() {
  const element = (
    <>
      <HeaderList title="user" messages="user" btnAdd="Add User" />
      <Table />
    </>
  );

  return <AuthLayout title="User" children={element} />;
}

export default ProductPage;
