import React, { useEffect, useState } from 'react';
import instance from '../axiosService';

function ProductForm(props) {
  const user = JSON.parse(localStorage.getItem('admin'));
  const { onClose, productItem, closeForm, onRender } = props;
  const [notify, setNotify] = useState(null);
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  const [widths, setWidths] = useState([]);
  const [form, setForm] = useState({
    product: {
      id: '',
      name: '',
      thumbnail: '',
      description: '',
      content: '',
      price: 0,
      brand: 1,
      color: 1,
      width: 1,
      brandName: '',
      colorName: '',
      widthName: '',
    },
    file: null,
  });
  useEffect(() => {
    instance
      .get('/brands')
      .then(res => {
        setBrands(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    instance
      .get('/colors')
      .then(res => {
        setColors(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    instance
      .get('/widths')
      .then(res => {
        setWidths(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const showArray = array => {
    let result = [];
    result = array.map(item => {
      return (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      );
    });
    return result;
  };
  useEffect(() => {
    if (productItem) {
      setForm({
        ...form,
        product: productItem,
      });
    }
  }, [productItem]);
  const handleSubmit = () => {
    var formData = new FormData();
    const product = JSON.stringify(form.product);
    formData.append('product', product);
    formData.append('img', form.file);

    instance({
      method: 'post',
      url: '/products',
      data: formData,
      headers: { Authorization: 'Bearer ' + user.accessToken },
    })
      .then(resp => {
        setNotify(true);
        closeForm();
        onRender();
      })
      .catch(err => {
        setNotify(false);
      });
  };
  const handleChange = e => {
    if (e.target.name === 'file') {
      setForm({
        ...form,
        file: e.target.files[0],
      });
    } else {
      setForm({
        ...form,
        product: {
          ...form.product,
          [e.target.name]: e.target.value,
        },
      });
    }
  };
  let img = false;
  let column = 0;
  if (form.product.thumbnail != '') {
    column = 2;
    img = true;
  }
  let mess = '';
  let type = '';
  if (notify) {
    type = 'success';
    mess = 'Thành công';
  } else if (notify === false) {
    type = 'danger';
    mess = 'Thất bại';
  }
  return (
    <React.Fragment>
      <div className={`alert alert-${type}`} role="alert">
        {mess}
      </div>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter product name"
            value={form.product.name}
            onChange={handleChange}
            name="name"
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            className="form-control"
            placeholder="Enter product description"
            value={form.product.description}
            onChange={handleChange}
            name="description"
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea
            className="form-control"
            placeholder="Enter product content"
            value={form.product.content}
            onChange={handleChange}
            name="content"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Thumbnail</label>

          <div className="row">
            {img ? (
              <div
                className={`col-xs-${column} col-sm-${column} col-md-${column} col-lg-${column}`}
              >
                <img
                  src={`vendors/images/${form.product.thumbnail}`}
                  width="140"
                  height="140"
                  alt=""
                />
              </div>
            ) : (
              ''
            )}

            <div
              style={{ margin: 'auto' }}
              className={`col-xs-${12 - column} col-sm-${12 - column} col-md-${
                12 - column
              } col-lg-${12 - column}`}
            >
              <input
                type="file"
                className="form-control-file form-control height-auto"
                onChange={handleChange}
                name="file"
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            className="form-control"
            placeholder="Enter product price"
            value={form.product.price}
            onChange={handleChange}
            name="price"
          />
        </div>
        <div className="form-group">
          <label>Brand</label>
          <select
            name="brand"
            className="form-control"
            value={form.product.brand}
            onChange={handleChange}
          >
            {showArray(brands)}
          </select>
        </div>
        <div className="form-group">
          <label>Width</label>
          <select
            name="width"
            className="form-control"
            value={form.product.width}
            onChange={handleChange}
          >
            {showArray(widths)}
          </select>
        </div>
        <div className="form-group">
          <label>Color</label>
          <select
            name="color"
            className="form-control"
            value={form.product.color}
            onChange={handleChange}
          >
            {showArray(colors)}
          </select>
        </div>
        <button
          type="button"
          className="btn btn-success mbt-40 mr-15"
          onClick={handleSubmit}
        >
          Xác nhận
        </button>
        <button
          type="button"
          className="btn btn-danger mbt-40 mr-15"
          onClick={onClose}
        >
          Hủy bỏ
        </button>
      </form>
    </React.Fragment>
  );
}

export default ProductForm;
