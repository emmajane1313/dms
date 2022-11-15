import {
  StripeElementsOptions,
  Stripe,
  StripeElements,
} from "@stripe/stripe-js";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { ItemState } from "../redux/reducers/itemSlice";

export interface AggregatorInterface {
  inputs:
    | []
    | [
        {
          internalType: string;
          name: string;
          type: string;
        }
      ];
  name: string;
  outputs: {
    internalType: string;
    name: string;
    type: string;
  }[];
  stateMutability: string;
  type: string;
}

export type UseBannerResult = {
  imageList: string[];
  currentIndex: number;
  setCurrentIndex: (e: number) => void;
  direction: number;
  setDirection: (e: number) => void;
};

export type UseImageSliderResult = {
  nextImage: () => void;
  imageList: string[];
  imageIndex: number;
  featuredImage: string;
  setFeaturedImage: (e: string) => void;
};

export type UseOrderResult = {
  tokens: string[];
  layoutIndexes: number[];
  setSelectedPrice: (e: string) => void;
  setPurchase: (e: string) => void;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
  featurePrice: number;
  convertedPrice: number;
  currencyTag: string;
  clickedToken: string;
  setClickedToken: (e: string) => void;
  setPayment: (e: string) => void;
  payment: string;
};

export type UseOracleResult = {
  data: any;
};

export type PriceProps = {
  tokens: string[];
  featurePrice: number;
  layoutIndexes: number[];
  convertedPrice: number;
  setSelectedPrice: (e: string) => void;
  currencyTag: string;
  clickedToken: string;
  setClickedToken: (e: string) => void;
};

export type UseCollectionTagsResult = {
  categories: string[];
  formats: string[];
  categoryColors: string[];
  formatColors: string[];
  showFormats: boolean;
  setShowFormats: (e: boolean) => void;
  showCategories: boolean;
  setShowCategories: (e: boolean) => void;
};

export type UseTraitsResult = {
  traits: string[];
  values: string[];
};

export type UseGalleryResult = {
  extend: boolean;
  setExtend: (e: boolean) => void;
  gallery: string[];
};

export type UseFeaturedResult = {
  dropFormat: string[];
  dropType: string[];
  formatColors: string[];
  typeColors: string[];
};

export type PaymentButtonProps = {
  payment: string;
  setPurchase: (e: string) => void;
  setPayment: (e: string) => void;
  clickedToken: string;
  item: any;
  quantity: number;
};

export type UseFiatResult = {
  clientSecret: string;
  options: StripeElementsOptions;
};

export type UseFormResult = {
  handleSubmit: (e: any) => Promise<void>;
  isLoading: boolean;
  stripe: Stripe | null;
  elements: StripeElements | null;
  message: string | undefined;
};

export interface ProductInterface {
  _id?: string;
  name: string;
  description: string;
  dropType: string;
  dropFormat: string[];
  mainImage?: Buffer;
  featuredImages?: Buffer[];
  slug: string;
}

export interface DropInterface {
  _id?: string;
  title: string;
  description: string;
}

export interface OptionsInterface {
  method: string;
  headers: {
    "Content-Type": string;
  };
  body?: string;
}

export type UseAddDropTypesResult = {
  data: any;
  isLoading: boolean;
  isError: boolean;
  handleDropSubmit: (e: FormEvent) => void;
  addMutation: any;
  success: boolean;
  setSuccess: (e: boolean) => void;
};

export type AddDropTypeProps = {
  handleDropSubmit: (e: FormEvent) => void;
  addMutation: any;
  success: boolean;
  setSuccess: (e: boolean) => void;
};

export type MainDropTypeProps = {
  data: any;
  isLoading: boolean;
  isError: boolean;
  setDeleteModal: (e: boolean) => void;
  productData: any;
  setCantDeleteDrop: (e: boolean) => void;
};

export type UpdateDropTypeProps = {
  handleDropSubmitUpdate: (e: FormEvent) => Promise<void>;
  updatedMutation: any;
  success: boolean;
  setSuccess: (e: boolean) => void;
  data: any;
};

export type UseUpdateDropTypesResult = {
  data: any;
  isLoading: boolean;
  isError: boolean;
  handleDropSubmitUpdate: (e: FormEvent) => Promise<void>;
  updatedMutation: any;
  success: boolean;
  setSuccess: (e: boolean) => void;
  handleDropDelete: () => Promise<void>;
};

export type DeleteModalProps = {
  setDeleteModal: (e: boolean) => void;
  handleDropDelete: () => Promise<void>;
  handleProductDelete: () => Promise<void>;
};

export type UseUpdateProductResult = {
  data: any;
  handleProductSubmitUpdate: (e: FormEvent) => Promise<void>;
  updatedMutation: any;
  success: boolean;
  setSuccess: (e: boolean) => void;
  handleProductDelete: () => Promise<void>;
  handleExistingDropFormatArray: (e: string) => void;
  handleDispatchFormatArray: (e: string) => void;
  newDropFormatArray: string[];
};

export type UseAddProductResult = {
  data: any;
  isLoading: boolean;
  isError: boolean;
  handleProductSubmit: (e: FormEvent) => void;
  addMutation: any;
  productSuccess: boolean;
  setProductSuccess: (e: boolean) => void;
  dropFormat: string[];
  openDropDown: boolean;
  setOpenDropDown: (e: boolean) => void;
  showFileMainImage: (e: FormEvent, name: string) => void;
  mainFile: Buffer | undefined | MediaSource | string;
  featuredFiles: string[] | undefined;
  handleDropFormatArray: (e: FormEvent) => void;
};

export type MapProps = {
  productData: any;
  setDeleteModal: (e: boolean) => void;
};

export type FormProps = {
  data: any;
  handleProductSubmit: (e: FormEvent) => void;
  dropFormat: string[];
  openDropDown: boolean;
  showFileMainImage: (e: FormEvent, name: string) => void;
  mainFile: Buffer | undefined | MediaSource | string;
  featuredFiles: string[] | undefined;
  handleDropFormatArray: (e: FormEvent) => void;
  productSuccess: boolean;
  setProductSuccess: (e: boolean) => void;
  addMutation: any;
  dropTypeName: string;
  setOpenDropDown: (e: boolean) => void;
};

export type SwitcherProps = {
  data: any;
  handleProductSubmit: (e: FormEvent) => void;
  dropFormat: string[];
  openDropDown: boolean;
  setOpenDropDown: (e: boolean) => void;
  showFileMainImage: (e: FormEvent, name: string) => void;
  mainFile: Buffer | undefined | MediaSource | string;
  featuredFiles: string[] | undefined;
  handleDropFormatArray: (e: FormEvent) => void;
  productSuccess: boolean;
  setProductSuccess: (e: boolean) => void;
  addMutation: any;
  updatedProductData: any;
  setSuccess: (e: boolean) => void;
  success: boolean;
  updatedMutation: any;
  handleProductSubmitUpdate: (e: FormEvent) => Promise<void>;
  handleExistingDropFormatArray: (e: string) => void;
  handleDispatchFormatArray: (e: string) => void;
  newDropFormatArray: string[];
};

export type UpdateFormProps = {
  data: any;
  dropFormat: string[];
  openDropDown: boolean;
  setOpenDropDown: (e: boolean) => void;
  dropTypeName: string;
  showFileMainImage: (e: FormEvent, name: string) => void;
  mainFile: Buffer | undefined | MediaSource | string;
  featuredFiles: string[] | undefined;
  handleDropFormatArray: (e: FormEvent) => void;
  updatedProductData: any;
  setSuccess: (e: boolean) => void;
  success: boolean;
  updatedMutation: any;
  handleProductSubmitUpdate: (e: FormEvent) => Promise<void>;
  handleExistingDropFormatArray: (e: string) => void;
  handleDispatchFormatArray: (e: string) => void;
  newDropFormatArray: string[];
};

export type SlugProps = {
  item: ProductInterface;
};

export type PurchaseProps = {
  item: ProductInterface;
};

export type CollectionTagsProps = {
  item: ProductInterface;
};

export type SpecificationsProps = {
  item: ProductInterface;
};

export type DeleteDropProps = {
  setCantDeleteDrop: (e: boolean) => void;
};

export interface AddressInterface {
  firstName: string;
  lastName: string;
  email: string;
  countryLocation: string;
  street: string;
  buildingAparmentNo: number;
  stateProvince: string;
  city: string;
  zipCode: number;
}

export type OrderProps = {
  item: ItemState;
};

export type OrderInfoProps = {
  item: ItemState;
};

export type DetailsProps = {
  handleAddressSubmit: (e: FormEvent) => void;
  detailsSuccess: boolean;
};

export type useDetailsResults = {
  handleAddressSubmit: (e: FormEvent) => void;
  detailsSuccess: boolean;
};

export interface UserInterface {
  username: string;
  password: string;
}
