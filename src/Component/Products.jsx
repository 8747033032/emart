import React, { useState, useEffect } from 'react'
import { Component } from 'react';

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, SetFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;


    useEffect(() => {

        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("http://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                SetFilter(await response.json());
                setLoading(true);
                console.log(filter)
            }
            return () =>
                componentMounted = false;


        }

        getProducts();
    },
        []);

    const Loading = () => {
        return (
            <>
                <div className='button  d-flex justify-content-center mb-4'>
                    <button className='btn btn-outline-dark me-2'>All</button>
                    <button className='btn btn-outline-dark padding-1rem me-2'>Women's clothing</button>
                    <button className='btn btn-outline-dark me-2'>Men's clothing</button>
                    <button className='btn btn-outline-dark padding-1rem me-2'>jewles</button>
                    <button className='btn btn-outline-dark padding-1rem me-2'>Electronics</button>
                </div>
                {filter.map((Products) => {
                    return (
                        <>
                            <div className='col-md-3 mb-3'>
                                <div className="card h-100 text-center p-4 mb-4" key={Products.id} >
                                    <img src={Products.image}  class="card-img-top" alt={Products.title} height="250px"/>
                                        <div class="card-body">
                                            <h5 className='card-title '>{Products.title.substring(0,12)} </h5>

                                            <p className="card-text d-flex justify-content-center fw-bold">${Products.price}</p>
                                            <a href='#' className='btn btn-outline-dark fw-bold'>Buy Now</a>
                                        </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        );
    };




    return (
        <div>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12 mb-5'>
                        <h1 className='display-6 fw-bolder text-center'>Latest product</h1>
                        <hr />

                    </div>
                </div>
                <div className='row justify-content-center'>
                    <Loading />
                </div>
            </div>

        </div>
    );

}

export default Products
