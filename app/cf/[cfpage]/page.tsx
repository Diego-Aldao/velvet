import CheckoutFlowMainContent from "@/components/ChekoutFlow/CheckoutFlowMainContent";
import LinksFlow from "@/components/ChekoutFlow/LinksFlow";
import ContainerChekoutFlow from "@/components/containers/ContainerChekoutFlow";
import React from "react";

export default function CheckoutPage({
  params,
}: {
  params: { cfpage: "carrito" | "checkout" | "pago" };
}) {
  return (
    <ContainerChekoutFlow>
      <LinksFlow />
      <CheckoutFlowMainContent checkoutPage={params.cfpage} />
    </ContainerChekoutFlow>
  );
}
