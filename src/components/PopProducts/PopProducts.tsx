import './PopProducts.css'

export function PopProducts() {
    return (
        <div className='pop-prod-wrap'>
            <div className='categories-heading-wrap'>
                <p className='pop-categories-heading'>Popular Products</p>
                <a href="#" className='view-all'>
                    <p>View All</p>
                    <p>🡢</p>
                </a>
            </div>
            <div className='prod-container'>
                <div className='product'>
                    <div className='sale-container'>
                        <p className='sale-text'>Sale <span className='.sale-percent'>50%</span></p>
                    </div>
                    <img src="./pop-prod/apples.png" alt="" className='prod-img'/>
                    <div className='prod-info-wrap'>
                        <div className='pop-prod-info'>
                            <p className='prod-title'>Green Apple</p>
                            <p className='prod-price'>$14.99 <span className='old-price'>$20.99</span></p>
                            <img src="./pop-prod/rating.png" alt="" className='prod-rating' />
                        </div>
                        <a href="#"><button className='to-cart'><img src="./icons/bag.svg" alt="" /></button></a>
                    </div>
                </div>
                <div className='product'>
                    <img src="./pop-prod/malta.png" alt="" className='prod-img'/>
                    <div className='prod-info-wrap'>
                        <div className='pop-prod-info'>
                            <p className='prod-title'>Fresh Indian Malta</p>
                            <p className='prod-price'>$20.00</p>
                            <img src="./pop-prod/rating.png" alt="" className='prod-rating' />
                        </div>
                        <a href="#"><button className='to-cart'><img src="./icons/bag.svg" alt="" /></button></a>
                    </div>
                </div>
                <div className='product'>
                    <img src="./pop-prod/cabbage.png" alt="" className='prod-img'/>
                    <div className='prod-info-wrap'>
                        <div className='pop-prod-info'>
                            <p className='prod-title'>Chinese Cabbage</p>
                            <p className='prod-price'>$12.00</p>
                            <img src="./pop-prod/rating.png" alt="" className='prod-rating' />
                        </div>
                        <a href="#"><button className='to-cart'><img src="./icons/bag.svg" alt="" /></button></a>
                    </div>
                </div>
                <div className='product'>
                    <img src="./pop-prod/lettuce.png" alt="" className='prod-img'/>
                    <div className='prod-info-wrap'>
                        <div className='pop-prod-info'>
                            <p className='prod-title'>Green Lettuce</p>
                            <p className='prod-price'>$9.00</p>
                            <img src="./pop-prod/rating.png" alt="" className='prod-rating' />
                        </div>
                        <a href="#"><button className='to-cart'><img src="./icons/bag.svg" alt="" /></button></a>
                    </div>
                </div>
                <div className='product'>
                    <img src="./pop-prod/eggplant.png" alt="" className='prod-img'/>
                    <div className='prod-info-wrap'>
                        <div className='pop-prod-info'>
                            <p className='prod-title'>Eggplant</p>
                            <p className='prod-price'>$34.00</p>
                            <img src="./pop-prod/rating.png" alt="" className='prod-rating' />
                        </div>
                        <a href="#"><button className='to-cart'><img src="./icons/bag.svg" alt="" /></button></a>
                    </div>
                </div>
                <div className='product'>
                    <img src="./pop-prod/potatoes.png" alt="" className='prod-img'/>
                    <div className='prod-info-wrap'>
                        <div className='pop-prod-info'>
                            <p className='prod-title'>Big Potatoes</p>
                            <p className='prod-price'>$20.00</p>
                            <img src="./pop-prod/rating.png" alt="" className='prod-rating' />
                        </div>
                        <a href="#"><button className='to-cart'><img src="./icons/bag.svg" alt="" /></button></a>
                    </div>
                </div>
                <div className='product'>
                    <img src="./pop-prod/corn.png" alt="" className='prod-img'/>
                    <div className='prod-info-wrap'>
                        <div className='pop-prod-info'>
                            <p className='prod-title'>Corn</p>
                            <p className='prod-price'>$20.00</p>
                            <img src="./pop-prod/rating.png" alt="" className='prod-rating' />
                        </div>
                        <a href="#"><button className='to-cart'><img src="./icons/bag.svg" alt="" /></button></a>
                    </div>
                </div>
                <div className='product'>
                    <img src="./pop-prod/cauliflower.png" alt="" className='prod-img'/>
                    <div className='prod-info-wrap'>
                        <div className='pop-prod-info'>
                            <p className='prod-title'>Fresh Cauliflower</p>
                            <p className='prod-price'>$12.00</p>
                            <img src="./pop-prod/rating.png" alt="" className='prod-rating' />
                        </div>
                        <a href="#"><button className='to-cart'><img src="./icons/bag.svg" alt="" /></button></a>
                    </div>
                </div>
                <div className='product'>
                    <div className='sale-container'>
                        <p className='sale-text'>Sale <span className='.sale-percent'>50%</span></p>
                    </div>
                    <img src="./pop-prod/capsicum.png" alt="" className='prod-img'/>
                    <div className='prod-info-wrap'>
                        <div className='pop-prod-info'>
                            <p className='prod-title'>Green Capsicum</p>
                            <p className='prod-price'>$9.00 <span className='old-price'>$20.99</span></p>
                            <img src="./pop-prod/rating.png" alt="" className='prod-rating' />
                        </div>
                        <a href="#"><button className='to-cart'><img src="./icons/bag.svg" alt="" /></button></a>
                    </div>
                </div>
                <div className='product'>
                    <img src="./pop-prod/chili.png" alt="" className='prod-img'/>
                    <div className='prod-info-wrap'>
                        <div className='pop-prod-info'>
                            <p className='prod-title'>Green Chili</p>
                            <p className='prod-price'>$34.00</p>
                            <img src="./pop-prod/rating.png" alt="" className='prod-rating' />
                        </div>
                        <a href="#"><button className='to-cart'><img src="./icons/bag.svg" alt="" /></button></a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}