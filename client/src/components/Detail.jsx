import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Detail = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products/" + id)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => console.log(err));
    }, [setProduct, id]);
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    );
};

export default Detail;
