import api from "../utils/api";
import { setAlert } from "./alert";

import { CREATE_CARD, CARD_ERROR, GET_CARDS, DELETE_CARD } from "./types";

/*
  NOTE: we don't need a config object for axios as the
 default headers in axios are already Content-Type: application/json
 also axios stringifies and parses JSON for you, so no need for 
 JSON.stringify or JSON.parse
*/
