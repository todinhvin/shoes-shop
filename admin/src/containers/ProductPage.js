import React, { useEffect, useState } from 'react';
import instance from '../axiosService';
import Pagination from '../components/Pagination';
import ProductForm from '../components/ProductForm';
import Table from '../components/Table';

function ProductPage() {
  const [productList, setProductList] = useState([]);
  const [isRender, setIsRender] = useState(false);
  let [valid, setValid] = useState({
    isAddProduct: false,
    idSelect: null,
    productItem: null,
  });
  const handleAddPr = () => {
    if (valid.idSelect) {
      setValid({
        ...valid,
        idSelect: null,
        productItem: {
          id: '',
          name: '',
          thumbnail: '',
          description: '',
          content: '',
          price: 0,
          brand: 1,
          color: 1,
          size: 1,
          width: 1,
        },
        isAddProduct: true,
      });
    } else {
      setValid({
        ...valid,
        isAddProduct: !valid.isAddProduct,
        productItem: null,
      });
    }
  };

  const closeForm = () => {
    setValid({
      ...valid,
      isAddProduct: false,
      productItem: false,
      idSelect: null,
    });
    window.scrollTo(0, 100);
  };
  const editProduct = id => {
    setValid({
      ...valid,
      idSelect: id,
    });
  };
  useEffect(() => {
    if (valid.idSelect) {
      instance
        .get(`/products/${valid.idSelect}`)
        .then(res => {
          setValid({
            ...valid,
            productItem: res.data,
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [valid.idSelect]);
  useEffect(() => {
    instance
      .get('/products?pagination="pageNumber":1,"pageSize":12')
      .then(resp => {
        setProductList(resp.data);
      })
      .catch(err => console.log(err));
  }, []);
  if (valid.isAddProduct || valid.productItem) {
    window.scrollTo(0, 0);
  }
  const handleRender = () => {
    setIsRender(!isRender);
  };
  return (
    <div>
      <button
        type="button"
        className="btn btn-success mbt-15"
        onClick={handleAddPr}
      >
        Thêm sản phẩm
      </button>
      {valid.isAddProduct || valid.productItem ? (
        <ProductForm
          onClose={closeForm}
          productItem={valid.productItem}
          closeForm={closeForm}
          onRender={handleRender}
        />
      ) : (
        ''
      )}

      <Table
        editProduct={editProduct}
        tableName="products"
        productData={productList}
        isRender={isRender}
      />
    </div>
  );
}

export default ProductPage;
