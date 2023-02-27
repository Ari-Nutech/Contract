import { setAlert } from "../actions/alert";
import api from "../utils/api";

export default function useTransaction() {
  async function initiateTransaction(req: any) {
    try {
      const res = await api.post("/sda/transaction/initiateTransaction", req);
      console.log("_____________________________", res);
      return true;
    } catch (error: any) {
      if (error?.response?.data?.message) {
        setAlert(error?.response?.data?.message, "error");
      } else {
        setAlert("Server Error.", "error");
      }
      return false;
    }
  }

  return { initiateTransaction };
}
