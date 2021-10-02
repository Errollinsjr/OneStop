import axios from "axios";

export default {
  // check authorization status of user
  checkAuthorization: async function() {
    return await axios.post("/api/user/authorized", {withCredentials: true});
  },

};