import { type ProductItemType } from "../types";
import { formatPrice } from "@/utils";

export type ProductDescriptionProps = {
  product: ProductItemType;
};

function ProductDescription({
  product: { name, category, price },
}: ProductDescriptionProps) {
  return (
    <a href="/product/unisex-long-sleeve-tee-2">
      <div className="rounded-md border bg-slate-50 hover:bg-slate-100"></div>
      <div className="mt-2">
        <div className="flex flex-row justify-between">
          <h3 className="text-sm font-semibold text-slate-700">{name}</h3>
          <p
            className="small-caps text-sm font-medium text-slate-900"
            data-testid="product-price"
          >
            {formatPrice(price / 100)}
          </p>
        </div>
        <div className="mt-1 flex flex-row justify-between">
          <p className="text-sm text-slate-500">{category}</p>
        </div>
      </div>
    </a>
  );
}

export { ProductDescription };
