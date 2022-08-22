
import 'bootstrap/js/dist/carousel';

function Carousel() {
    return (

        <div id="demo" class="carousel slide" data-bs-ride="carousel">


            <div class="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
            </div>

            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={require("./assets/boy1.jpg")} alt="Los Angeles" class="d-block w-100" />
                    <div class='carousel-caption d-none d-md-block'>
                        <h1>A vision far into the future</h1>
                        <p>WSU materials science student and Goldwater awardee seeks to understand nuclear waste.</p>
                        <p><a href="#" class="btn btn-warning mt-3">Learn more</a></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={require("./assets/girl1.jpg")} alt="Los Angeles" class="d-block w-100" />
                    <div class='carousel-caption d-none d-md-block'>
                        <h1>A passion for nursing</h1>
                        <p>WSU nursing student Frances Ward twice named a Udall Scholar for Native American health sciences.</p>
                        <p><a href="#" class="btn btn-warning mt-3">Learn more</a></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={require("./assets/girl2.jpg")} alt="Los Angeles" class="d-block w-100" />
                    <div class='carousel-caption d-none d-md-block'>
                        <h1>Top Ten Seniors of 2022</h1>
                        <p>Meet the graduating WSU students selected for excellence in academics, athletics, campus involvement, community service, and visual and performing arts.</p>
                        <p><a href="#" class="btn btn-warning mt-3">Learn more</a></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={require("./assets/boy2.jpg")} alt="Los Angeles" class="d-block w-100" />
                    <div class='carousel-caption d-none d-md-block'>
                        <h1>A path to help others</h1>
                        <p>WSU microbiology senior Joey McDonald pursues research career after father’s death.</p>
                        <p><a href="#" class="btn btn-warning mt-3">Learn more</a></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={require("./assets/hall1.jpg")} alt="Los Angeles" class="d-block w-100" />
                    <div class='carousel-caption d-none d-md-block'>
                        <h1>A landmark gift for engineering</h1>
                        <p>Edmund and Beatriz Schweitzer and SEL invest a record-setting $20 million in WSU student success.</p>
                        <p><a href="#" class="btn btn-warning mt-3">Learn more</a></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={require("./assets/bear.jpg")} alt="Los Angeles" class="d-block w-100" />
                    <div class='carousel-caption d-none d-md-block'>
                        <h1>Who’s been sleeping?</h1>
                        <p>The grizzlies at the unique WSU Bear Center tell us a lot about sleep and human health.</p>
                        <p><a href="#" class="btn btn-warning mt-3">Learn more</a></p>
                    </div>
                </div>
            </div>


            <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>





    );
}

export default Carousel;

{/* <div id="demo" class="carousel slide" data-bs-ride="carousel">


<div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
</div>

<div class="carousel-inner">
    <div class="carousel-item active">
        <img src={require("./3.png")} alt="Los Angeles" class="d-block w-100" />
    </div>
    <div class="carousel-item">
        <img src={require("./2.png")} alt="Chicago" class="d-block w-100" />
    </div>
    <div class="carousel-item">
        <img src={require("./1.png")} alt="New York" class="d-block w-100" />
    </div>
</div>


<button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
</button>
</div> */}