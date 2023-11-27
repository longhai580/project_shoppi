import axios from 'axios';
import React, { Component } from 'react';
import withRouter from '../utils/withRouter';
import MyContext from '../contexts/MyContext';
import '../styles/ProductDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
class ProductDetail extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      txtQuantity: 1
    };
  }
  render() {
    const prod = this.state.product;
    if (prod != null) {
      return (
        <div className="pro-detail-align-center">
          <div className='name-pro'><p>{prod.category.name}| {prod.name}| Chính hãng VN/A   <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} /></p>
            <p className='ss'>23 đánh giá</p>
            <button type='sumbit'>+ So sánh </button>
          </div>
          <div className="caption-left">
            <div className='product-img'>  
            <FontAwesomeIcon icon={regularHeart} className="icon-heart" />              
            <img className='img-pr' src={"data:image/jpg;base64," + prod.image} width="300px" height="400px" alt="" />
              <div className='des-product'>
              <h2>Tính năng nổi bật</h2>
              <p>{prod.tn}</p>
              </div>
            </div>      
          </div>
          <div className="clear-both"></div>
          < div className='caption-right'>
              <div className='box-detail'>
              <form className='form-product' onSubmit={(e) => this.btnAdd2CartClick(e)}>
                <table>
                  <tbody>             
                    <tr>
                        <td align="right">Số lượng:</td>
                        <td><input type="number" min="1" max="99" value={this.state.txtQuantity} onChange={(e) => { this.setState({ txtQuantity: e.target.value }) }} /></td>
                    </tr>
                    
                  </tbody>
                </table>
                <div className='box-data'>
                  <ul className='list-data'>
                    <li className='item-list-data' onClick={this.handleItemClick}>
                      <span className='check-icon-data'>✔</span>
                      <div className='item-data'>
                        <strong className='item-name-data'>Vàng</strong>
                        <span>{prod.price}</span>
                      </div>
                    </li>
                    <li className='item-list-data' onClick={this.handleItemClick}>
                      <span className='check-icon-data'>✔</span>
                      <div className='item-data'>
                        <strong className='item-name-data'>Vàng</strong>
                        <span>{prod.price}</span>
                      </div>
                    </li>
                    <li className='item-list-data' onClick={this.handleItemClick}>
                      <span className='check-icon-data'>✔</span>
                      <div className='item-data'>
                        <strong className='item-name-data'>Vàng</strong>
                        <span>{prod.price}</span>
                      </div>
                    </li>
                        
                  </ul>
                  </div>
                <div className='box-product-varian'>
                  <div className='box-title'>Chọn màu để xem giá và chi nhánh còn hàng</div>
                  <div className='box-price'>
                  <ul className='list-variant'>
                    <li className='item-list-variant' onClick={this.handleItemClick}>
                      <span className='check-icon'>✔</span>
                      <a className='align-item-center'>
                      <img  src={"data:image/jpg;base64," + prod.image} width="50px" height="50px" alt="" />
                      <div className='item-des'>
                        <strong className='item-name'>Vàng</strong>
                        <span>{prod.price}</span>
                      </div>
                      </a>
                    </li>
                    <li className='item-list-variant' onClick={this.handleItemClick}>
                    <span className='check-icon'>✔</span>
                      <a>
                      <img  src={"data:image/jpg;base64," + prod.image} width="50px" height="50px" alt="" />
                      <div className='item-des'>
                        <strong className='item-name'>Vàng</strong>
                        <span>{prod.price}</span>
                      </div>
                      </a>
                    </li>
                    <li className='item-list-variant' onClick={this.handleItemClick}>
                      <span className='check-icon'>✔</span>
                      <a>
                      <img  src={"data:image/jpg;base64," + prod.image} width="50px" height="50px" alt="" />
                      <div className='item-des'>
                        <strong className='item-name'>Vàng</strong>
                        <span>{prod.price}</span>
                      </div>
                      </a>
                    </li>
                    <li className='item-list-variant' onClick={this.handleItemClick}>
                      <span className='check-icon'>✔</span>
                      <a>
                      <img  src={"data:image/jpg;base64," + prod.image} width="50px" height="50px" alt="" />
                      <div className='item-des'>
                        <strong className='item-name'>Vàng</strong>
                        <span>{prod.price}</span>
                      </div>
                      </a>
                    </li>
                    <li className='item-list-variant'onClick={this.handleItemClick}>
                      <span className='check-icon'>✔</span>
                      <a>
                      <img  src={"data:image/jpg;base64," + prod.image} width="50px" height="50px" alt="" />
                      <div className='item-des'>
                        <strong className='item-name'>Vàng</strong>
                        <span>{prod.price}</span>
                      </div>
                      </a>
                    </li>
                  </ul>
                  </div>
                </div>
                
                <div className='btn-price'>
                      <div className='textPrice-old'>
                        <p>20000000</p>
                        <p>Khi thu củ</p>
                        </div>
                      <div className='txtPr'>
                        <p>{prod.price}</p>
                      </div>
                    </div>
                <div className='btn-buy-now'>
                      <div className='btn-buy'>
                      <button onClick={(e) => this.handleBuyNowClick(e)}>MUA NGAY
                      <p>(Giao nhanh từ 2 giờ hoặc nhận tại cửa hàng)</p>
                      </button>
                      </div>
                      <div className='btn-cart'>
                        <button type="submit"><FontAwesomeIcon icon={faCartArrowDown} bounce className="custom-cart-icon" />                        
                        <p>Thêm vào giỏ hàng</p>
                        </button>
                      </div>
                </div>
              </form>
              </div> 
            </div>
        </div>
      );
    }
    return (<div />);
  }
  handleItemClick = (e) => {
    // Ngăn chặn sự kiện lan truyền lên cấp cao
    e.stopPropagation();
  
    // Lấy danh sách tất cả các phần tử và loại bỏ lớp 'active' khỏi chúng
    const items = document.querySelectorAll('.item-list-variant');
    items.forEach(item => {
      item.classList.remove('active');
      const checkIcon = item.querySelector('.check-icon');
      
    if (checkIcon) {
      checkIcon.style.display = 'none';
    }
    });
    handleItemClick = (e) => {
      // Ngăn chặn sự kiện lan truyền lên cấp cao
      e.stopPropagation();
    
      // Lấy danh sách tất cả các phần tử và loại bỏ lớp 'active' khỏi chúng
      const items = document.querySelectorAll('.item-list-data');
      items.forEach(item => {
        item.classList.remove('active');
        const checkIcon = item.querySelector('.check-icon-data');
      if (checkIcon) {
        checkIcon.style.display = 'none';
      }
      });
    
    /// Thêm lớp 'active' và hiển thị icon check cho phần tử được click
  const currentItem = e.currentTarget;
  currentItem.classList.add('active');
  const checkIcon = currentItem.querySelector('.check-icon');
  if (checkIcon) {
    checkIcon.style.display = 'block';
  }
  };
// event-handlers
btnAdd2CartClick(e) {
  e.preventDefault();
  const product = this.state.product;
  const quantity = parseInt(this.state.txtQuantity);
  if (quantity) {
    const mycart = this.context.mycart;
    const index = mycart.findIndex(x => x.product._id === product._id); // check if the _id exists in mycart
    if (index === -1) { // not found, push newItem
      const newItem = { product: product, quantity: quantity };
      mycart.push(newItem);
    } else { // increasing the quantity
      mycart[index].quantity += quantity;
    }
    this.context.setMycart(mycart);
    alert('OK BABY!');
  } else {
    alert('Please input quantity');
  }
}
componentDidMount() {
  const params = this.props.params;
  this.apiGetProduct(params.id);
}
// apis
apiGetProduct(id) {
  axios.get('/api/customer/products/' + id).then((res) => {
    const result = res.data;
    this.setState({ product: result });
  });
}
}
export default withRouter(ProductDetail);