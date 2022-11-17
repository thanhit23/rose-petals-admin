import AuthLayout from '../../../layouts/AuthLayout';
import ListBrandsComponent from '../../../components/Brands/List';

function ListBrand() {
  const meta = { page: 1, limit: 10, totalPages: 1, totalResults: 6 };
  const data = [
    {
      id: '63749c10d58125000823459a',
      name: 'Chanel',
      logo: 'https://i.pinimg.com/originals/35/de/2e/35de2ec625940ab0456af538f5578d24.jpg',
    },
  ];
  const renderListBrands = <ListBrandsComponent meta={meta} data={data} />;
  return <AuthLayout title="list_brand" children={renderListBrands} />;
}

export default ListBrand;
