import React from 'react';
import { Link } from 'react-router-dom';

function BreadCrumb(props) {
  const { title } = props;
  return (
    <div className='breadcrumbs'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <p className='bread'>
              <span>
                <Link to='/'>Home </Link>
              </span>{' '}
              / <span>{title}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BreadCrumb;
