import {useEffect, useState} from 'react';
import {useParams, useLocation} from 'react-router-dom';


export const ProductPage = () => {
    const [product, setProduct] = useState(null);
    const {productId} = useParams();
    const location = useLocation();

    useEffect(() => {
        fetch(`http://localhost:3000/${productId}.json`)
            .then(res => res.json())
            .then(product => setProduct(product))
    }, [productId])

    if (!product) {
        return <div>Loading...</div>
    }

    const {description, name, id, leftCount} = product;

    return (
        <div>
            Product Info Page

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

