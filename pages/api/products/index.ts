import dbConnect from "../../../utils/dbConnect";
import { addProduct, getProducts } from "../../../utils/controllers";
// import path from "path";
// import multer from "multer";

const handler = async (req: any, res: any): Promise<void> => {
  try {
    await dbConnect();
  } catch (err: any) {
    console.error(err.message);
  }

  const { method } = req;

  // const storage = multer.diskStorage({
  //   destination: (req, file, cb) => {
  //     cb(null, "/public/uploads/");
  //   },
  //   filename: (req, file, cb) => {
  //     const ext = path.extname(file.originalname);
  //     cb(null, ext);
  //   },
  // });

  // const upload = multer({
  //   storage: storage,
  //   fileFilter: (req, file, callback) => {
  //     if (file.mimetype === "image/png" || file.mimetype === "image/jpg") {
  //       callback(null, true);
  //     } else {
  //       alert("Only JPG or PNG file type supported.");
  //       callback(null, false);
  //     }
  //   },
  //   limits: {
  //     fileSize: 1024 * 1024 * 2,
  //   },
  // });

  switch (method) {
    case "GET":
      try {
        const products = await getProducts(req, res);
        return products;
      } catch (err: any) {
        res.status(400).json({ success: false, data: err.message });
      }
      break;

    case "POST":
      try {
        const product = await addProduct(req, res);
        return product;
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