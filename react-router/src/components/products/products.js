import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

export const Products = () => {
    const [products, setProducts] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/products.json')
            .then(res => res.json())
            .then(products => setProducts(products))
    }, [])

    const onButtonClick = (id) => () => {
        navigate(`/products/${id}`, {state: {prodId: id}});
    }

    return (
        <div>
            Products

            <div>
                {!products.length && (<div>No products</div>)}
                {!!products.length && (
                    <ul>
                        {
                            products.map(({name, id, price}) => (
                                <li key={id}>
                                    <div>Name: {name} #{id}</div>
                                    <div>Price: {price}</div>
                                    <button onClick={onButtonClick(id)}>
                                        View Details
                                    </button>
                                    <button onClick={onButtonClick(id)}>
                                        Edit
                                    </button>
                                    <button onClick={onButtonClick(id)}>
                                        Delete
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                )}
            </div>
        </div>
    )
}
