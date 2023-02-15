import { store } from "../store";

import { setAlert } from "../actions/alert";
import { loadUser } from "../actions/auth";
import { LOGIN_SUCCESS, LOGOUT } from "../actions/types";

import api from "../utils/api";
import useLoading from "./useLoading";

export default function useAuth() {
  const { setLoading } = useLoading();

  const signin = async (req: any) => {
    try {
      setLoading(true);
      const res = await api.post("/auth/login", req);
      await store.dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      loadUser();
      setAlert("Login Success.", "success");
      setLoading(false);
      return true;
    } catch (error: any) {
      setLoading(false);
      if (error?.response?.data?.message) {
        setAlert(error?.response?.data?.message, "error");
        if (error?.response?.data?.message === "Must Be Verified By Email") {
          return "VerifyEmail";
        }
      } else {
        setAlert("Server Error.", "error");
      }
      return false;
    }
  };

  return {
    signin,
  };
}
