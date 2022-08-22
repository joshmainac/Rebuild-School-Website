import 'bootstrap/js/dist/offcanvas';
import './Offcanvas.css';


function Offcanvas() {
    return (
        <>
            <div className="sidebar-nav">
                <nav className="navbar navbar-light bg-light justify-content-between">
                    <div className="container-fluid">
                        <a className="navbar-brand"><img src={require("../assets/logo.jpg")} /></a>
                        <button className="navbar-toggle" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {/* <!-- Menu --> */}
                        <div className="bg-light offcanvas offcanvas-start shadow" tabindex="-1" id="offcanvasNavbar">
                            <div className="offcanvas-body">
                                <ul className="navbar-nav">
                                    <li><a href="#" /><span className="item-text">HOME</span></li>
                                    <li><a href="#" /><span className="item-text">ABOUT</span></li>
                                    <li><a href="#" /><span className="item-text">ADMISSION</span></li>
                                    <li><a href="#" /><span className="item-text">ACADEMICS</span></li>
                                    <li><a href="#" /><span className="item-text">RESEARCH</span></li>
                                    <li><a href="#" /><span className="item-text">COMMUNITY LIFE</span></li>
                                </ul>

                            </div>
                        </div>


                    </div>

                </nav>
            </div>



        </>


    );
}

export default Offcanvas;





{/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
        <h5 id="offcanvasRightLabel">Offcanvas right</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
        ...
    </div>
</div> */}


