import Product from "../product/Product";

const ProductList = ({ products }) => (
  <div className="product-list">
    {products.map((product) => (
      <Product key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;
