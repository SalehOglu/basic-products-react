import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
export default function slider() {
  return (
    <div className="container my-4">
      <div id="ecommerceCarousel" className="carousel slide" data-bs-ride="carousel">
        
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#ecommerceCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#ecommerceCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#ecommerceCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner rounded shadow-sm">
          <div className="carousel-item active">
            <img 
              src={img1} 
              className="d-block w-100" 
              alt="Image" 
            />
          </div>
          <div className="carousel-item">
            <img 
              src={img2} 
              className="d-block w-100" 
              alt="Image" 
            />
          </div>
          <div className="carousel-item">
            <img 
              src={img3}
              className="d-block w-100" 
              alt="Image" 
            />
          </div>
        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#ecommerceCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#ecommerceCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
    </div>
  );
}