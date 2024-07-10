import { FacetValue } from "@/types/fetchTypes";

export default function toggleSelectedValue(
  filters: FacetValue[],
  clickedFilterId: string
) {
  const finalFilters = filters.map((filtroMap) => {
    if (filtroMap.id === clickedFilterId) {
      return { ...filtroMap, isSelected: !filtroMap.isSelected };
    } else {
      return filtroMap;
    }
  });
  return finalFilters;
}
