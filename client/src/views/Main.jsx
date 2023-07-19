import React, { useState } from "react";
import Product from "../components/Product";
import ProductList from "../components/ProductList";

const Main = (props) => {
    const [product, setProduct] = useState([]);

    return (
        <div>
            {/* PersonForm and Person List can both utilize the getter and setter established in their parent component: */}
            <Product product={product} setProduct={setProduct} />
            <hr />
            <ProductList product={product} setProduct={setProduct} />
        </div>
    );
};
export default Main;
