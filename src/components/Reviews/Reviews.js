import React from 'react';
import UseReview from '../../Hooks/UseReview';
import ReviewCart from '../ReviewCart/ReviewCart'

const Reviews = () => {
   const [reviews, setReviews] = UseReview();
    return (
        <div className=' grid grid-cols-3 mt-10 text-left'>
            {
                reviews.map( review => (
                <ReviewCart
                key={review.id}
                reviewData={review}
                ></ReviewCart>
                ))
            }
        </div>
    );
};

export default Reviews;