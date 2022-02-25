import Client from "../client.js";
import { useRouter } from "vue-router";

const router = useRouter();
class Auth {
  static async registerUser(user) {
    await Client.post("/v1/auth", {
      email: user.email,
      password: user.password,
      name: user.name,
    }).then((response) => {
      localStorage.setItem("access-token", response.headers["access-token"]);
      localStorage.setItem("client", response.headers["client"]);
      localStorage.setItem("uid", response.headers["uid"]);
    });
  }

  static async loginUser(user) {
    await Client.post("v1/auth/sign_in", {
      email: user.email,
      password: user.password,
    }).then((response) => {
      localStorage.setItem("access-token", response.headers["access-token"]);
      localStorage.setItem("client", response.headers["client"]);
      localStorage.setItem("uid", response.headers["uid"]);
      return response;
    });
  }

  static async validated() {
    await Client.get("v1/auth/validate_token", {
      headers: {
        uid: localStorage.getItem("uid"),
        client: localStorage.getItem("client"),
        "access-token": localStorage.getItem("access-token"),
      },
    });
  }

  static async logoutUser() {
    try {
      const res = await Client.delete("/v1/auth/sign_out", {
        headers: {
          uid: localStorage.getItem("uid"),
          client: localStorage.getItem("client"),
          "access-token": localStorage.getItem("access-token"),
        },
      });
      localStorage.removeItem("uid");
      localStorage.removeItem("client");
      localStorage.removeItem("access_token");
      return { res, error: null };
    } catch (e) {
      console.log(e);
      return { res: null, e };
    }
  }
}

export default Auth;
