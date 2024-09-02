import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ProductCardSkeleton from "./ProductCardSkeleton";
import ContainerMainGrid from "../containers/ContainerMainGrid";

export default function SkeletonPageProductos() {
  return (
    <div className="flex flex-col gap-12 items-center w-full lg:gap-20">
      <h1 className="w-2/3 h-8 lg:h-16">
        <Skeleton className="w-full h-full" />
      </h1>
      <div className="grid gap-12 w-full lg:grid-cols-[270px,1fr] xl:grid-cols-[300px,1fr] lg:gap-4">
        <div className="w-full max-w-[300px] h-10 mx-auto lg:mx-0 lg:h-[1200px]">
          <Skeleton className="w-full h-full" />
        </div>
        <ContainerMainGrid customStyles="md:gap-x-4">
          <ProductCardSkeleton cantidad={48} />
        </ContainerMainGrid>
      </div>
    </div>
  );
}
