import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { setDraftImages } from "../../../redux/reducers/draftImageSlice";
import { setDraft } from "../../../redux/reducers/draftSlice";
import { setUpdateDraftImages } from "../../../redux/reducers/updateDraftImagesSlice";
import { DraftInterface, ListedProps } from "../../../types/general.types";

const Listed: FunctionComponent<ListedProps> = ({
  drafts,
  setMappedUpdatedImages,
  setClickedFirstDraft,
}): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <div className="relative w-48 h-fit row-start-2 grid grid-flow-row auto-rows-[auto auto] gap-6">
      {drafts?.map((draft: DraftInterface, index: number) => {
        return (
          <div
            className={`relative w-fit h-fit grid grid-flow-col auto-cols-[auto auto] gap-2 cursor-pointer hover:scale-95`}
            key={index}
            onClick={() => {
              dispatch(
                setDraft({
                  actionId: draft._id,
                  actionTitle: draft.title,
                  actionDescription: draft.description,
                  actionProductImages: draft.productImages,
                  actionType: "UPDATE_DRAFT",
                })
              );
              dispatch(setDraftImages([]));
              dispatch(setUpdateDraftImages([]));
              setMappedUpdatedImages([]);
              setClickedFirstDraft(true);
            }}
          >
            <div className="relative w-fit h-fit col-start-1 pr-3 grid grid-flow-col auto-cols-[auto auto] place-self-center">
              <div className="relative bg-white h-2 w-2 place-self-center col-start-1 rounded-full"></div>
            </div>
            <div className="relative w-fit h-fit col-start-2 text-white font-economica place-self-center text-sm">
              {draft.title}
            </div>
            <div className="relative w-fit h-fit col-start-3 text-white font-economica place-self-center text-sm">
              {draft.date}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Listed;
