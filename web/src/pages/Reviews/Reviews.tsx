import './Reviews.module.css';
import { useState, useEffect } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect (() => {
        fetch('https://strapi.io/')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                setReviews(data);
            });
    }, []);

    return (
        <div>
            <div>Reviews</div>
            {reviews.map(review =>
                <div>Reviews: {review}</div>
            )}

        </div>

    );
};

export default Reviews;
