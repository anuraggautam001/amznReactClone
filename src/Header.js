import React from 'react';
import "./header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
        <a href="/"><img alt='logo' className= 'header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' /></a>    
        <div className='header_search'>
           <input className='header_searchInput' type="text" />
           <SearchIcon className='header_searchIcon' /> 
        </div>
        <div className='header_nav'>
            <div className='header_option'>
               <span className='header_optionLineOne'>Hello Guest</span>
               <span className='header_optionLineTwo'>Sign In</span>
            </div>
            <div className='header_option'>
               <span className='header_optionLineOne'>Returns</span>
               <span className='header_optionLineTwo'>& orders</span>
            </div>
            <div className='header_option'>
               <span className='header_optionLineOne'>Your</span>
               <span className='header_optionLineTwo'>Prime</span>
            </div>

            <div className='header_optionBasket'>
                <ShoppingBasketIcon />
                <span className='header_optionLineTwo header_basketCount'>0</span>
            </div>


        </div>
    </div>
  );
}

export default Header;