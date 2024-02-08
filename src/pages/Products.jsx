import {PIZZA_API} from "../constants.js";
import ProductCard from "../components/MenuItem/ProductCard.jsx";
import useFetch from "../hooks/useFetch.jsx";

const Products = () => {

    const {data: products, loading, error} = useFetch(`${PIZZA_API}/menu`);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Something went wrong: {error.message}</div>
    }

    return (
        <div className="container">
            <div>
                {!!products && products.data.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
};

export default Products;