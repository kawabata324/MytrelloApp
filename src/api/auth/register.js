import Client from "../client.js";

class Auth {
  static async registerUser(user) {
    await Client.post("/v1/auth", {
      email: user.email,
      password: user.password,
      name: user.name,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }
}

export default Auth;
