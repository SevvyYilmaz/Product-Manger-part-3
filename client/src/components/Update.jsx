import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        description: "",
    });
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setFormData(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const updateProduct = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:8000/api/products/${id}`, formData)

            .then((res) => {
                console.log(res);
                navigate("/");
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
                <div>
                    <label>Title</label>
                    <br />
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label>Price</label>
                    <br />
                    <input
                        type="text"
                        name="price"
                        value={formData.price}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label>Description</label>
                    <br />
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={changeHandler}
                    />
                </div>
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;
