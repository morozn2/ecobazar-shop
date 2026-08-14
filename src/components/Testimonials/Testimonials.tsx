import './Testimonials.css'

export function Testimonials() {
    return (
        <section className='testimonials-body'>
            <div className='testim-container'>
                <div className='categories-heading-wrap'>
                    <p className='categories-heading'>Client Testimonials</p>
                    <div className='arrow-buttons'>
                        <button className='left-arrow'>🡢</button>
                        <button className='right-arrow'>🡢</button>
                    </div>
                </div>
                <div className='testim-wrap'>
                    <div className='testimonial'>
                        <img src="./icons/quote.png" alt="" className='quote-symbol' />
                        <p className='testim-text'>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
                            Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>
                        <div className='client-wrap'>
                            <div className='client-info'>
                                <img src="./avatars/man-avatar-one.png" alt="" />
                                <div className='name-wrap'>
                                    <p className='name'>Robert Fox</p>
                                    <p className='client-role'>Customer</p>
                                </div>
                            </div>
                            <img src="./icons/five-stars.png" alt="" />
                        </div>
                    </div>
                    <div className='testimonial'>
                        <img src="./icons/quote.png" alt="" className='quote-symbol' />
                        <p className='testim-text'>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
                            Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>
                        <div className='client-wrap'>
                            <div className='client-info'>
                                <img src="./avatars/man-avatar-two.png" alt="" />
                                <div className='name-wrap'>
                                    <p className='name'>Dianne Russell</p>
                                    <p className='client-role'>Customer</p>
                                </div>
                            </div>
                            <img src="./icons/five-stars.png" alt="" />
                        </div>
                    </div>
                    <div className='testimonial'>
                        <img src="./icons/quote.png" alt="" className='quote-symbol' />
                        <p className='testim-text'>Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
                            Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget</p>
                        <div className='client-wrap'>
                            <div className='client-info'>
                                <img src="./avatars/man-avatar-three.png" alt="" />
                                <div className='name-wrap'>
                                    <p className='name'>Eleanor Pena</p>
                                    <p className='client-role'>Customer</p>
                                </div>
                            </div>
                            <img src="./icons/five-stars.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}