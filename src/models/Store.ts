import { flow, types } from "mobx-state-tree";
import { default as l2, Agreement } from "../services/Layer2Service";

//let l2: Layer2Service | null = null;
//let localstore: LocalForage | null = null;

const Transation = types.model({
  from_id: types.string,
  from_type: types.string,
  amount: types.number,
  to_id: types.string,
  to_type: types.string
});

// TODO: move into state?
let prevPage: string = "";
let prevSubpage: string = "";

const Store = types
  .model({
    balance: types.number,
    transactions: types.array(Transation),
    connected: false,
    page: "ExplorerMain",
    subpage: ""
  })
  .views(self => {
    return {};
  })
  .actions(self => {
    return {
      setPage(page: string, subpage: string): void {
        console.log("changing page to ", page, ":", subpage);
        console.log("page from ", prevPage, ":", prevSubpage);
        prevPage = self.page;
        prevSubpage = self.subpage;
        self.page = page;
        self.subpage = subpage;
      },
      // The typeof operator belo is the important one: this is how you interact with types introduced
      // by mobx-state-tree
      _transact: flow(function* transact(todo: typeof Transation.Type) {
        // aysnc test using FLOW and a generator for an operation
        const r = yield fetch("https://api.github.com");
        const b = yield r.json();
        self.balance = (b.current_user_url + "").charCodeAt(0);
      }),

      createAgreement: flow(function* createAgreement(agreementParams: Agreement) {
        return l2.createAgreement(agreementParams);
      })
    };
  });

export default { Store, Transation };
