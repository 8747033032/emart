import React from 'react'



const navibar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div class="container">
                    <a className="navbar-brand fw-bold fs-4" href="#">Manu collection</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">product</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">about us </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">contact</a>
                            </li>
                            
                            
                          
                        </ul>
                        <div className='button' >
                            <a href='' className='btn btn-outline-dark me-2'>
                                <i className='fa fa-sign-in'> </i>
                                Login
                            </a>
                            <a href='' className='btn btn-outline-dark'>
                                <i className='fa fa-sign-in'> </i>
                                Registor
                            </a>
                        
                            
                        </div>


                    </div>
                </div>
            </nav>
        </div>
    )
}

export default navibar
