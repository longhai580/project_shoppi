import React, { Component } from 'react';
import { Link} from 'react-router-dom';

import MyContext from '../contexts/MyContext';
import SearchComponent from './SearchComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faStore } from '@fortawesome/free-solid-svg-icons';

import './Inform.css'
class Inform extends Component {
  static contextType = MyContext; // using this.context to access global state
  constructor(props) {
    super(props);

    this.state = {
      isDropdownOpen: false,
    };
  }

  handleSearch = (keyword) => {
    const { history } = this.props;
    history.push('/product/search/' + keyword);
  };
  toggleDropdown = () => {
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen,
    }));
  };
  render() {
    const { isDropdownOpen } = this.state;
    return (
      <div className="border-bottom">
        <div className="float-left">
          <div className='search'>          
            <SearchComponent onSearch={this.handleSearch} />
          </div>
          <div className='hotline'>
            <FontAwesomeIcon icon={faPhoneVolume} shake />
            <p>HOTLINE</p>
          </div>
          <div className="cart-wrapper">

          <div className='cart'>
            <Link to='/mycart'><FontAwesomeIcon icon={faCartArrowDown} />
            </Link>
            <span className='quantity'>{' '}
            <b>
            {this.context.mycart.length}</b> </span>
          </div>
          <p className='cart-text'>GIỎ HÀNG<br/> CỦA BẠN</p>

          </div>
          <div className='truck'>
            <FontAwesomeIcon icon={faTruck} />
            <p>VẬN <br/>CHUYỂN</p>
          </div>
          <div className='shop'>
            <FontAwesomeIcon icon={faStore} />
            <p>CỬA <br /> HÀNG</p>
          </div>
        </div>
        <div className="float-right">
          <div onClick={this.toggleDropdown} className="user-icon">
            <FontAwesomeIcon icon={faUser} />
            <p>ĐĂNG<br /> NHẬP</p>
            {isDropdownOpen && (
              <div className="dropdown">
                {this.context.token === '' ? (
                  <ul>
                    <li><Link to='/login'>Login</Link> </li>
                    <li><Link to='/signup'>Sign-up</Link> </li>
                    <li><Link to='/active'>Active</Link></li>
                  </ul>
                ) : (
                  <div>
                    Hello <b>{this.context.customer.name}</b> |{' '}
                    <Link to='/home' onClick={() => this.lnkLogoutClick()}>
                      Logout
                    </Link>{' '}
                    | <Link to='/myprofile'>My profile</Link> |{' '}
                    <Link to='/myorders'>My orders</Link>
                  </div>
                )}
                
              </div>
            )}
          </div>
        </div>
        <div className="float-clear" />
      </div>
    );
  }
  // event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setCustomer(null);
    this.context.setMycart([]);
  }

}
export default Inform;