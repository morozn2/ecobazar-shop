import './AboutUsOne.css'

export function AboutUsOne() {
    return (
        <section className='about-one-body'>
            <div className='about-one'>
                <div className='about-one-box'>
                    <h3 className='about-heading'>100% Trusted Organic Food Store</h3>
                    <p className='about-text'>Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras
                        quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa
                        vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.</p>
                </div>
                <img src="./people/farmer-grandpa-one.png" alt="" className='farmer-pic-one'/>
            </div>
        </section>
    )
}