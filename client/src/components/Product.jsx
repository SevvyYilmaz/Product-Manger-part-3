import React, { useState } from "react";
import axios from "axios";

const Product = ({ product, setProduct }) => {
    
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        description: "",
    });

    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        
    }

    const submitHandler = (e) => {
        e.preventDefault();
        
        axios.post("http://localhost:8000/api/products", formData)
            .then((res) => {
                console.log(res);
                setProduct([...product, res.data]);
            })
            .catch((err) => {
                console.log(err);
            });
            
    }


    return (
        <div>
            <h1>Product Manager</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input
                        type="text"
                        name="price"
                        id="price"
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        name="description"
                        id="description"
                        onChange={changeHandler}
                    />
                </div>
                <input type="submit" value="Create" />
            </form>
        </div>
    );
};

export default Product;
