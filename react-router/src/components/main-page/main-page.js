import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

export const MainPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/products.json')
            .then(res => res.json())
            .then(products => setProducts(products))
    }, [])

    return (
        <div className="main-page">
            Main Page
            <div>
                {!products.length && (
                    <div>No Products yet</div>
                )}
                {products.length && (
                    <ul>
                        {products.map(({name, id, price}) => (
                            <li key={id}>
                                <div>Name: {name} #{id}</div>
                                <div>Price: {price}</div>
                                <Link to={`/info/${id}`}>View Details</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}
