import './Sales.css'

export function Sales() {
    return (
        <div className='sales-container'>
            <div className='month-sale'>
                <div className='sale-info-wrap'>
                    <p className='sale-heading-small-white'>BEST DEALS</p>
                    <p className='sale-heading-big-white'>Sale of the Month</p>
                    <div className='timer'>
                        <div className='timer-section'>
                            <p className='timer-num'>00</p>
                            <p className='timer-desc'>DAYS</p>
                        </div>
                        <div className='two-dots'>
                            <p>:</p>
                        </div>
                        <div className='timer-section'>
                            <p className='timer-num'>02</p>
                            <p className='timer-desc'>HOURS</p>
                        </div>
                        <div className='two-dots'>
                            <p>:</p>
                        </div>
                        <div className='timer-section'>
                            <p className='timer-num'>18</p>
                            <p className='timer-desc'>MINS</p>
                        </div>
                        <div className='two-dots'>
                            <p>:</p>
                        </div>
                        <div className='timer-section'>
                            <p className='timer-num'>46</p>
                            <p className='timer-desc'>SECS</p>
                        </div>
                    </div>
                    <button className='shop-button-sales'>
                        <p>Shop now</p>
                        <p>🡢</p>
                    </button>
                </div>
            </div>
            <div className='meat-sale'>
                <div className='sale-info-wrap'>
                    <p className='sale-heading-small-white'>85% FAT FREE</p>
                    <p className='sale-heading-big-white'>Low-Fat Meat</p>
                    <p className='sale-text-white'>Started at <span className='orange-text'>$79.99</span></p>
                    <button className='shop-button-sales'>
                        <p>Shop now</p>
                        <p>🡢</p>
                    </button>
                </div>
            </div>
            <div className='fruit-sale'>
                <div className='sale-info-wrap'>
                    <p className='sale-heading-small-black'>SUMMER SALE</p>
                    <p className='sale-heading-big-black'>100% Fresh Fruit</p>
                    <div className='sale-text-wrap'>
                        <p className='sale-text-black'>Up to</p>
                        <div className='sale-label'>
                            64% OFF
                        </div>
                    </div>
                    <button className='shop-button-sales'>
                        <p>Shop now</p>
                        <p>🡢</p>
                    </button>
                </div>
            </div>
        </div>
    )
}