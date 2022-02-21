import Client from "../client.js";

class Auth {
  static async registerUser(user) {
    await Client.post("/v1/auth", {
      email: user.email,
      password: user.password,
      name: user.name,
    })
      .then((response) => {
        console.log(response);
        localStorage.setItem("access-token", response.headers["access-token"]);
        localStorage.setItem("client", response.headers["client"])
        localStorage.setItem("uid", response.headers["uid"])
      })
      .catch((e) => {
        console.log(e);
      });
  }
}

export default Auth;
