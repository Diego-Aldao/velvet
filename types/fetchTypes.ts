export type InitialFetch = {
  navigation: Navigation[];
  brands: Navigation[];
  footer: Navigation[];
}; /*volver a los types iniciales para cuando seael fetch real */

export type Navigation = {
  id: string;
  alias: null | string;
  type: string;
  channelExclusions: string[];
  webLargePriority: number;
  content: Content;
  display: Display | null;
  style: Style;
  link: Link | null;
  children: Navigation[];
};

export type ChannelExclusion = "apps" | "webLarge" | "webSmall";

export type Content = {
  title: string;
  subTitle: null | string;
  webLargeImageUrl: null | string;
  mobileImageUrl: null | string;
};

export type Display = {
  webLargeTemplateId: number;
  webLargeTemplateName: string;
  webLargeColumnSpan: number;
  mobileTemplateId: number;
  mobileTemplateName: string;
  mobileDisplayLayout: string;
};

export type MobileDisplayLayout = "list" | "carousel";

export type MobileTemplateName =
  | ""
  | "imageBackground"
  | "circleImageList"
  | "circleImageRight"
  | "imageCardsWithDescription"
  | "homepageLinks"
  | "imageTileWithTitle";

export type WebLargeTemplateName =
  | ""
  | "textList"
  | "gridCircleImageLarge"
  | "circleImageListLarge"
  | "halfMarketingImage"
  | "fullMarketingImage"
  | "thirdMarketingImage"
  | "imageCardsWithDescriptionLarge";

export type Link = {
  linkType: string | null;
  brandSectionAlias: null | string;
  categoryId: number | null;
  webUrl: null | string;
  appUrl: null | string;
};

export type LinkType = "category" | "internal" | "external" | "aToZBrands";

export type Style = {
  webLargeStyleType: string | null;
  mobileStyleType: string | null;
};

export type EStyleType = "dark" | "premium" | "light" | "sale" | "noTitle";

export type Type = "container" | "link" | "aToZBrands";

/*FETCH PRODUCTOS */
export type FetchProductos = {
  searchTerm: string;
  categoryName: string;
  itemCount: number;
  redirectUrl: string;
  products: FetchProductosProduct[];
  facets: Facet[];
  diagnostics: Diagnostics;
  searchPassMeta: SearchPassMeta;
  queryId: null;
  discoverSearchProductTypes: any[];
  campaigns: Campaigns;
};

export type Campaigns = {
  imageTiles: any[];
  promoBanners: any[];
  sponsoredProducts: any[];
};

export type Diagnostics = {
  requestId: string;
  processingTime: number;
  queryTime: number;
  recommendationsEnabled: boolean;
  recommendationsAnalytics: RecommendationsAnalytics;
  advertisementsEnabled: boolean;
  advertisementsAnalytics: AdvertisementsAnalytics;
  curationAnalytics: CurationAnalytics;
};

export type AdvertisementsAnalytics = {
  status: number;
  customerOptIn: boolean;
  numberOfItemsFromPartner: number;
  items: any[];
  itemsFromPartner: any[];
  placementBeacons: PlacementBeacons;
};

export type PlacementBeacons = {
  onLoadBeacon: null;
  onViewBeacon: null;
};

export type CurationAnalytics = {
  status: number;
  numberOfCuratedItems: number;
  elevatedItems: any[];
  fixedItems: any[];
  comingSoonItems: any[];
  advertisementPositions: any[];
  marketingItems: any[];
};

export type RecommendationsAnalytics = {
  personalisationStatus: number;
  numberOfItems: number;
  numberOfRecs: number;
  personalisationType: string;
  experimentTrackerkey: string;
  items: any[];
};

export type Facet = {
  id: string;
  name: string;
  facetValues: FacetValue[];
  displayStyle: DisplayStyle;
  facetType: FacetType;
  hasSelectedValues: boolean;
  filtroVacio?: boolean;
};

export type DisplayStyle = "Single-Column" | "Price-Slider";

export type FacetType = "TextMultiSelect" | "Range";

export type FacetValue = {
  count: number;
  id: string;
  name: string;
  isSelected: boolean;
};

export type FetchProductosProduct = {
  id: number;
  name: string;
  price: Price;
  colour: string;
  colourWayId: number;
  brandName: string;
  hasVariantColours: boolean;
  hasMultiplePrices: boolean;
  groupId: number | null;
  productCode: number;
  productType: ProductType;
  url: string;
  imageUrl: string;
  additionalImageUrls: string[];
  videoUrl: null | string;
  showVideo: boolean;
  isSellingFast: boolean;
  isRestockingSoon: boolean;
  isPromotion: boolean;
  sponsoredCampaignId: null;
  facetGroupings: FacetGrouping[];
  advertisement: null;
};

export type FacetGrouping = {
  products: FacetGroupingProduct[];
  type: string;
};

export type FacetGroupingProduct = {
  productId: number;
};

export type Price = {
  current: Current;
  previous: Current;
  rrp: Current;
  isMarkedDown: boolean;
  isOutletPrice: boolean;
  currency: "EUR";
};

export type Current = {
  value: number | null;
  text: string;
};

export type ProductType = "Product" | "MixMatchProduct";

export type SearchPassMeta = {
  isPartial: boolean;
  isSpellcheck: boolean;
  searchPass: any[];
  alternateSearchTerms: any[];
};

/*FETCH DETALLE PRODUCTO */

export type FetchProductDetail = {
  id: number;
  name: string;
  description: string;
  localisedData: LocalisedDatum[];
  gender: string;
  productCode: string;
  pdpLayout: string;
  brand: Brand;
  sizeGuide: string;
  isNoSize: boolean;
  isOneSize: boolean;
  hasVariantsWithProp65Risk: boolean;
  variants: Variant[];
  media: Media;
  info: Info;
  badges: any[];
  associatedGroups: AssociatedGroups;
  shippingRestriction: null;
  rating: null;
  productType: ProductTypeDetail;
  plpIds: PlpID[];
  brandType: null;
  hairType: null;
  skinType: null;
  sellingTags: any[];
  isDiscontinued: boolean;
  baseUrl: string;
};

export type AssociatedGroups = {
  looks: Look[];
};

export type Look = {
  id: number;
  type: string;
  url: string;
};

export type Brand = {
  id: number;
  name: string;
  description: string;
};

export type Info = {
  aboutMe: string;
  sizeAndFit: string;
  careInfo: string;
};

export type LocalisedDatum = {
  locale: string;
  title: string;
  pdpUrl: string;
};

export type Media = {
  images: Image[];
  catwalk: Catwalk[];
  spinset: any[];
  swatchSprite: any[];
};

export type Catwalk = {
  assetId: null;
  url: string;
  colourWayId: number;
};

export type Image = {
  url: string;
  type: string;
  colourWayId: number | null;
  colour: string;
  isPrimary: boolean;
};

export type PlpID = {
  id: number;
  type: PlpIDType;
};

export type PlpIDType = "Standard" | "SEO" | "Brand";

export type ProductTypeDetail = {
  id: number;
  name: string;
};

export type Variant = {
  id: number;
  name: string;
  sizeId: number;
  brandSize: string;
  displaySizeText: string;
  sizeOrder: number;
  sku: string;
  isAvailable: boolean;
  colourWayId: number;
  colour: string;
  isPrimary: boolean;
  isProp65Risk: boolean;
  ean: null;
};

export type FetchProductDetailFullLook = {
  id: number;
  lookTypeId: number;
  lookTypeName: string;
  lookImageUrl: string;
  products: Product[];
};

export type Product = {
  id?: number;
  isHero?: boolean;
  pdpUrl?: string;
  name?: string;
  brandId?: number;
  brandName?: string;
  sizeGuideUrl?: string;
  media?: Media;
  isNoSize?: boolean;
  isOneSize?: boolean;
  hasVariantsWithProp65Risk?: boolean;
  productCode?: string;
  productType?: ProductType;
  variants?: any[];
};

export type ProductTypeFullLook = {
  id: number;
  name: string;
};
