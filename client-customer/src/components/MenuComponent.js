// Menu.jsx

import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../utils/withRouter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { faTabletScreenButton } from '@fortawesome/free-solid-svg-icons';
import SliderComponent from './SliderComponent';  // Import SliderComponent

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      isSliderOpen: true  // Thêm trạng thái cho SliderComponent
    };
  }

  render() {
    const cates = this.state.categories.map((item) => (
      <li key={item._id} className="menu">
        <Link to={'/product/category/' + item._id}>
        {item.name === 'iPhone' ? (
            <FontAwesomeIcon icon={faMobileScreenButton} />
          ) : item.name === 'macbook' ? (
            <FontAwesomeIcon icon={faLaptop} />
          ) : (
            // Icon mặc định cho các loại sản phẩm khác
            <FontAwesomeIcon icon={faTabletScreenButton} />
          )}
          {item.name}</Link>
      </li>
    ));

    return (
      <div className="menu-border-bottom">
        <div className="menu-float-left">
          <ul className="menu">
            <li className="menu">
              <Link to='/'>Trang chủ</Link>
            </li>
            {cates}
            <li className="menu"><Link to='/gmap'>Gmap</Link></li>
          </ul>
        </div>
        <div className="float-right">
        

        </div>
        <div className="float-clear" />
        <SliderComponent arrImages={['image1.png', 'image2.png']} isOpen={this.state.isSliderOpen} />

      </div>
    );
  }

  componentDidMount() {
    this.apiGetCategories();
  }

  apiGetCategories() {
    axios.get('/api/customer/categories').then((res) => {
      const result = res.data;
      this.setState({ categories: result });
    });
  }

  handleSearch = (keyword) => {
    this.props.navigate('/product/search/' + keyword);
  };
  toggleSlider = () => {
    this.setState((prevState) => ({
      isSliderOpen: !prevState.isSliderOpen,
    }));
  };
}

export default withRouter(Menu);
