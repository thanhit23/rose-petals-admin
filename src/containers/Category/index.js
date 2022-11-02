import AuthLayout from '../../layouts/AuthLayout';
import CategoryComponent from '../../components/Category';

function Category() {
  return <AuthLayout title="category" children={<CategoryComponent />} />;
}

export default Category;
