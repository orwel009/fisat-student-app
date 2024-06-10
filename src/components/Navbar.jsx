import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">FisatStudentApp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">AddStudent</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/search">Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/delete">Delete</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/viewstudent">ViewStudent</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" aria-disabled="true">EditStudent</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar