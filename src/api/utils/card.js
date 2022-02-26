import Client from "../client";

class Card {
  static getAllUserCard() {
    try {
      const res = Client.get("/cards", {
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

  static createUserCard(card_title, list_id) {
    try {
      const res = Client.post(
        "/cards",
        {
          card: {
            card_title: card_title,
            list_id: list_id,
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
      return { res, e: null };
    } catch (e) {
      console.log(e);
      return { res: null, e };
    }
  }

  static destroyCard(card_id) {
    try {
      const res = Client.delete(
        `/cards/${card_id}`);
      return res;
    } catch (e) {
      console.log(e);
      return { res: null, e };
    }
  }
}

export default Card;
