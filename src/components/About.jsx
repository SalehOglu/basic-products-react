import { Link } from 'react-router';

export default function AboutPage() {
  return (
    <div className="container">
      <div className="text-center py-5 bg-light rounded shadow-sm mb-5">
        <h1 className="display-4 fw-bold">About Us</h1>
        <p className="lead text-muted col-lg-8 mx-auto">
          Where quality meets convenience. Discover our story and what drives us to bring the best products to your doorstep.
        </p>
      </div>


      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <img 
            src="https://picsum.photos/seed/about-story/600/400" 
            alt="Our Story" 
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6">
          <h2 className="mb-3">Our Story</h2>
          <p className="text-muted">
            Founded with a passion for modern retail, it started as a simple idea: to make online shopping seamless, reliable, and enjoyable. We believe that shopping shouldn't be complicated. That’s why we’ve built a curated collection designed to fit your unique lifestyle.
          </p>
          <p className="text-muted">
            From everyday essentials to trendsetting items, we source our products with care, keeping quality and value front and center.
          </p>
        </div>
      </div>

      <div className="row text-center mb-5">
        <h2 className="mb-4">Why Shop With Us?</h2>
        
        <div className="col-md-4 mb-3">
          <div className="p-4 border rounded h-100 bg-white shadow-sm">
            <h4 className="text-primary mb-3">Curated Quality</h4>
            <p className="text-muted mb-0">Every product in our catalog goes through careful selection to guarantee high standards of durability and style.</p>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="p-4 border rounded h-100 bg-white shadow-sm">
            <h4 className="text-primary mb-3">Customer First</h4>
            <p className="text-muted mb-0">Your satisfaction is our top priority. Our support team is dedicated to giving you a smooth shopping experience.</p>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="p-4 border rounded h-100 bg-white shadow-sm">
            <h4 className="text-primary mb-3">Secure & Fast</h4>
            <p className="text-muted mb-0">Enjoy a safe checkout process and quick dispatch so your favorite items arrive right when you need them.</p>
          </div>
        </div>
      </div>

      <div className="text-center bg-dark text-white p-5 rounded">
        <h3>Ready to explore our collection?</h3>
        <p className="text-light mb-4">Find your next favorite item today.</p>
        <Link to="/products" className="btn btn-light btn-lg">
          Browse Products
        </Link>
      </div>
    </div>
  );
}