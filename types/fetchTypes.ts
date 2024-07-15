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
