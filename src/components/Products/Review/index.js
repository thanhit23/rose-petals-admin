import React, { useEffect, useMemo, useState } from 'react';
import propsTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

import Search from '../../Search';
import Breadcrumb from '../../Breadcrumb';
import Table from '../../Table';
import ConfirmModal from '../../ConfirmModal';

function ProductReviewComponent({ meta, data, getProductReview, handleDeleteProduct }) {
  const [valueSearch, setValueSearch] = useState();

  const handleGetProductReview = ({ name: content, ...options }) => getProductReview({ content, ...options });

  const columns = useMemo(() => [
    {
      Header: 'Stt',
      accessor: 'stt',
      Cell: props => {
        const {
          cell: {
            row: { index },
          },
        } = props;
        const { page, limit } = meta;
        return (page - 1) * limit + (index + 1);
      },
    },
    {
      Header: 'Name',
      accessor: 'product',
      Cell: props => {
        const {
          cell: {
            row: {
              original: {
                product: { thumbnail, name },
              },
            },
          },
        } = props;
        return (
          <div className="flex justify-center">
            <div className="flex flex-shrink-0 items-center border-[#ebeff3] border-[1px] border-solid">
              <img className="object-cover h-[70px] w-[70px] rounded" src={thumbnail} alt="" />
            </div>
            <p className="flex ml-2 place-items-center">{name}</p>
          </div>
        );
      },
    },
    {
      Header: 'Customer',
      accessor: 'user',
      Cell: props => {
        const {
          cell: {
            row: {
              original: {
                user: { name },
              },
            },
          },
        } = props;
        return <p>{name}</p>;
      },
    },
    {
      Header: 'Comment',
      accessor: 'content',
    },
    {
      Header: 'Rating',
      accessor: 'rating',
      Cell: props => {
        const {
          cell: {
            row: {
              original: { rating },
            },
          },
        } = props;
        const starIcon = [];
        for (let i = 0; i < 5; i++) {
          i < rating && starIcon.push(faStar);
          i >= rating && starIcon.push(faStarRegular);
        }
        return starIcon.map((e, i) => <FontAwesomeIcon key={i} className="text-[#faaf00] text-sm" icon={e} />);
      },
    },
    {
      Header: 'Action',
      accessor: 'action',
      Cell: props => {
        const {
          cell: {
            row: {
              original: {
                _id: commentId,
                product: { _id: productId },
              },
            },
          },
        } = props;
        return (
          <div className="flex justify-center">
            <ConfirmModal
              classNames="w-8 h-8 hover:bg-[#EBEFF4] rounded-full"
              callback={() => handleDeleteProduct({ commentId, productId })}
            >
              <FontAwesomeIcon className="text-[#7D879C]" icon={faTrash} />
            </ConfirmModal>
          </div>
        );
      },
    },
  ]);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const searchValue = searchParams.get('name');

    searchValue && setValueSearch(searchValue);
  }, []);

  return useMemo(
    () => (
      <>
        <Breadcrumb title="review_product" />
        <div className="flex justify-between">
          <Search message="product" valueSearch={valueSearch} handleKeywordSearch={handleGetProductReview} />
        </div>
        <div className="flex flex-col mt-4 overflow-auto bg-white rounded shadow-lg">
          {/* eslint-disable-next-line max-len */}
          <Table goToPage={handleGetProductReview} meta={meta} col={columns} data={data} pagination />
        </div>
      </>
    ),
    [data],
  );
}

ProductReviewComponent.PropsType = {
  data: propsTypes.array,
  meta: propsTypes.object,
  handleGetProduct: propsTypes.func,
  handleDeleteProduct: propsTypes.func,
};

export default ProductReviewComponent;
