import { ProductList } from "@/ui/molecules/productList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
  {
    name: "Super Mug",
    category: "Accessories",
    price: 2137,
    id: "1",
    image: {
      src: "https://fastly.picsum.photos/id/0/200/300.jpg?hmac=0pq7Zy79Vy4K-8w1qAMo1ppYmPvl-7lvwSx-LyZ7vNY",
      alt: "",
    },
  },
  {
    name: "Bag",
    category: "Accessories",
    price: 2137,
    id: "2",
    image: {
      src: "https://fastly.picsum.photos/id/0/200/300.jpg?hmac=0pq7Zy79Vy4K-8w1qAMo1ppYmPvl-7lvwSx-LyZ7vNY",
      alt: "",
    },
  },
  {
    name: "Long Sleeve",
    category: "T-Shirts",
    price: 2137,
    id: "3",
    image: {
      src: "https://fastly.picsum.photos/id/0/200/300.jpg?hmac=0pq7Zy79Vy4K-8w1qAMo1ppYmPvl-7lvwSx-LyZ7vNY",
      alt: "",
    },
  },
  {
    name: "Zip Hoodie",
    category: "Hoodies",
    price: 2137,
    id: "4",
    image: {
      src: "https://fastly.picsum.photos/id/0/200/300.jpg?hmac=0pq7Zy79Vy4K-8w1qAMo1ppYmPvl-7lvwSx-LyZ7vNY",
      alt: "",
    },
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
        <ProductList products={products} />
      </section>
    </main>
  );
}
