import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8cc8435bbb4a4fa29edd1f777969aa44",
  },
});
