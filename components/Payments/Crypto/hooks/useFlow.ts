import {
  useSendTransaction,
  usePrepareSendTransaction,
  useWaitForTransaction,
} from "wagmi";
import { ethers } from "ethers";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

const useFlow = () => {
  const itemPrice = useSelector((state: RootState) => state.app.priceReducer);
  const { config, isError: errorConfig } = usePrepareSendTransaction({
    request: {
      to: "0xfa3fea500eeDAa120f7EeC2E4309Fe094F854E61",
      value: ethers.utils.parseEther((itemPrice?.price).toString()),
    },
    chainId: 1,
  });

  const {
    data,
    sendTransactionAsync,
    isError: sendError,
  } = useSendTransaction(config);

  const handleSendEth = async () => {
    await sendTransactionAsync?.();
  };

  const {
    isLoading,
    isSuccess,
    isError,
    data: hashData,
  } = useWaitForTransaction({
    hash: data?.hash,
  });

  return {
    isLoading,
    sendError,
    isSuccess,
    isError,
    sendTransactionAsync,
    data,
    handleSendEth,
    hashData,
    errorConfig,
  };
};

export default useFlow;
