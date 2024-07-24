import { Navigation } from "@/types/fetchTypes";

const getCategories = (navegacion: Navigation) => {
  const allCategories = navegacion?.children.filter(
    (item) => item.content.title == "Categories"
  )[0].children;
  const filteredCategories = allCategories?.filter(
    (categoria) => categoria.content.title !== "Marketplace"
  );
  return filteredCategories;
};

export default getCategories;
