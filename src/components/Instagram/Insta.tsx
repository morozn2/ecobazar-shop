import './Insta.css'

export function Insta() {
    return (
        <section className='insta-body'>
            <div className='insta-wrap'>
                <p className='insta-heading'>Follow us on Instagram</p>
                <div className='pic-wrap'>
                    <div className='img-div'>
                        <a href=""><img src="./icons/insta.png" alt="" className='insta-logo'/></a>
                        <a href=""><img src="./insta-photos/tomatoes.png" alt="" className='insta-pic' /></a>
                    </div>
                    <div className='img-div'>
                        <a href=""><img src="./icons/insta.png" alt="" className='insta-logo'/></a>
                        <a href=""><img src="./insta-photos/leaves1.png" alt="" className='insta-pic' /></a>
                    </div>
                    <div className='img-div'>
                        <a href=""><img src="./icons/insta.png" alt="" className='insta-logo'/></a>
                        <a href=""><img src="./insta-photos/leaves2.png" alt="" className='insta-pic' /></a>
                    </div>
                    <div className='img-div'>
                        <a href=""><img src="./icons/insta.png" alt="" className='insta-logo'/></a>
                        <a href=""><img src="./insta-photos/pepper.png" alt="" className='insta-pic' /></a>
                    </div>
                    <div className='img-div'>
                        <a href=""><img src="./icons/insta.png" alt="" className='insta-logo'/></a>
                        <a href=""><img src="./insta-photos/spinach.png" alt="" className='insta-pic' /></a>
                    </div>
                    <div className='img-div'>
                        <a href=""><img src="./icons/insta.png" alt="" className='insta-logo'/></a>
                        <a href=""><img src="./insta-photos/oranges.png" alt="" className='insta-pic' /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}