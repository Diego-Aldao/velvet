"use client";
import { useState } from "react";

export default function useToggleBoolean() {
  const [isTrue, setIsTrue] = useState<boolean>(false);
  const handleToggle = () => {
    setIsTrue((isTrue) => !isTrue);
  };

  return { isTrue, handleToggle };
}
