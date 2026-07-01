import './Breadcrumbs.css'
import { Link } from 'react-router-dom'

export function Breadcrumbs() {
    return (
        <div className='breadcrumbs-wrap'>
            <Link to = "about"><img src="./icons/home.png" alt="" /></Link>
            <img src="./icons/arrow.png" alt="" />
            <a href="about">About</a>
        </div>
    )
}