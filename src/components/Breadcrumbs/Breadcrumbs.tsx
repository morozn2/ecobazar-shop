import './Breadcrumbs.css'

export function Breadcrumbs() {
    return (
        <div className='breadcrumbs-wrap'>
            <a href="home"><img src="./icons/home.png" alt="" /></a>
            <img src="./icons/arrow.png" alt="" />
            <a href="about">About</a>
        </div>
    )
}