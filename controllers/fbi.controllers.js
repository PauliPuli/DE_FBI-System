export const home= async(req, res) => {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  };
import path from "path";
const __dirname = import.meta.dirname;