import React, { useEffect, useState } from 'react';
import instance from '../axiosService';

function SelectorForm(props) {
  const { selectorName } = props;
  const user = JSON.parse(localStorage.getItem('admin'));
  const [selector, setSelector] = useState({
    id: '',
    name: '',
  });
  const [renderData, setRenderData] = useState(false);
  const handleChange = e => {
    setSelector({
      ...selector,
      name: e.target.value,
    });
  };
  const [data, setData] = useState([]);
  useEffect(() => {
    instance
      .get(`/${selectorName}`)
      .then(resp => {
        setData(resp.data);
      })
      .catch(err => console.log(err));
  }, [renderData]);
  const [isShowInputAdd, setIsShowInputAdd] = useState(false);
  const [isShowInputUpdate, setIsShowInputUpdate] = useState(false);
  const handleChangeInputAdd = () => {
    if (isShowInputUpdate) {
      setIsShowInputUpdate(false);
      setSelector({
        id: '',
        name: '',
      });
      setIsShowInputAdd(true);
    } else setIsShowInputAdd(!isShowInputAdd);
  };
  const handleCancel = () => {
    setIsShowInputAdd(false);
    setIsShowInputUpdate(false);
  };

  const handleUpdate = e => {
    e.preventDefault();
    const id = e.target.id;
    setIsShowInputAdd(false);
    setIsShowInputUpdate(true);
    instance
      .get(`/${selectorName}/${id}`)
      .then(resp => {
        setSelector(resp.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const handleSave = () => {
    if (selector.name !== '') {
      instance({
        method: 'post',
        url: `/${selectorName}`,
        data: selector,
        headers: { Authorization: 'Bearer ' + user.accessToken },
      })
        .then(resp => {
          setRenderData(!renderData);
          setIsShowInputAdd(false);
          setIsShowInputUpdate(false);
        })
        .catch(err => console.log(err));
    }
  };
  const handleDelete = id => {
    instance({
      method: 'delete',
      url: `/${selectorName}?id=${id}`,
      headers: { Authorization: 'Bearer ' + user.accessToken },
    })
      .then(resp => {
        console.log(resp.data);
        setRenderData(!renderData);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const showData = () => {
    let result = '';
    result = data.map((item, index) => {
      return (
        <tr key={item.id}>
          <td className="table-plus">{index + 1}</td>
          <td>
            <h5 className="font-16">{item.name}</h5>
          </td>
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
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={handleUpdate}
                  id={item.id}
                >
                  <i className="dw dw-edit2"></i> Edit
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => handleDelete(item.id)}
                >
                  <i className="dw dw-delete-3"></i> Delete
                </a>
              </div>
            </div>
          </td>
        </tr>
      );
    });
    return result;
  };
  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className="card-box mb-30">
        <div className="row" style={{ justifyContent: 'space-around' }}>
          <h2 className="h4 pd-20">
            {selectorName === 'colors' ? 'Colors' : 'Brands'}
          </h2>

          <button
            type="button"
            className="btn btn-success"
            style={{ borderRadius: '4px', height: '50px', marginTop: '10px' }}
            onClick={handleChangeInputAdd}
          >
            Add {selectorName === 'colors' ? 'Color' : 'Brand'}
          </button>
        </div>

        <table className="data-table table nowrap">
          <thead>
            <tr>
              <th className="table-plus datatable-nosort">STT</th>
              <th> Name</th>
              <th className="datatable-nosort">Action</th>
            </tr>
          </thead>
          <tbody>
            {showData()}
            {isShowInputAdd || isShowInputUpdate ? (
              <tr>
                <td>
                  <input
                    type="text"
                    name="selector"
                    id="inputcolor"
                    className="form-control"
                    value={selector.name}
                    required="required"
                    placeholder="Enter value"
                    onChange={handleChange}
                  />
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    style={{ borderRadius: '4px' }}
                    onClick={handleCancel}
                  >
                    Cancel
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success"
                    style={{ borderRadius: '4px' }}
                    onClick={handleSave}
                  >
                    {isShowInputAdd ? 'Save' : 'Update'}
                  </button>
                </td>
              </tr>
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SelectorForm;
