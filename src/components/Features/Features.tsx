import './Features.css'

export function Features() {
    return (
        <div className='features-container'>
            <div className='feature-wrap'>
                <img src="./icons/delivery-truck.png" alt="" />
                <div className='feature-info'>
                    <b>Free Shipping</b>
                    <p className='feature-desc'>Free shipping on all your order</p>
                </div>
            </div>
            <div className='feature-wrap'>
                <img src="./icons/delivery-truck.png" alt="" />
                <div className='feature-info'>
                    <b>Customer Support 24/7</b>
                    <p className='feature-desc'>Instant access to support</p>
                </div>
            </div>
            <div className='feature-wrap'>
                <img src="./icons/delivery-truck.png" alt="" />
                <div className='feature-info'>
                    <b>100% Secure Payment</b>
                    <p className='feature-desc'>We ensure your money is safe</p>
                </div>
            </div>
            <div className='feature-wrap'>
                <img src="./icons/delivery-truck.png" alt="" />
                <div className='feature-info'>
                    <b>Money-back guarantee</b>
                    <p className='feature-desc'>30 Days Money-Back Guarantee</p>
                </div>
            </div>
        </div>
    )
}