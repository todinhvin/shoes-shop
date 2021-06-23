import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import Selector from './FilterProducts/Selector';
import Pagination from './Pagination';
import instance from '../axiosService';
import Search from './Search';
function Products(props) {
  const { handleLoading } = props;
  const [filters, setFilters] = useState({
    selector: {
      width: 0,
      color: 0,
      brand: 0,
    },
    pagiFilter: {
      pageSize: 12,
      pageNumber: 1,
    },
  });
  const [products, setProducts] = useState([{}]);
  const [totalItems, setTotalItems] = useState(0);
  const showProductList = products => {
    if (!products) {
      return null;
    }
    let result;
    result = products.map((product, index) => {
      return <ProductItem key={index} product={product} />;
    });
    return result;
  };
  const filterToString = () => {
    let filterParam = '';
    if (filters.selector.width !== 0) {
      if (filterParam !== '') filterParam += ',';
      filterParam = filterParam + '"width":' + filters.selector.width;
    }
    if (filters.selector.color !== 0) {
      if (filterParam !== '') filterParam += ',';
      filterParam = filterParam + '"color":' + filters.selector.color;
    }
    if (filters.selector.brand !== 0) {
      if (filterParam !== '') filterParam += ',';
      filterParam = filterParam + '"brand":' + filters.selector.brand;
    }
    return filterParam;
  };
  const handleSet = data => {
    if (data.type === 'size') {
      if (filters.selector.size !== data.value) {
        setFilters({
          ...filters,
          selector: {
            ...filters.selector,
            size: data.value,
          },
        });
      }
    } else if (data.type === 'width') {
      if (filters.selector.width !== data.value) {
        setFilters({
          ...filters,
          selector: {
            ...filters.selector,
            width: data.value,
          },
        });
      }
    } else if (data.type === 'color') {
      if (filters.selector.color !== data.value) {
        setFilters({
          ...filters,
          selector: {
            ...filters.selector,
            color: data.value,
          },
        });
      }
    } else if (data.type === 'brand') {
      if (filters.selector.brand !== data.value) {
        setFilters({
          ...filters,
          selector: {
            ...filters.selector,
            brand: data.value,
          },
        });
      }
    } else if (data.type === 'pagination') {
      setFilters({
        ...filters,
        pagiFilter: {
          pageSize: data.value.pageSize,
          pageNumber: data.value.pageNumber,
        },
      });
    }
  };

  useEffect(() => {
    handleLoading(false);
    const filterParam = filterToString();
    let pagination =
      '"pageNumber":' +
      filters.pagiFilter.pageNumber +
      ',"pageSize":' +
      filters.pagiFilter.pageSize;
    let param = '';
    if (filterParam !== '') {
      param = 'filter=' + filterParam + '&pagination=' + pagination;
    } else {
      param = 'pagination=' + pagination;
    }

    instance
      .get(`/products?${param}`)
      .then(resp => {
        setProducts(resp.data);
        handleLoading(true);
      })
      .catch(error => {
        console.log(error);
      });
  }, [filters]);

  useEffect(() => {
    const filterParam = filterToString();
    let param = filterParam ? `filter=${filterParam}` : '';
    instance
      .get(`/products/countItems?${param}`)
      .then(resp => {
        setTotalItems(resp.data);
      })
      .catch(err => console.log(err));
  }, [filters]);
  const handleSearch = value => {
    handleLoading(false);
    let param = '';
    if (value !== '') {
      param = `?search=${value}`;
      instance
        .get(`/products/search${param}`)
        .then(resp => {
          handleLoading(true);
          setProducts(resp.data);
          setTotalItems(resp.data.length);
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      setFilters({
        ...filters,
        selector: {
          width: 0,
          color: 0,
          brand: 0,
        },
      });
    }
  };
  window.scrollTo(0, 200);
  return (
    <div className="colorlib-product">
      <div className="container">
        <div className="row" style={{ position: 'relative' }}>
          <Search handleSearch={handleSearch} />
        </div>
        <div className="row">
          <Selector handleSet={handleSet} isProductPage={true} />
          <div className="col-lg-9 col-xl-9">
            <div className="row row-pb-md">{showProductList(products)}</div>
            <Pagination totalProducts={totalItems} handleSet={handleSet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
