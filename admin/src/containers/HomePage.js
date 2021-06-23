import React from 'react';
import Table from '../components/Table';

function HomePage() {
  return (
    <React.Fragment>
      <div className="card-box pd-20 height-100-p mb-30">
        <div className="row align-items-center">
          <div className="col-md-4">
            <img src="vendors/images/banner-img.png" alt="" />
          </div>
          <div className="col-md-8">
            <h4 className="font-20 weight-500 mb-10 text-capitalize">
              <div className="weight-600 font-30 text-blue"> Welcome back</div>
            </h4>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomePage;
