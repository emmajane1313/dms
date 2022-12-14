import { FunctionComponent, useContext } from "react";
import { useDispatch } from "react-redux";
import { setDraft } from "../../../redux/reducers/draftSlice";
import useAddDraft from "./hooks/useAddDraft";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import useUpdateDraft from "./hooks/useUpdateDraft";
import Switcher from "./Switcher";
import Listed from "./Listed";
import { setDraftImages } from "../../../redux/reducers/draftImageSlice";
import { GlobalContext } from "../../../pages/_app";

const Main: FunctionComponent = (): JSX.Element => {
  const {
    handleDraftSubmit,
    success,
    drafts,
    hashImageStringDraft,
    imageDraftUploading,
    setSuccess,
    handleRemoveImage,
    setMappedImages,
  } = useAddDraft();
  const {
    handleDraftUpdate,
    oneDraft,
    imageDraftUpdateUploading,
    updateSuccess,
    setUpdateSuccess,
    hashImageStringDraftUpdate,
    setMappedUpdatedImages,
    handleUpdateRemoveImages,
    handleRemoveSecondUpdateImage,
  } = useUpdateDraft();
  const dispatch = useDispatch();
  const imagesArray = useSelector(
    (state: RootState) => state.app.draftImageReducer.value
  );
  const imageDraftUpdated = useSelector(
    (state: RootState) => state.app.updateDraftImagesReducer.value
  );
  const { clickedFirstDraft, setClickedFirstDraft } = useContext(GlobalContext);
  return (
    <div className="relative w-full h-full grid grid-flow-col auto-cols-[auto auto] py-8 gap-10">
      <div className="relative w-full max-h-[60vw] overflow-y-scroll h-fit col-start-1 grid grid-flow-row auto-rows-[auto auto] pt-10 pr-16 gap-10">
        <div
          className="relative w-full h-fit row-start-1 grid grid-flow-col auto-cols-[auto auto] bg-grayBlue cursor-pointer hover:scale-105 active:scale-95"
          onClick={() => {
            setMappedImages([]);
            dispatch(setDraftImages([]));
            dispatch(
              setDraft({
                actionId: undefined,
                actionTitle: undefined,
                actionDescription: undefined,
                actionProductImages: undefined,
                actionType: "ADD_DRAFT",
              })
            );
            setClickedFirstDraft(true);
          }}
        >
          <div className="relative w-full h-fit px-10 py-1.5 col-start-1 place-self-center text-black font-economica">
            New Draft
          </div>
        </div>
        {drafts && (
          <Listed
            drafts={drafts}
            setMappedUpdatedImages={setMappedUpdatedImages}
            setClickedFirstDraft={setClickedFirstDraft}
          />
        )}
      </div>
      <div className="relative w-full h-full col-start-2 grid grid-flow-row auto-rows-[auto auto] pt-10">
        <Switcher
          hashImageStringDraft={hashImageStringDraft}
          imagesArray={imagesArray}
          handleDraftUpdate={handleDraftUpdate}
          handleDraftSubmit={handleDraftSubmit}
          success={success}
          draft={oneDraft}
          imageDraftUploading={imageDraftUploading}
          setSuccess={setSuccess}
          imageDraftUpdateUploading={imageDraftUpdateUploading}
          updateSuccess={updateSuccess}
          setUpdateSuccess={setUpdateSuccess}
          hashImageStringDraftUpdate={hashImageStringDraftUpdate}
          imageDraftUpdated={imageDraftUpdated}
          handleRemoveImage={handleRemoveImage}
          handleUpdateRemoveImages={handleUpdateRemoveImages}
          handleRemoveSecondUpdateImage={handleRemoveSecondUpdateImage}
          clickedFirstDraft={clickedFirstDraft}
          setClickedFirstDraft={setClickedFirstDraft}
        />
      </div>
    </div>
  );
};

export default Main;
