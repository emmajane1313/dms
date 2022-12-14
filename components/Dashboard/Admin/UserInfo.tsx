import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserInfoProps, UserInterface } from "../../../types/general.types";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { setDrop } from "../../../redux/reducers/dropSlice";
import { RootState } from "../../../redux/store";

const UserInfo: FunctionComponent<UserInfoProps> = ({
  admins,
  show,
  setShow,
  setDeleteModal,
  setCantDeleteAdmin,
  handleModalTop,
}): JSX.Element => {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentAdmin = useSelector(
    (state: RootState) => state.app.userReducer.id
  );
  return (
    <div className="relative w-full row-start-1 grid grid-cols-4 auto-rows-auto place-self-center pt-10 gap-4 overflow-x-scroll max-h-[120vw]">
      {admins?.map((item: UserInterface, index: number) => {
        return (
          <div
            className="relative w-80 h-60 bg-grayBlue font-economica text-lg grid grid-flow-col auto-cols-[auto auto] group cursor-pointer"
            key={index}
          >
            <div className="relative col-start-1 h-fit w-fit grid grid-flow-row auto-rows-[auto auto] place-self-center">
              <div className="relative w-fit h-fit place-self-center row-start-1 text-black row-start-1">
                username:{" "}
                <span className="pl-3 font-economicaB">{item.username}</span>
              </div>
              <div className="relative row-start-2 text-black place-self-center">
                password:{" "}
                <span
                  onClick={() => setShow(!show)}
                  className="pl-3 font-economicaB"
                >
                  {show ? item.password : "Click to Reveal"}
                </span>
              </div>
              <div className="relative w-fit h-fit row-start-3 place-self-center pt-6">
                <RiDeleteBin5Fill
                  size={25}
                  color="black"
                  className="hover:scale-90 active:scale-90"
                  onClick={
                    item._id === currentAdmin
                      ? () => setCantDeleteAdmin(true)
                      : () => {
                          handleModalTop();
                          dispatch(
                            setDrop({
                              actionValue: "ADMIN_DELETE",
                              actionId: item._id,
                            })
                          );
                          setDeleteModal(true);
                        }
                  }
                />
              </div>
            </div>
          </div>
        );
      })}
      {/* <span className="relative w-80 h-60 font-economica text-lg grid grid-flow-col auto-cols-[auto auto] border-white/50 border-2 border-dashed">
        <div
          className="relative w-fit h-fit col-start-1 grid grid-flow-col auto-cols-[auto auto] bg-grayBlue place-self-center px-10 py-1 cursor-pointer hover:scale-105 active:scale-95"
          onClick={() => router.push("/sign-up")}
        >
          <div className="relative w-fit h-fit col-start-1 place-self-center text-black">
            add another admin
          </div>
        </div>
      </span> */}
    </div>
  );
};

export default UserInfo;
