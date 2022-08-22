
function Card2() {
    return (
        <>
            <h1 className="text-center text-success my-5"></h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <img src={require('../assets/Visit.jpg')} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Register today</h5>
                                <p className="card-text">Feel the Coug Spirit In-Person or Virtually. Many of our students know as soon as they see campus that WSU is the place for them. We invite you to visit WSU Pullman in-person or via our virtual tour, videos, and live web presentations to see what it’s like to be a Coug.</p>
                                <a href={'#'} class="btn btn-primary">Visit</a>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <img src={require('../assets/apply.jpg')} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Become a #FutureCoug </h5>
                                <p className="card-text">Not sure where to start? Not a problem! Figure out what student category you fit in and then click the link to find out more about requirements, deadlines, and to start your online application.</p>
                                <a href={'#'} class="btn btn-primary">Apply to WSU</a>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <img src={require('../assets/admin.png')} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Already admitted?</h5>
                                <p className="card-text">Congratulations on your admission! At Washington State University Pullman, we forge lifelong friendships, build bridges across cultures and produce life-changing research. No matter your background we’re excited to welcome you home.</p>
                                <a href={'#'} class="btn btn-primary">Confirm Enrollment</a>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-3">
                        <div className="card">
                            <img src={require('../assets/campus.jpg')} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Explore our six campuses</h5>
                                <p className="card-text">Our six campuses provide outstanding learning opportunities—and each offers its own distinct student environment. Explore your options and customize your education to create the Washington State University experience that’s perfect for you.</p>
                                <a href={'#'} class="btn btn-primary">Explore</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>


    );
}

export default Card2;

<>
    <h1 className="text-center text-success my-5">Card2</h1>
    <div className="container">
        <div className="row">
            <div className="col-md-3">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href={'#'} class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
</>





