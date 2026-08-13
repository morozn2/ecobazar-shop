import './News.css'

export function News() {
    return (
        <section className='news-body'>
            <p className='categories-heading'>Latest News</p>
            <div className='latest-news-wrap'>
                <div className='news-article'>
                    <div className='publishing-date'>
                        <p className='day'>18</p>
                        <p className='month'>NOV</p>
                    </div>
                    <img src="./article-pics/oranges.png" alt="" />
                    <div className='article-text-container'>
                        <div className='article-info-wrap'>
                            <div className='article-info'>
                                <img src="./icons/tag.png" alt="" className='article-icon' />
                                <span className='dark-grey-text'>Food</span>
                            </div>
                            <div className='article-info'>
                                <img src="./icons/user.png" alt="" className='article-icon' />
                                <p className='light-grey-text'>By <span className='dark-grey-text'>Admin</span></p>
                            </div>
                            <div className='article-info'>
                                <img src="./icons/message.png" alt="" className='article-icon' />
                                <p className='light-grey-text'>65 Comments</p>
                            </div>
                        </div>
                        <p className='article-heading'>Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.</p>
                        <a href="" className='read-more'>Read More 🡢</a>
                    </div>
                </div>
                <div className='news-article'>
                    <div className='publishing-date'>
                        <p className='day'>29</p>
                        <p className='month'>JAN</p>
                    </div>
                    <img src="./article-pics/eggs.png" alt="" />
                    <div className='article-text-container'>
                        <div className='article-info-wrap'>
                            <div className='article-info'>
                                <img src="./icons/tag.png" alt="" className='article-icon' />
                                <span className='dark-grey-text'>Food</span>
                            </div>
                            <div className='article-info'>
                                <img src="./icons/user.png" alt="" className='article-icon' />
                                <p className='light-grey-text'>By <span className='dark-grey-text'>Admin</span></p>
                            </div>
                            <div className='article-info'>
                                <img src="./icons/message.png" alt="" className='article-icon' />
                                <p className='light-grey-text'>65 Comments</p>
                            </div>
                        </div>
                        <p className='article-heading'>Eget lobortis lorem lacinia. Vivamus pharetra semper,</p>
                        <a href="" className='read-more'>Read More 🡢</a>
                    </div>
                </div>
                <div className='news-article'>
                    <div className='publishing-date'>
                        <p className='day'>21</p>
                        <p className='month'>FEB</p>
                    </div>
                    <img src="./article-pics/vegetables.png" alt="" />
                    <div className='article-text-container'>
                        <div className='article-info-wrap'>
                            <div className='article-info'>
                                <img src="./icons/tag.png" alt="" className='article-icon' />
                                <span className='dark-grey-text'>Food</span>
                            </div>
                            <div className='article-info'>
                                <img src="./icons/user.png" alt="" className='article-icon' />
                                <p className='light-grey-text'>By <span className='dark-grey-text'>Admin</span></p>
                            </div>
                            <div className='article-info'>
                                <img src="./icons/message.png" alt="" className='article-icon' />
                                <p className='light-grey-text'>65 Comments</p>
                            </div>
                        </div>
                        <p className='article-heading'>Maecenas blandit risus elementum mauris malesuada.</p>
                        <a href="" className='read-more'>Read More 🡢</a>
                    </div>
                </div>
            </div>
        </section>
    )
}