import { Link, useLocation } from "react-router"
import logo from '../assets/logo.png'
export default function Navbar() {
    const location = useLocation();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="Logo" width={110} className="me-2"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            {
                                location.pathname !== "/" && (
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                )
                            }
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}