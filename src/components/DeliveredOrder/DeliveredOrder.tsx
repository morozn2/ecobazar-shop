import './DeliveredOrder.css'
export function DeliveredOrder() {
    return (
        <section className='delivered-order-body'>
            <div className='delivered-order'>
                <div className='delivered-order-box'>
                    <p className='order-heading'>We Delivered, You Enjoy Your Order.</p>
                    <p className='order-desc'>Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris 
                        sollicitudin dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget elementum.</p>
                    <div className='benefits-wrap'>
                        <div className='benefit'>
                            <img src="./icons/check.png" alt="" />
                            <p className='benefit-text'>Sed in metus pellentesque.</p>
                        </div>
                        <div className='benefit'>
                            <img src="./icons/check.png" alt="" />
                            <p className='benefit-text'>Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.</p>
                        </div>
                        <div className='benefit'>
                            <img src="./icons/check.png" alt="" />
                            <p className='benefit-text'>Maecenas ut nunc fringilla erat varius.</p>
                        </div>
                    </div>
                    <button className='green-shop-btn'>
                        <p>Shop Now</p>
                        <p>🡢</p>
                    </button>
                    <img src="./people/delivery-man.png" alt="" className='delivery-man' />
                </div>
            </div>
        </section>
    )
}