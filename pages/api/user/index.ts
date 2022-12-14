import dbConnect from "../../../utils/dbConnect";
import { addUser, getUsers } from "../../../utils/controllers";

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
        const users = await getUsers(req, res);
        return users;
      } catch (err: any) {
        res.json({ success: false, data: err.message });
      }
      break;

    case "POST":
      try {
        const user = await addUser(req, res);
        return user;
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
