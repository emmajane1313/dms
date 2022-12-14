import { FunctionComponent } from "react";
import { RootState } from "./../../../redux/store";
import { useSelector } from "react-redux";
import Form from "./Form";
import UpdateForm from "./UpdateForm";
import { SwitcherProps } from "../../../types/general.types";

const Switcher: FunctionComponent<SwitcherProps> = ({
  dropFormat,
  productSuccess,
  setProductSuccess,
  setOpenDropDown,
  openDropDown,
  showFileMainImage,
  mainFile,
  featuredFiles,
  handleProductSubmit,
  handleDropFormatArray,
  data,
  newDropFormatArray,
  addMutation,
  updatedProductData,
  handleProductSubmitUpdate,
  setSuccess,
  success,
  updatedMutation,
  handleExistingDropFormatArray,
  handleDispatchFormatArray,
  hashImageStringOne,
  hashImageStringMultiple,
  imageUploading,
  imageUploadingUpdated,
  hashImageStringOneUpdated,
  hashImageStringMultipleUpdated,
  clickedFirst,
}): JSX.Element => {
  let action = "INVENTORY_ADD";
  const displaySection = useSelector(
    (state: RootState) => state.app.productReducer.value
  );

  const decideStringAction = () => {
    action = displaySection;
    return action;
  };

  const dropTypeName = useSelector(
    (state: RootState) => state.app.dropTypeReducer.value
  );

  switch (decideStringAction()) {
    case "INVENTORY_UPDATE":
      return (
        <UpdateForm
          dropFormat={dropFormat}
          setOpenDropDown={setOpenDropDown}
          openDropDown={openDropDown}
          dropTypeName={dropTypeName}
          handleDispatchFormatArray={handleDispatchFormatArray}
          showFileMainImage={showFileMainImage}
          mainFile={mainFile}
          featuredFiles={featuredFiles}
          handleProductSubmitUpdate={handleProductSubmitUpdate}
          data={data}
          updatedProductData={updatedProductData}
          success={success}
          newDropFormatArray={newDropFormatArray}
          setSuccess={setSuccess}
          updatedMutation={updatedMutation}
          handleExistingDropFormatArray={handleExistingDropFormatArray}
          hashImageStringOneUpdated={hashImageStringOneUpdated}
          imageUploadingUpdated={imageUploadingUpdated}
          hashImageStringMultipleUpdated={hashImageStringMultipleUpdated}
          clickedFirst={clickedFirst}
        />
      );

    default:
      return (
        <Form
          dropFormat={dropFormat}
          productSuccess={productSuccess}
          setProductSuccess={setProductSuccess}
          setOpenDropDown={setOpenDropDown}
          openDropDown={openDropDown}
          dropTypeName={dropTypeName}
          showFileMainImage={showFileMainImage}
          mainFile={mainFile}
          featuredFiles={featuredFiles}
          handleProductSubmit={handleProductSubmit}
          handleDropFormatArray={handleDropFormatArray}
          data={data}
          addMutation={addMutation}
          hashImageStringOne={hashImageStringOne}
          imageUploading={imageUploading}
          hashImageStringMultiple={hashImageStringMultiple}
        />
      );
  }
};

export default Switcher;
