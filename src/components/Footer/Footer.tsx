import './Footer.css'

export function Footer() {
    return (
        <footer className='footer-body'>
            <div className='newsletter-body'>
                <div className='newsletter-wrap'>
                    <div className='newsletter-heading-wrap'>
                        <p className='news-heading'>Subscribe to our Newsletter</p>
                        <p className='news-desc'>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.</p>
                    </div>
                    <div className='input-div'>
                        <input type="email" placeholder='Your email address' className='email-input' />
                        <button className='sub-button'>Subscribe</button>
                    </div>
                    <div className='socials-wrap'>
                        <a href='#' className='social'><img src="./icons/facebook.svg" alt="" /></a>
                        <a href='#' className='social'><img src="./icons/twitter.svg" alt="" /></a>
                        <a href='#' className='social'><img src="./icons/pinterest.svg" alt="" /></a>
                        <a href='#' className='social'><img src="./icons/instagram.svg" alt="" /></a>
                    </div>
                </div>
            </div>
            <div className='main-footer-body'>
                <div className='main-footer-wrap'>
                    <div className='nav-wrap'>
                        <div className='main-info'>
                            <a href="#"><img src="./icons/white-logo.png" alt="" className='white-site-logo' /></a>
                            <p className='grey-text'>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui,
                                eget bibendum magna congue nec.</p>
                            <div className='footer-contacts'>
                                <a href='' className='contact-info'>(219) 555-0114</a>
                                <p className='grey-text'>or</p>
                                <a href='' className='contact-info'>Proxy@gmail.com</a>
                            </div>
                        </div>
                        <nav>
                            <p className='nav-heading'>My Account</p>
                            <div className='nav-content'>
                                <a href='#'>My Account</a>
                                <a href='#'>Order History</a>
                                <a href='#'>Shopping Cart</a>
                                <a href='#'>Wishlist</a>
                            </div>
                        </nav>
                        <nav>
                            <p className='nav-heading'>Helps</p>
                            <div className='nav-content'>
                                <a href='#'>Contact</a>
                                <a href='#'>Faqs</a>
                                <a href='#'>Terms & Conditions</a>
                                <a href='#'>Privacy Policy</a>
                            </div>
                        </nav>
                        <nav>
                            <p className='nav-heading'>Proxy</p>
                            <div className='nav-content'>
                                <a href='#'>About</a>
                                <a href='#'>Shop</a>
                                <a href='#'>Product</a>
                                <a href='#'>Track Order</a>
                            </div>
                        </nav>
                        <nav>
                            <p className='nav-heading'>Categories</p>
                            <div className='nav-content'>
                                <a href='#'>Fruit & Vegetables</a>
                                <a href='#'>Meat & Fish</a>
                                <a href='#'>Bread & Bakery</a>
                                <a href='#'>Beauty & Health</a>
                            </div>
                        </nav>
                    </div>
                    <hr className='footer-hr'/>
                    <div className='lower-footer'>
                        <p className='grey-text'>Ecobazar eCommerce © 2021. All Rights Reserved</p>
                        <div className='payment-methods-wrap'>
                            <a href="" className='pmnt-mtd'><img src="./payments/apple-pay.png" alt="" /></a>
                            <a href="" className='pmnt-mtd'><img src="./payments/visa-logo.png" alt="" /></a>
                            <a href="" className='pmnt-mtd'><img src="./payments/discover.png" alt="" /></a>
                            <a href="" className='pmnt-mtd'><img src="./payments/mastercard.png" alt="" /></a>
                            <a href="" className='pmnt-mtd wider-mtd'><img src="./payments/secure-payment.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}