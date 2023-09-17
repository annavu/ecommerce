import { ProductDescription } from "../atoms/productDescription";
import { type ProductItemType } from "../types";
import { ProductImage } from "@/ui/atoms/productImage";

export type ProductItemProps = {
  product: ProductItemType;
};

function ProductItem({ product }: ProductItemProps) {
  return (
    <li>
      <ProductImage alt={product.image.alt} src={product.image.src} />
      <ProductDescription product={product} />
    </li>
  );
}

export { ProductItem };
