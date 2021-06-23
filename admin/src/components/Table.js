import React, { useEffect, useState } from 'react';
import Search from './Search';
import instance from './../axiosService';
import Swal from 'sweetalert2';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';
function Table(props) {
  const { editProduct, tableName, productData, isRender } = props;
  const [data, setData] = useState([]);
  const user = JSON.parse(localStorage.getItem('admin'));
  const [totalItems, setTotalItems] = useState(0);
  const database = tableName === 'products' ? true : false;
  const [pagi, setPagi] = useState({
    pageNumber: 1,
    pageSize: 10,
  });
  Number.prototype.format = function (n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
  };
  useEffect(() => {
    if (!database) {
      instance
        .get('/orders/countItems', {
          headers: {
            Authorization: 'Bearer ' + user.accessToken,
          },
        })
        .then(resp => {
          setTotalItems(resp.data);
        })
        .catch(err => console.log(err));
    } else {
      instance
        .get('/products/countItems')
        .then(resp => {
          setTotalItems(resp.data);
        })
        .catch(err => console.log(err));
    }
  }, [isRender]);

  useEffect(() => {
    let pagination =
      '"pageNumber":' + pagi.pageNumber + ',"pageSize":' + pagi.pageSize;
    if (tableName !== database) {
      instance
        .get(`/${tableName}?pagination=${pagination}`, {
          headers: {
            Authorization: 'Bearer ' + user.accessToken,
          },
        })
        .then(resp => {
          setData(resp.data);
        })
        .catch(err => console.log(err));
    } else {
      instance
        .get(`/${tableName}?pagination=${pagination}`)
        .then(resp => {
          setData(resp.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [pagi, isRender]);

  const handleSearch = value => {
    let param = `search=${value}`;
    instance
      .get(`/${tableName}/search?${param}`)
      .then(resp => {
        setData(resp.data);
        setTotalItems(resp.data.length);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handlePagi = data => {
    setPagi({
      ...pagi,
      pageNumber: data,
    });
  };
  const handleChange = event => {
    if (+event.target.value !== pagi.pageSize) {
      setPagi({
        ...pagi,
        pageSize: +event.target.value,
      });
    }
  };
  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Delete product',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        instance
          .delete(`/${tableName}?id=${id}`, {
            headers: {
              Authorization: 'Bearer ' + user.accessToken,
            },
          })
          .then(res => {
            Swal.fire('Deleted!', 'Xóa sản phẩm thành công.', 'success');
            setPagi({
              ...pagi,
            });
          })
          .catch(err => console.log(err));
      }
    });
  };

  const showData = () => {
    let result = [];
    result = data.map((item, index) => {
      if (database) {
        return (
          <tr key={index} id={index}>
            <td className="table-plus">
              <img
                src={`vendors/images/${item.thumbnail}`}
                width="70"
                height="70"
                alt=""
              />
            </td>
            <td>
              <h5 className="font-16">{item.name}</h5>
            </td>
            <td>
              <h5 className="font-16">{item.description}</h5>
            </td>
            <td>{item.colorName}</td>
            <td>{item.brandName}</td>
            <td>{item.widthName}</td>
            <td>{item.price.format()} đ</td>
            <td>
              <div className="dropdown">
                <a
                  className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                >
                  <i className="dw dw-more"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                  <Link
                    className="dropdown-item"
                    onClick={() => editProduct(item.id)}
                  >
                    <i className="dw dw-edit2"></i> Edit
                  </Link>
                  <Link
                    className="dropdown-item"
                    onClick={() => handleDelete(item.id)}
                  >
                    <i className="dw dw-delete-3"></i> Delete
                  </Link>
                </div>
              </div>
            </td>
          </tr>
        );
      }
      return (
        <tr key={index} id={index}>
          <td className="table-plus">
            <img
              src={`vendors/images/${item.productDTO.thumbnail}`}
              width="70"
              height="70"
              alt=""
            />
          </td>
          <td>
            <h5 className="font-16">{item.productDTO.name}</h5>
          </td>
          <td>{item.fullName}</td>
          <td>{item.size}</td>
          <td>{item.productDTO.brandName}</td>
          <td>{item.productDTO.price.format()} đ</td>
          <td>{item.quantity}</td>
          <td>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleDelete(item.id)}
            >
              <i className="dw dw-delete-3"></i> Delete
            </a>
          </td>
        </tr>
      );
    });
    return result;
  };
  if (!data) {
    return '';
  }
  return (
    <div className="card-box mb-30">
      <h2 className="h4 pd-20">
        {database ? 'Products Table' : 'Orders Table'}
      </h2>
      <div className="row" style={{ margin: 'auto' }}>
        <div className="col-sm-12 col-md-6 show-entries">
          Show
          <select
            name="number"
            id="inputnumber"
            className="form-control"
            required="required"
            value={pagi.pageSize}
            onChange={handleChange}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100000">ALL</option>
          </select>
          Entries
        </div>
        <Search handleSearch={handleSearch} />
      </div>

      <table className="data-table table nowrap">
        <thead>
          {database ? (
            <tr>
              <th className="table-plus datatable-nosort">Product</th>
              <th>Name</th>
              <th>Description</th>
              <th>Color</th>
              <th>Brand</th>
              <th>Width</th>
              <th>Price</th>
              <th className="datatable-nosort">Action</th>
            </tr>
          ) : (
            <tr>
              <th className="table-plus datatable-nosort">Product</th>
              <th>Product Name</th>
              <th>Custom Name</th>
              <th>Size</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Oty</th>
              <th className="datatable-nosort">Action</th>
            </tr>
          )}
        </thead>
        <tbody>{showData()}</tbody>
      </table>
      <Pagination
        totalItems={totalItems}
        handlePagi={handlePagi}
        itemPerPage={pagi.pageSize}
      />
    </div>
  );
}

Number.prototype.format = function (n, x) {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
  return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};
export default Table;
