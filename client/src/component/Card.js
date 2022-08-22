
function Card() {
    return (

        <div className="container mt-3">
            <h2>Card Image</h2>
            <p>Image at the top (card-img-top):</p>
            <div className="card" >
                <img className="card-img-top" src={require("../assets/boy1.jpg")} alt="Card" />
                <div className="card-body">
                    <h4 className="card-title">John Doe</h4>
                    <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                </div>
            </div>

            <p>Image at the bottom (card-img-bottom):</p>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Jane Doe</h4>
                    <p className="card-text">Some example text some example text. Jane Doe is an architect and engineer</p>
                </div>
                <img className="card-img-bottom" src={require("../assets/boy1.jpg")} alt="Card" />
            </div>
        </div>
    );
}

export default Card;