import './Features.css'

export function Features() {
    return (
        <section className='features-main-body'>
            <div className='features-body'>
                <div className='features-container'>
                    <div className='feature-wrap'>
                        <img src="./icons/delivery-truck.png" alt="" />
                        <div className='feature-info'>
                            <p className='feature-heading-homepage'>Free Shipping</p>
                            <p className='feature-desc'>Free shipping on all your order</p>
                        </div>
                    </div>
                    <div className='feature-wrap'>
                        <img src="./icons/headphones.png" alt="" />
                        <div className='feature-info'>
                            <p className='feature-heading-homepage'>Customer Support 24/7</p>
                            <p className='feature-desc'>Instant access to support</p>
                        </div>
                    </div>
                    <div className='feature-wrap'>
                        <img src="./icons/shopping-bag.png" alt="" />
                        <div className='feature-info'>
                            <p className='feature-heading-homepage'>100% Secure Payment</p>
                            <p className='feature-desc'>We ensure your money is safe</p>
                        </div>
                    </div>
                    <div className='feature-wrap'>
                        <img src="./icons/package.png" alt="" />
                        <div className='feature-info'>
                            <p className='feature-heading-homepage'>Money-back guarantee</p>
                            <p className='feature-desc'>30 Days Money-Back Guarantee</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}