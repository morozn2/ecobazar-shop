import './Header.css'

export function Header() {
    return (
        <header>
            <div className='small-nav'>
                <div className='location-wrap'>
                    <img src="./icons/map-pin.png" alt="" />
                    <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
                </div>
                <div className='small-nav-content'>
                    <div className='small-nav-options'>
                        <select name="language" id="language">
                            <option value="Eng">Eng</option>
                            <option value="Ua">Ua</option>
                        </select>
                        <select name="currency" id="currency">
                            <option value="USD">USD</option>
                            <option value="UAH">UAH</option>
                        </select>
                    </div>
                    <hr className='nav-hr' />
                    <p>Sign In / Sign Up</p>
                </div>
            </div>
            <div className='middle-nav'>
                <a href="home"><img src="logo.png" alt="Ecobazar logo" /></a>
                <div className='search-wrap'>
                    <img src="./icons/search.png" alt="" className='search-icon' />
                    <input type="search" id='search' placeholder='Search' />
                    <button className='search-button'>Search</button>
                </div>
                <div className='header-options'>
                    <img src="./icons/heart.png" alt="" className='option-icon' />
                    <hr className='middle-nav-hr' />
                    <img src="./icons/cart.png" alt="" className='option-icon' />
                    <div className='cart-info'>
                        <p className='cart-heading'>Shopping cart:</p>
                        <p className='cart-total'>$57.00</p>
                    </div>
                </div>
            </div>
            <div className='lower-nav'>
                <div className='nav-links'>
                    <select name="home" id="home">
                        <option value="Home">Home</option>
                    </select>
                    <select name="shop" id="shop">
                        <option value="Shop">Shop</option>
                    </select>
                    <select name="pages" id="pages">
                        <option value="Pages">Pages</option>
                    </select>
                    <select name="blog" id="blog">
                        <option value="Blog">Blog</option>
                    </select>
                    <a href="about">About Us</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className='contacts'>
                    <img src="./icons/phone.png" alt="" />
                    <p>(219) 555-0114</p>
                </div>
            </div>
        </header>
    )
}