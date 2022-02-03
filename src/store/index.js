import { defineStore } from "pinia";

const savedLists = localStorage.getItem("trello-lists");
const savedID = localStorage.getItem("countID")

export const useStore = defineStore("store", {
  //Stateには初期値を返す関数を定義
  state: () => {
    return {
      lists: savedLists ? JSON.parse(savedLists) : [],
      countID: savedID ? JSON.parse(savedID) : 0
    };
  },
  //gettersはstate及び他の getterへのアクセス可能
  //getterは全てcomputed扱いになるため、引数に応じて結果を差し替える場合は関数を戻す
  getters: {
    totalCardCounts(state) {
      let count = 0;
      for (const element of state.lists) {
        count += element.cards.length;
      }
      return count;
    },
  },
  //mutationが存在しないためStateの更新はすべてactionsで行う
  actions: {
    addList(title) {
      this.lists.push({ title: title, cards: [] });
      localStorage.setItem("trello-lists", JSON.stringify(this.lists));
    },
    removeList(index) {
      this.lists.splice(index, 1);
      localStorage.setItem("trello-lists", JSON.stringify(this.lists));
    },
    addCardToList(body, contents, listIndex) {
      this.countID++;
      this.lists[listIndex].cards.push({
        id: this.countID,
        body: body,
        contents: contents,
      });
      localStorage.setItem("countID",JSON.stringify(this.countID))
      localStorage.setItem("trello-lists", JSON.stringify(this.lists));
    },
    removeCardFromList(cardIndex, listIndex) {
      this.lists[listIndex].cards.splice(cardIndex, 1);
      localStorage.setItem("trello-lists", JSON.stringify(this.lists));
    },
    updateLists(lists) {
      this.lists = lists;
      localStorage.setItem("trello-lists", JSON.stringify(this.lists));
    },
    editCard(listIndex, cardIndex, body, contents) {
      this.lists[listIndex].cards[cardIndex].body = body;
      this.lists[listIndex].cards[cardIndex].contents = contents;
      localStorage.setItem("trello-lists", JSON.stringify(this.lists));
    },
    searchListFromListIndex(listIndex) {
      return this.lists[listIndex];
    },
  },
});
