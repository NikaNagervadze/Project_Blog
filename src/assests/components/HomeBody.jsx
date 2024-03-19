import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../CSS/style.css';


function HomeBody() {

  return (
    <section className="container-fluid HomeBodyContainer">
        <div className='bodyTitle'>
          <h1>A Beautiful blog with no images required</h1>
          <div>
            <p>by <Link className='HomeLinks' to="/">Madison Barnett</Link></p>
            <p className='dash'>/</p>
            <Link className='HomeLinks' to="/">In Human</Link>
            <p className='dash'>/</p>
            <Link className='HomeLinks' to="/">5 Comments</Link>
          </div>

          <div>
            <button>Read On</button>
            
            <button>
              Read Later
            </button>
          </div>
        </div>
    </section>
  )
}

export default HomeBody