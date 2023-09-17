import Image from "next/image";

function ProductImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 relative h-80 w-full overflow-hidden rounded-lg bg-white transition group-hover:scale-110 group-hover:opacity-75 sm:h-64">
      <Image
        alt={alt}
        width="256"
        height="256"
        src={src}
        className="h-full w-full object-cover object-center"
      />
    </div>
  );
}

export { ProductImage };
