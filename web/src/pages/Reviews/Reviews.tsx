import Menu from '../../components/Menu/Menu';
import './Reviews.module.css';

import { useState, useEffect } from 'react';

type Review = {
    id : string,
    title: string,
    content: string,
    reviewer: string,
    image: string,
}

const Reviews = () => {
    const [reviews, setReviews] = useState <Review[]> ([]);
    useEffect(() => {
        getReviews();
    }, []
    );

    const getReviews = async () => {
        const response = await fetch('http://localhost:8081/v1/api/reviews');
        const data = await response.json();
        setReviews(data.data);
    };
    return (
        <div>
            <h1>Reviews</h1>
            <div>
                <Menu />
                {reviews.map(review => {
                    return (
                        <section key={review.id}>
                            <h2>{review.title}</h2>
                            <p>{review.content}</p>
                            <p>{review.reviewer}</p>
                            <img src={review.image} alt={review.title} />
                        </section>
                    );
                })}
            </div>
        </div>
    );
};

export default Reviews;
