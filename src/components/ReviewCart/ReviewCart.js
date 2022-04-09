import React from 'react';

const ReviewCart = ({reviewData}) => {
    const {name, body, rating} = reviewData;
    console.log(reviewData);

    return(
        <div className=' bg-blue-300 m-5 p-4'>
            <p className='font-bold'>Name: <span className='font-normal'>{name}</span></p>
            <h4 className='font-bold'>Comment: <span className='font-normal'>{body}</span></h4>
            <h4 className='font-bold text-yellow-800'>Rating: <span className='font-normal'>{rating}</span></h4>
        </div>
    )
};

export default ReviewCart;
