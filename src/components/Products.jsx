import { useLoaderData } from "react-router-dom";

const Products = () => {
    const allProducts=useLoaderData()
    console.log(allProducts);
    return (
        <div>
            
        </div>
    );
};

export default Products;