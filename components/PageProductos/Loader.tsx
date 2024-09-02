"use client";
import { LocalFilters } from "@/types/localTypes";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  itemCount: number;
  fetchFilters: LocalFilters;
  setFetchFilters: React.Dispatch<React.SetStateAction<LocalFilters>>;
}

export default function Loader({
  itemCount,
  fetchFilters,
  setFetchFilters,
}: Props) {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      if (fetchFilters.offset >= itemCount - 48) return;
      const nuevosFiltros = {
        ...fetchFilters,
        offset: fetchFilters.offset + 48,
      };
      setFetchFilters(nuevosFiltros);
    }
  }, [inView]);

  return (
    <>
      {fetchFilters.offset <= itemCount - 48 && (
        <div
          className="loader-container  w-full lg:col-start-2 flex items-center justify-center"
          ref={ref}
        >
          <div className="loader"></div>
        </div>
      )}
    </>
  );
}
