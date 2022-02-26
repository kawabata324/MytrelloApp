import Client from "../client";

class List {
  static listCreate(list_title) {
    try {
      const res = Client.post(
        "/lists",
        {
          list: {
            list_title: list_title,
          },
        },
        {
          headers: {
            uid: localStorage.getItem("uid"),
            client: localStorage.getItem("client"),
            "access-token": localStorage.getItem("access-token"),
          },
        }
      );
      return res;
    } catch (e) {
      console.log(e);
      return { res: null, e };
    }
  }
  static getLists() {
    try {
      const res = Client.get("/lists", {
        headers: {
          uid: localStorage.getItem("uid"),
          client: localStorage.getItem("client"),
          "access-token": localStorage.getItem("access-token"),
        },
      });
      return { res, e: null };
    } catch (e) {
      console.log(e);
      return { res: null, e };
    }
  }
  static removeList(list_id) {
    try {
      const res = Client.delete(`/lists/${list_id}`);
      return res;
    } catch (e) {
      console.log(e);
      return { res: null, e };
    }
  }
}

export default List;
