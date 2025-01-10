import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CheckoutSkeleton() {
  return (
    <section className="grid gap-8 relative max-w-[400px] mx-auto md:grid-cols-[1.4fr,1fr] sm:max-w-full w-full sm:gap-x-2 lg:gap-8 lg:grid-cols-[1fr,350px] xl:grid-cols-[1fr,450px]">
      <div className="form w-full h-[400px]">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="orden w-full h-[300px]">
        <Skeleton className="w-full h-full" />
      </div>
    </section>
  );
}
