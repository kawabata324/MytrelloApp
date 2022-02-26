import Client from "../client";

class Test{
  static async test(){
    try{
      const res = await Client.get('/test',{
      headers: {
        uid: localStorage.getItem("uid"),
        client: localStorage.getItem("client"),
        "access-token": localStorage.getItem("access-token"),
      },
    })
    console.log(res)
      return res
    }catch(e){
      console.log(e)
      return { res: null, error}
    }
  }
}

export default Test
