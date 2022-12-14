import dbConnect from "../../../utils/dbConnect";
import { getAddress, updateAddress } from "../../../utils/controllers";

const handler = async (req: any, res: any): Promise<void> => {
  try {
    await dbConnect();
  } catch (err: any) {
    console.error(err.message);
  }

  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const address = await getAddress(req, res);
        return address;
      } catch (err: any) {
        res.json({ success: false, data: err.message });
      }
      break;

    case "PUT":
      try {
        const address = await updateAddress(req, res);
        return address;
      } catch (err: any) {
        res.status(400).json({ success: false, data: err.message });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method}`);
      break;
  }
};

export default handler;
