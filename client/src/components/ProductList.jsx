import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const ProductList = ({ product, setProduct }) => {
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [setProduct]);

    const deleteProduct = (id) => {
        axios
            .delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res);
                setProduct(product.filter((product) => product._id !== id));
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            {product.map((product, index) => {
                return (
                    <div key={index}>
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                        <Link to={`/${product._id}`}>
                            {" "}
                            {product.title}'s Page!{" "}
                        </Link>
                        <Link to={`/edit/${product._id}`}>Edit</Link>
                        <button
                            onClick={(e) => {
                                deleteProduct(product._id);
                            }}>
                            Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductList;
