import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useCheckoutFlow() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("checkoutFlow")) {
      router.push("/");
    } else {
      setLoading(false);
    }
  }, []);

  const endCheckout = () => {
    localStorage.removeItem("checkoutFlow");
  };

  return { loading, endCheckout };
}
