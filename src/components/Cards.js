import React from "react";

function Cards(){

    return(
<div
  id="carouselExampleAutoplaying"
  className="carousel slide"
  data-bs-ride="carousel"
  
>
    <div className="carousel-inner " >
        <div className="carousel-item active" height='50%' >
        <img src="mobile-img.jpg" className="d-block w-100" alt="text" width={350} height={500}/>
        </div>
        <div className="carousel-item">
        <img src="qr-img.jpeg" className="d-block w-100" alt="img"  height={500}/>
        </div>
        <div className="carousel-item">
        <img src="windows.png" className="d-block w-100" alt="oops" height={500}/>
        </div>
    </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>



    );

}

export default Cards;