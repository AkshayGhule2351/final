import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { useSelector, useDispatch } from 'react-redux';
import { addCart } from '../redux/action';

const Product = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [Product, setProduct] = useState([]);

    const dispatch = useDispatch();
    const addProduct = (Product)=>{
        dispatch(addCart(Product));
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        };
        getProduct();
    }, []);

    const Loading = () => {
        return (
            <>
              <div className="col-md-5">
                <Skeleton height={400} />
              </div>
              <div className="col-md-6" style={{lineHeight:2}} >
                <Skeleton height={50} width={300} />
                <Skeleton height={70} />
                <Skeleton height={25} width={150} />
                <Skeleton height={75} />
                <Skeleton height={150}  />
                <Skeleton height={50} width={100}  />
                <Skeleton height={50} width={100}  style={{marginLeft:6}} />

              </div>
            </>
        )
    }

    const ShowProduct = () => {
        return (
            <>
                <div className="col-md-6">
                    <img src={Product.image} alt={Product.title} height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h3 className="text-uppercase text-blacl-50"> {Product.category} </h3>
                    <h2 className='display-5'>{Product.title}</h2>
                    <p className="lead fw-bolder">Rating {Product.rating && Product.rating.rate} <i className="fa fa-star"></i> </p>
                    <h3 className="display-6 fw-bold my-4"> ₹{Product.price} </h3>
                    <p className="lead"> {Product.description} </p>
                    <button className="btn btn-outline-dark px-4 py-2" onClick={() => addProduct(Product)} >Add to Cart</button>
                    <NavLink to='/cart' className="btn btn-dark mx-2 px-3 py-2">Go to Cart</NavLink>
                </div>

            </>
        );
    }

    return (
        <>
            <div className="container py-5">
                <div className="row py-5">
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </>
    )
}

export default Product
