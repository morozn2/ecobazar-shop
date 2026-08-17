import './AboutUsTwo.css'

export function AboutUsTwo() {
    return (
        <section className='about-us-two-body'>
            <div className='images'>
                <img src="./people/grandpa-2.png" alt="" className='grandpa-two' />
            </div>
            <div className='about-two-content'>
                <h3 className='about-two-heading'>100% Trusted Organic Food Store</h3>
                <p className='about-two-text'>Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque.
                    Duis non diam eget est luctus tincidunt a a mi. Nulla eu eros consequat tortor tincidunt feugiat. </p>
                <div className='about-features'>
                    <div className='feature-container'>
                        <img src="./icons/circled-leaf.png" alt="" className='feature-icon' />
                        <div className='feature-text-div'>
                            <p className='feature-heading'>100% Organic food</p>
                            <p className='feature-desc'>100% healthy & Fresh food.</p>
                        </div>
                    </div>
                    <div className='feature-container'>
                        <img src="./icons/circled-headset.png" alt="" className='feature-icon' />
                        <div className='feature-text-div'>
                            <p className='feature-heading'>Great Support 24/7</p>
                            <p className='feature-desc'>Instant access to Contact</p>
                        </div>
                    </div>
                    <div className='feature-container'>
                        <img src="./icons/circled-star.png" alt="" className='feature-icon' />
                        <div className='feature-text-div'>
                            <p className='feature-heading'>Customer Feedback</p>
                            <p className='feature-desc'>Our happy customer</p>
                        </div>
                    </div>
                    <div className='feature-container'>
                        <img src="./icons/circled-bag.png" alt="" className='feature-icon' />
                        <div className='feature-text-div'>
                            <p className='feature-heading'>100% Secure Payment</p>
                            <p className='feature-desc'>We ensure your money is safe</p>
                        </div>
                    </div>
                    <div className='feature-container'>
                        <img src="./icons/circled-truck.png" alt="" className='feature-icon' />
                        <div className='feature-text-div'>
                            <p className='feature-heading'>Free Shipping</p>
                            <p className='feature-desc'>Free shipping with discount</p>
                        </div>
                    </div>
                    <div className='feature-container'>
                        <img src="./icons/circled-box.png" alt="" className='feature-icon' />
                        <div className='feature-text-div'>
                            <p className='feature-heading'>100% Organic food</p>
                            <p className='feature-desc'>100% healthy & Fresh food.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}