import { type ProductItemType } from "../types";
import { ProductItem } from "./productItem";

export type ProductListProps = {
  products: ProductItemType[];
};

function ProductList({ products }: ProductListProps) {
  return (
    <ul
      data-testid="products-list"
      className="mb-8 mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
    >
      {products.map((item) => {
        return <ProductItem key={item.id} product={item} />;
      })}
    </ul>
  );
}

export { ProductList };
