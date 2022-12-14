import { NextPage } from "next";
import Purchase from "../../components/Slug/Purchase";
import Banner from "../../components/Slug/Banner";
import Specifications from "../../components/Slug/Specifications";
import { ProductInterface, SlugProps } from "../../types/general.types";
import { BASE_URL } from "../../lib/constants";
import { useDispatch } from "react-redux";
import { setCurrency } from "../../redux/reducers/currencySlice";
import { useEffect } from "react";
import { setMain } from "../../redux/reducers/mainImageSlice";
import { setFeatured } from "../../redux/reducers/featuredImageSlice";

export const getStaticPaths = async () => {
  const response = await fetch(`${BASE_URL}/api/products`);
  const product: ProductInterface[] = await response.json();
  const paths = product?.map((item: ProductInterface) => {
    return {
      params: {
        slug: item.slug,
      },
    };
  });

  return {
    paths,
    fallback: 'blocking'
  };
};

export const getStaticProps = async (context: any) => {
  const productSlug: string = context.params.slug;
  const response = await fetch(`${BASE_URL}/api/products/${productSlug}`);
  const data: ProductInterface = await response.json();
  return {
    props: { item: data },
    revalidate: 30,
  };
};

const Slug: NextPage<SlugProps> = ({ item }): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setCurrency({
        actionSlug: item?.slug,
      })
    );
    dispatch(setMain(item?.mainImage as string));
    dispatch(setFeatured(item?.featuredImages as string[]));
  }, []);

  console.log(item)

  return (
    <div className="relative h-full w-full bg-black grid grid-flow-row auto-rows-[auto auto] overflow-hidden">
      <Purchase item={item} />
      <Banner />
      <Specifications item={item} />
    </div>
  );
};

export default Slug;
