import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <div className='hero'>
      <div class="card text-bg-dark">
        <img src="https://img.freepik.com/free-vector/tradtional-happy-diwali-premium-banner-with-text-image-space_1017-34456.jpg?w=826&t=st=1669994561~exp=1669995161~hmac=bc3b21c4a95d5814e70ebb25691414c8ee9b32772f40631279fb197a5e379de9" class="card-img" alt="..." />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className='container'>
            <h5 class="card-title fw-bold display-2 mb-0 ">New Season Arrival</h5>
            <p class="card-text display-6">Check Out All The Trend</p>

          </div>
        </div>
      </div>
      {/* <Products/> */}
    </div>
  )
}

export default Home
