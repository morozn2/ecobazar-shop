import './SummerSale.css'

export function SummerSale() {
    return (
        <section className='big-summer-sale'>
            <div className='big-summer-sale-banner'>
                <div className='big-summer-sale-info'>
                    <p className='sale-heading-white'>SUMMER SALE</p>
                    <p className='sale-percentage'><span className='orange-text'>37%</span> OFF</p>
                    <p className='sale-description'>Free on all your order, Free Shipping and  30 days money-back guarantee</p>
                    <button className='shop-button-s-sale'>
                        <p>Shop now</p>
                        <p>🡢</p>
                    </button>
                </div>
            </div>
        </section>
    )
}