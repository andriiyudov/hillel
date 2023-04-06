import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

export const InfoPage = () => {
    const [product, setProduct] = useState(null);

    const {productId} = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/${productId}.json`)
            .then(res => res.json())
            .then(product => setProduct(product))
    }, [productId])

    if (!product) {
        return <div>Loading...</div>
    }

    const {name, id, description, leftCount} = product;

    return (
        <div className="info-page">
            Info Page
            <ul>
                <li>
                    Name: {name} #{id}
                </li>
                <li>
                    Description: {description}
                </li>
                <li>
                    How many left: {leftCount}
                </li>
            </ul>
        </div>
    )
}
