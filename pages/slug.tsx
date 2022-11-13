import { NextPage } from "next";
import Purchase from "../components/Slug/Purchase";
import Banner from "../components/Slug/Banner";
import Specifications from "../components/Slug/Specifications";

// get static props and paths here for the order info

const Slug: NextPage = (): JSX.Element => {
  return (
    <div className="relative h-full w-full bg-black grid grid-flow-row auto-rows-[auto auto] overflow-hidden">
      <Purchase />
      <Banner />
      <Specifications />
    </div>
  );
};

export default Slug;
