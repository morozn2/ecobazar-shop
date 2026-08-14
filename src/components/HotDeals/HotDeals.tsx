import './HotDeals.css'

export function HotDeals() {
    return (
        <section className='hot-deals'>
            <div className='hot-deals-box'>
                <div className='categories-heading-wrap'>
                    <p className='categories-heading'>Hot Deals</p>
                    <a href="#" className='view-all'>
                        <p>View All</p>
                        <p>🡢</p>
                    </a>
                </div>
                <div className='hot-deals-wrap'>
                    <div className='special-offer'>
                        <div className='labels-container'>
                            <div className='sale-container-hot-deals'>
                                <p className='sale-text'>Sale <span className='.sale-percent'>50%</span></p>
                            </div>
                            <div className='best-sale-hot-deals'>
                                <p className='sale-text'>Best Sale</p>
                            </div>
                        </div>
                        <img src="./product-pics/hot-deals-apples.png" alt="" className='hot-deal-pic' />
                        <div className='special-offer-options'>
                            <a href="">
                                <button className='circle-button'>
                                    <img src="./icons/heart.png" alt="" className='small-button-icon' />
                                </button>
                            </a>
                            <a href="" className='to-cart-link'>
                                <button className='big-to-cart-button'>Add to Cart <img src="./icons/white-cart.svg" alt="" className='cart-icon' /></button>
                            </a>
                            <a href="">
                                <button className='circle-button'>
                                    <img src="./icons/eye.png" alt="" className='small-button-icon' />
                                </button>
                            </a>
                        </div>
                        <div className='special-offer-info'>
                            <p className='offer-heading'>Green Apples</p>
                            <p className='offer-price'>$12.00 <span className='offer-old-price'>$24.00</span></p>
                            <div className='rating'>
                                <img src="./icons/five-stars.png" alt="" />
                                <a href='' className='feedback'>(524 feedback)</a>
                            </div>
                        </div>
                        <p className='timer-text'>Hurry up! Offer ends in:</p>
                        <div className='timer-hot-deals'>
                            <div className='timer-section'>
                                <p className='timer-num-black'>00</p>
                                <p className='timer-desc-grey'>DAYS</p>
                            </div>
                            <div className='two-dots-black'>
                                <p>:</p>
                            </div>
                            <div className='timer-section'>
                                <p className='timer-num-black'>02</p>
                                <p className='timer-desc-grey'>HOURS</p>
                            </div>
                            <div className='two-dots-black'>
                                <p>:</p>
                            </div>
                            <div className='timer-section'>
                                <p className='timer-num-black'>18</p>
                                <p className='timer-desc-grey'>MINS</p>
                            </div>
                            <div className='two-dots-black'>
                                <p>:</p>
                            </div>
                            <div className='timer-section'>
                                <p className='timer-num-black'>46</p>
                                <p className='timer-desc-grey'>SECS</p>
                            </div>
                        </div>
                    </div>
                    <div className='top-hot-deals'>
                        <div className='hot-product'>
                            <img src="./product-pics/cabbage.png" alt="" className='prod-img' />
                            <div className='prod-info-wrap'>
                                <div className='pop-prod-info'>
                                    <p className='prod-title'>Chinese Cabbage</p>
                                    <p className='prod-price'>$12.00</p>
                                    <img src="./icons/rating.png" alt="" className='prod-rating' />
                                </div>
                                <a href="#"><button className='to-cart'><img src="./icons/bag.svg" alt="" /></button></a>
                            </div>
                        </div>
                        <div className='hot-product'>
                            <img src="./product-pics/lettuce.png" alt="" className='prod-img' />
                            <div className='prod-info-wrap'>
                                <div className='pop-prod-info'>
                                    <p className='prod-title'>Green Lettuce</p>
                                    <p className='prod-price'>$9.00</p>
                                    <img src="./icons/rating.png" alt="" className='prod-rating' />
                                </div>
                                <a href="#"><button className='to-cart'><img src="./icons/bag.svg" alt="" /></button></a>
                            </div>
                        </div>
                        <div className='hot-product'>
                            <img src="./product-pics/eggplant.png" alt="" className='prod-img' />
                            <div className='prod-info-wrap'>
                                <div className='pop-prod-info'>
                                    <p className='prod-title'>Eggplant</p>
                                    <p className='prod-price'>$34.00</p>
                                    <img src="./icons/rating.png" alt="" className='prod-rating' />
                                </div>
                                <a href="#"><button className='to-cart'><img src="./icons/bag.svg" alt="" /></button></a>
                            </div>
                        </div>
                        <div className='hot-product'>
                            <img src="./product-pics/cauliflower.png" alt="" className='prod-img' />
                            <div className='prod-info-wrap'>
                                <div className='pop-prod-info'>
                                    <p className='prod-title'>Fresh Cauliflower</p>
                                    <p className='prod-price'>$12.00</p>
                                    <img src="./icons/rating.png" alt="" className='prod-rating' />
                                </div>
                                <a href="#"><button className='to-cart'><img src="./icons/bag.svg" alt="" /></button></a>
                            </div>
                        </div>
                        <div className='hot-product'>
                            <div className='sale-container'>
                                <p className='sale-text'>Sale <span className='.sale-percent'>50%</span></p>
                            </div>
                            <img src="./product-pics/capsicum.png" alt="" className='prod-img' />
                            <div className='prod-info-wrap'>
                                <div className='pop-prod-info'>
                                    <p className='prod-title'>Green Capsicum</p>
                                    <p className='prod-price'>$9.00 <span className='old-price'>$20.99</span></p>
                                    <img src="./icons/rating.png" alt="" className='prod-rating' />
                                </div>
                                <a href="#"><button className='to-cart'><img src="./icons/bag.svg" alt="" /></button></a>
                            </div>
                        </div>
                        <div className='hot-product'>
                            <img src="./product-pics/chili.png" alt="" className='prod-img' />
                            <div className='prod-info-wrap'>
                                <div className='pop-prod-info'>
                                    <p className='prod-title'>Green Chili</p>
                                    <p className='prod-price'>$34.00</p>
                                    <img src="./icons/rating.png" alt="" className='prod-rating' />
                                </div>
                                <a href="#"><button className='to-cart'><img src="./icons/bag.svg" alt="" /></button></a>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-hot-deals'>
                        <div className='bottom-hot-product'>
                            <img src="./product-pics/potatoes.png" alt="" className='prod-img' />
                            <div className='prod-info-wrap'>
                                <div className='pop-prod-info'>
                                    <p className='prod-title'>Big Potatoes</p>
                                    <p className='prod-price'>$12.00</p>
                                    <img src="./icons/rating.png" alt="" className='prod-rating' />
                                </div>
                                <a href="#"><button className='to-cart'><img src="./icons/bag.svg" alt="" /></button></a>
                            </div>
                        </div>
                        <div className='bottom-hot-product'>
                            <img src="./product-pics/corn.png" alt="" className='prod-img' />
                            <div className='prod-info-wrap'>
                                <div className='pop-prod-info'>
                                    <p className='prod-title'>Corn</p>
                                    <p className='prod-price'>$12.00</p>
                                    <img src="./icons/rating.png" alt="" className='prod-rating' />
                                </div>
                                <a href="#"><button className='to-cart'><img src="./icons/bag.svg" alt="" /></button></a>
                            </div>
                        </div>
                        <div className='bottom-hot-product'>
                            <img src="./product-pics/red-chili.png" alt="" className='prod-img' />
                            <div className='prod-info-wrap'>
                                <div className='pop-prod-info'>
                                    <p className='prod-title'>Red Chili</p>
                                    <p className='prod-price'>$12.00</p>
                                    <img src="./icons/rating.png" alt="" className='prod-rating' />
                                </div>
                                <a href="#"><button className='to-cart'><img src="./icons/bag.svg" alt="" /></button></a>
                            </div>
                        </div>
                        <div className='bottom-hot-product'>
                            <div className='sale-container'>
                                <p className='sale-text'>Sale <span className='.sale-percent'>50%</span></p>
                            </div>
                            <img src="./product-pics/tomatoes.png" alt="" className='prod-img' />
                            <div className='prod-info-wrap'>
                                <div className='pop-prod-info'>
                                    <p className='prod-title'>Tomatoes</p>
                                    <p className='prod-price'>$9.00 <span className='old-price'>$20.99</span></p>
                                    <img src="./icons/rating.png" alt="" className='prod-rating' />
                                </div>
                                <a href="#"><button className='to-cart'><img src="./icons/bag.svg" alt="" /></button></a>
                            </div>
                        </div>
                        <div className='bottom-hot-product'>
                            <img src="./product-pics/mango.png" alt="" className='prod-img' />
                            <div className='prod-info-wrap'>
                                <div className='pop-prod-info'>
                                    <p className='prod-title'>Surjapur Mango</p>
                                    <p className='prod-price'>$34.00</p>
                                    <img src="./icons/rating.png" alt="" className='prod-rating' />
                                </div>
                                <a href="#"><button className='to-cart'><img src="./icons/bag.svg" alt="" /></button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}