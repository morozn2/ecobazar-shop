import './OurTeam.css'

export function OurTeam() {
    return (
        <section className='our-team-body'>
            <div className='our-team'>
                <p className='team-heading'>Our Awesome Team</p>
                <p className='team-desc'>Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
                    Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi.</p>
                <div className='team-members-body'>
                    <button className='arrow-button left-button'>🡢</button>
                    <div className='team-members-div'>
                        <div className='worker'>
                            <div className='worker-pic-bg'>
                                <img src="./people/jenny-wilson.png" alt="" className='worker-pic' />
                                <div className='worker-socials-wrap'>
                                    <a href='#' className='social'><img src="./icons/facebook.svg" alt="" /></a>
                                    <a href='#' className='social'><img src="./icons/twitter.svg" alt="" /></a>
                                    <a href='#' className='social'><img src="./icons/pinterest.svg" alt="" /></a>
                                    <a href='#' className='social'><img src="./icons/instagram.svg" alt="" /></a>
                                </div>
                            </div>
                            <div className='worker-info'>
                                <p className='worker-name'>Jenny Wilson</p>
                                <p className='worker-role'>Ceo & Founder</p>
                            </div>
                        </div>
                        <div className='worker'>
                            <div className='worker-pic-bg'>
                                <img src="./people/jane-cooper.png" alt="" className='worker-pic' />
                                <div className='worker-socials-wrap'>
                                    <a href='#' className='social'><img src="./icons/facebook.svg" alt="" /></a>
                                    <a href='#' className='social'><img src="./icons/twitter.svg" alt="" /></a>
                                    <a href='#' className='social'><img src="./icons/pinterest.svg" alt="" /></a>
                                    <a href='#' className='social'><img src="./icons/instagram.svg" alt="" /></a>
                                </div>
                            </div>
                            <div className='worker-info'>
                                <p className='worker-name'>Jane Cooper</p>
                                <p className='worker-role'>Worker</p>
                            </div>
                        </div>
                        <div className='worker'>
                            <div className='worker-pic-bg'>
                                <img src="./people/cody-fisher.png" alt="" className='worker-pic' />
                                <div className='worker-socials-wrap'>
                                    <a href='#' className='social'><img src="./icons/facebook.svg" alt="" /></a>
                                    <a href='#' className='social'><img src="./icons/twitter.svg" alt="" /></a>
                                    <a href='#' className='social'><img src="./icons/pinterest.svg" alt="" /></a>
                                    <a href='#' className='social'><img src="./icons/instagram.svg" alt="" /></a>
                                </div>
                            </div>
                            <div className='worker-info'>
                                <p className='worker-name'>Cody Fisher</p>
                                <p className='worker-role'>Security Guard</p>
                            </div>
                        </div>
                        <div className='worker'>
                            <div className='worker-pic-bg'>
                                <img src="./people/robert-fox.png" alt="" className='worker-pic' />
                                <div className='worker-socials-wrap'>
                                    <a href='#' className='social'><img src="./icons/facebook.svg" alt="" /></a>
                                    <a href='#' className='social'><img src="./icons/twitter.svg" alt="" /></a>
                                    <a href='#' className='social'><img src="./icons/pinterest.svg" alt="" /></a>
                                    <a href='#' className='social'><img src="./icons/instagram.svg" alt="" /></a>
                                </div>
                            </div>
                            <div className='worker-info'>
                                <p className='worker-name'>Robert Fox</p>
                                <p className='worker-role'>Senior Farmer Manager</p>
                            </div>
                        </div>
                    </div>
                    <button className='arrow-button'>🡢</button>
                </div>
            </div>
        </section>
    )
}