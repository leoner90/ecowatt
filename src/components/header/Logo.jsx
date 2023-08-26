 import { Link } from 'react-router-dom'
function Logo () {
    return (
        <div>
        <Link to={`${process.env.PUBLIC_URL}/`} className="flex items-center">
            <div className="MainLogo" style={{backgroundImage:  `url("${process.env.PUBLIC_URL}/img/logo.png")`}}></div>
            
        </Link>
        </div>
    )
}

export default Logo;