import Menu from '../../components/Menu/Menu';
import './Reviews.module.css';

import { useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    const getReviews = async () => {
        const response = await fetch('http://localhost:8081/v1/api/reviews');
        const data = await response.json();
        setReviews(data);
    };

    getReviews();

    return <div>
        Reviews
        <div>
            <Menu />
            {reviews.map(review => {
                return <div key={review.id}>
                    <h2>{review.title}</h2>
                    <p>{review.content}</p>
                    <p>{review.reviewer}</p>
                    <img src={review.image} alt={review.title} />
                </div>;
            })}
        </div>
    </div>;
};

export default Reviews;
