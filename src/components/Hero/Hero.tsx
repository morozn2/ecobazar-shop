import './Hero.css'

export function Hero() {
    return (
        <div className='hero-container'>
            <div className='big-hero'>
                <div className='big-hero-content'>
                    <h2>Fresh & Healthy Organic Food</h2>
                    <div className='sale-wrap'>
                        <p className='hero-sale-text'>Sale up to <span className='discount'>30% OFF</span></p>
                        <p className='small-hero-text'>Free shipping on all your order.</p>
                    </div>
                    <button className='shop-button'>
                        <p>Shop now</p>
                        <p>🡢</p>
                    </button>
                </div>
            </div>
            <div className='small-heros-container'>
                <div className='small-hero-one'>
                    <div className='summer-sale-wrap'>
                        <h3>SUMMER SALE</h3>
                        <p className='summer-discount'>75% OFF</p>
                        <p className='summer-discount-text'>Only Fruit & Vegetable</p>
                        <button className='small-hero-button'>
                            <p>Shop Now</p>
                            <p>🡢</p>
                        </button>
                    </div>
                </div>
                <div className='small-hero-two'>
                    <div className='best-deal-wrap'>
                        <p className='hero-two-heading'>BEST DEAL</p>
                        <p className='hero-two-info'>Special Products <br /> Deal of the Month</p>
                        <button className='small-hero-button'>
                            <p>Shop Now</p>
                            <p>🡢</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}