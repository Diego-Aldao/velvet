import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Props {
  cantidad: number;
}

export default function ProductCardSkeleton({ cantidad }: Props) {
  return (
    <>
      {Array(cantidad)
        .fill(0)
        .map((_, i) => (
          <article
            className="w-full h-[65vw] sm:h-[50vw] md:h-[40vw] lg:h-[35vw] xl:h-[30vw] 2xl:h-[450px]"
            key={i}
          >
            <Skeleton height={"100%"} />
          </article>
        ))}
    </>
  );
}
