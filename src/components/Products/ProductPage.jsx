import { Outlet } from 'react-router';

export default function ProductPage() {
    return(
        <>
           <div className="container my-5">
            <h2 className="mb-4">All Products</h2>
            <Outlet />
          </div>
        </>
    )
}