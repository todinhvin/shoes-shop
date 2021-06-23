import React, { useState, useEffect } from 'react';
import { getProductById } from '../apis/products';
import Size from './FilterProducts/Size';
import Width from './FilterProducts/Width';
import { useDispatch } from 'react-redux';
import { saveCartItem } from '../actions/Carts';
import Header from './Header';
import Footer from './Footer';
import Swal from 'sweetalert2';
import Loading from './Loading';
function ProductDetails(props) {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [isShowLoading, setIsShowLoading] = useState(true);
  const [size, setSize] = useState({
    name: '37',
    id: 1,
  });
  const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    getProductById(props.match.params.id)
      .then(resp => {
        setProduct(resp.data);
        setIsShowLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 300);
  }, []);
  const onSetSize = newSize => {
    if (newSize.name !== size.name) {
      setSize({
        name: newSize.name,
        id: newSize.id,
      });
    }
  };
  const onSetQuantity = number => {
    setQuantity(quantity + number);
  };
  const onAddToCart = e => {
    e.preventDefault();
    let cartItem = {
      product,
      size,
      quantity,
    };
    dispatch(saveCartItem(cartItem));
    Swal.fire({
      icon: 'success',
      title: 'Thêm vào giỏ hàng thành công',
      showConfirmButton: true,
      timer: 1500,
    });
  };
  return (
    <React.Fragment>
      <Header />
      <div className="colorlib-product">
        <div className="container">
          <div className="row row-pb-lg product-detail-wrap">
            {isShowLoading ? <Loading /> : ''}
            <div className="col-sm-8">
              <img
                src={`/images/${product.thumbnail}`}
                className="img-fluid"
                alt="Free html5 bootstrap 4 template"
              />
            </div>
            <div className="col-sm-4">
              <div className="product-desc">
                <h2>{product.description}</h2>
                <p className="price">
                  <span>{product.price ? product.price.format() : ''} đ</span>
                </p>
                <p>{product.content}</p>
                <div className="size-wrap">
                  <Size
                    onSetSize={onSetSize}
                    sizeDefault={size.name}
                    showAll={false}
                    setItem={true}
                  />
                </div>
                <div className="input-group mb-4">
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="quantity-left-minus btn"
                      data-type="minus"
                      data-field=""
                      onClick={() => onSetQuantity(-1)}
                      disabled={quantity <= 1}
                    >
                      <i className="icon-minus2"></i>
                    </button>
                  </span>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    className="form-control input-number"
                    value={quantity}
                    min="1"
                    max="10"
                    disabled
                  />
                  <span className="input-group-btn ml-1">
                    <button
                      type="button"
                      className="quantity-right-plus btn"
                      data-type="plus"
                      data-field=""
                      onClick={() => onSetQuantity(1)}
                      disabled={quantity >= 10}
                    >
                      <i className="icon-plus2"></i>
                    </button>
                  </span>
                </div>
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <p className="addtocart">
                      <a
                        href="cart.html"
                        className="btn btn-primary btn-addtocart"
                        onClick={onAddToCart}
                      >
                        <i className="icon-shopping-cart"></i> Add to Cart
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gototop js-top">
        <a href="/#" className="js-gotop">
          <i className="ion-ios-arrow-up"></i>
        </a>
      </div>
      <Footer />
    </React.Fragment>
  );
}
Number.prototype.format = function (n, x) {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
  return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};
export default ProductDetails;
