import axios from "axios";

//インスタンスを作成する、通信を行うAPIのURLは変化しないので引数としてbaseURLをとる

export default axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE,
});

