import { FormEvent, FunctionComponent, useEffect } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoIosSave } from "react-icons/io";
import moment from "moment";
import { DraftFormUpdateProps } from "../../../types/general.types";
import { AiOutlineLoading } from "react-icons/ai";

const UpdateForm: FunctionComponent<DraftFormUpdateProps> = ({
  handleDraftUpdate,
  draft,
  updateSuccess,
  setUpdateSuccess,
  hashImageStringDraftUpdate,
  imageDraftUpdateUploading,
  imageDraftUpdated,
}): JSX.Element => {
  useEffect(() => {
    setTimeout(() => {
      setUpdateSuccess(false);
    }, 4000);
  }, [updateSuccess]);
  console.log(
    draft?.productImages,
    "draft product",
    imageDraftUpdated,
    "image updated"
  );
  return (
    <form
      className="relative w-full h-full grid grid-flow-col auto-cols-[auto auto] gap-20"
      onSubmit={(e: FormEvent) => handleDraftUpdate(e)}
    >
      <div className="relative w-full h-full col-start-1 grid grid-flow-col auto-cols-[auto auto] bg-grayBlue p-8 gap-4">
        <div className="relative w-full h-fit row-start-1 grid grid-flow-col auto-cols-[auto auto] col-start-1 gap-6">
          <div className="relative w-full h-fit col-start-1 place-self-center pr-16 text-black text-base">
            {moment().format("MM/D hh:mm:ss")}
          </div>
          <div className="relative w-full h-fit col-start-2 place-self-center cursor-pointer grid grid-flow-col auto-cols-[auto auto] gap-2 pr-4">
            <div className="relative w-fit h-fit col-start-1 place-self-center cursor-pointer">
              <RiDeleteBin5Fill
                size={15}
                color="black"
                className="hover:scale-90 active:scale-90"
              />
            </div>
            <button
              className="relative w-fit h-fit col-start-2 place-self-center cursor-pointer"
              type="submit"
            >
              <IoIosSave
                size={15}
                color={updateSuccess ? "#ADE7B5" : "black"}
                className="hover:scale-90 active:scale-90"
              />
            </button>
          </div>
          <input
            key={draft?.title}
            name="productTitle"
            placeholder="Product Title"
            required
            type={"text"}
            defaultValue={draft?.title}
            className={`relative col-start-3 w-80 h-fit text-black font-economica px-2 bg-grayBlue border-black border-2 py-3 justify-self-end`}
            disabled={updateSuccess ? true : false}
          />
        </div>
        <div className="relative w-full h-full row-start-2 grid grid-flow-col auto-cols-[auto auto]">
          <textarea
            key={draft?.description}
            name="description"
            defaultValue={draft?.description}
            placeholder={"Product Description / Details"}
            className={`relative col-start-1 w-full h-[50vw] max-h-full text-black font-economica px-2 bg-grayBlue border-black border-2 py-3 align-top text-start`}
            disabled={updateSuccess ? true : false}
          />
        </div>
      </div>
      <div className="relative w-fit h-fit col-start-2 max-h-[60vw] overflow-y-scroll grid grid-flow-row auto-rows-[auto auto]">
        <span className="relative w-80 h-60 font-economica text-lg grid grid-flow-col auto-cols-[auto auto] border-white/50 border-2 border-dashed row-start-1">
          <div className="relative w-fit h-fit col-start-1 grid grid-flow-col auto-cols-[auto auto] bg-grayBlue place-self-center px-10 py-1 cursor-pointer hover:scale-105 active:scale-95">
            <label
              className="relative w-full h-full p-2 place-self-end rounded-sm bg-grayBlue cursor-pointer active:scale-95 p-2"
              onChange={(e: FormEvent) => {
                hashImageStringDraftUpdate(e);
              }}
            >
              <div
                className={`relative w-fit h-fit col-start-1 place-self-center text-black ${
                  imageDraftUpdateUploading && "animate-spin"
                }`}
              >
                {imageDraftUpdateUploading ? (
                  <AiOutlineLoading size={20} color={"black"} />
                ) : (
                  "add product image"
                )}
              </div>
              <input
                type="file"
                accept="image/png"
                hidden
                id="files"
                multiple={false}
                name="featuredImages"
                disabled={
                  updateSuccess || imageDraftUpdateUploading ? true : false
                }
              />
            </label>
          </div>
        </span>
        {draft?.productImages && imageDraftUpdated?.length === 0 ? (
          <div className="relative w-fit h-fit row-start-2 grid grid-flow-row auto-rows-auto place-self-center pt-10 gap-4">
            {draft?.productImages.map((image: string, index: number) => {
              return (
                <div
                  className={`relative w-80 h-60 border-white/50 border-2 row-start-${
                    index + 1
                  }`}
                >
                  <img
                    src={`https://${image}.ipfs.w3s.link`}
                    className="relative object-cover w-full h-full"
                  />
                </div>
              );
            })}
          </div>
        ) : (
          imageDraftUpdated?.length !== 0 && (
            <div className="relative w-fit h-fit row-start-2 grid grid-flow-row auto-rows-auto place-self-center pt-10 gap-4">
              {imageDraftUpdated?.map((image: string, index: number) => {
                return (
                  <div
                    className={`relative w-80 h-60 border-white/50 border-2 row-start-${
                      index + 1
                    }`}
                  >
                    <img
                      src={`https://${image}.ipfs.w3s.link`}
                      className="relative object-cover w-full h-full"
                    />
                  </div>
                );
              })}
            </div>
          )
        )}
      </div>
    </form>
  );
};

export default UpdateForm;
