import { FacetValue } from "@/types/fetchTypes";

export default function arrayToString(array: FacetValue[]) {
  const stringFromArray = array
    .filter((item) => item.isSelected)
    .map((item) => item.id)
    .join(",");
  return stringFromArray;
}
