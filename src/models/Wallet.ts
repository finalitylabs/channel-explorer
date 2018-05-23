import { flow, types } from "mobx-state-tree";
import { default as Layer2lib, BrowserStorageProxy } from "js-layer2lib";
import * as localforage from "localforage";

let l2: Layer2lib | null = null;
//let localstore: LocalForage | null = null;

const Transation = types.model({
  from_id: types.string,
  from_type: types.string,
  amount: types.number,
  to_id: types.string,
  to_type: types.string
});

const Wallet = types
  .model({
    balance: types.number,
    transactions: types.array(Transation),
    connected: false
  })
  .views(self => {
    return {
      getAgreement: flow(function* getAgreement(agreementId: string) {
        const dbSalt = "Alice";
        const agreementid = "testid";
        const entryID = agreementid + dbSalt;
        console.log("agreementId", entryID);
        const agreement: string = yield l2!.getGSCAgreement(entryID);
        console.log("agreement", agreement);
        return agreement;
      })
    };
  })
  .actions(self => {
    return {
      connect() {
        const localstore = localforage.createInstance({
          driver: localforage.INDEXEDDB,
          name: "channel-explorer",
          version: 1.0,
          size: 4980736,
          storeName: "Wallet",
          description: "Stores data for layer2lib"
        });
        const options = {
          db: new BrowserStorageProxy(localstore),
          privateKey: "KEY"
        };
        l2 = new Layer2lib("http://127.0.0.1:8545", options);
        l2!.initGSC({});
        self.connected = true;
      },
      // The typeof operator belo is the important one: this is how you interact with types introduced
      // by mobx-state-tree
      transact: flow(function* transact(todo: typeof Transation.Type) {
        // aysnc test using FLOW and a generator for an operation
        const r = yield fetch("https://api.github.com");
        const b = yield r.json();
        self.balance = (b.current_user_url + "").charCodeAt(0);
      }),

      getBalance: flow(function* getBalance() {
        // aysnc test using FLOW and a generator for an operation
        const bal: string = yield l2!.getMainnetBalance("0x7ea92dBce5387f8fF480Fe5D557aBd4C7B09054f");
        self.balance = Number.parseFloat(bal);
        console.log("bal", bal);
      }),

      createAgreement: flow(function* createAgreement(agreementParams: any) {
        console.log("createAgreement options", JSON.stringify(agreementParams));

        // const id = agreementParams.ID;
        agreementParams.dbSalt = "Alice"; // replace using salt from indexeddb
        yield l2!.createGSCAgreement({ ...agreementParams }); // copy object
        // const agreement: string = yield l2!.getGSCAgreement(id);
        // console.log("agreement fetched", agreement);
      }),

      _getAgreement: flow(function* getAgreement(agreementId: string) {
        const dbSalt = "Alice";
        const agreementid = "testid";
        const entryID = agreementid + dbSalt;
        console.log("agreementId", entryID);
        const agreement: string = yield l2!.getGSCAgreement(entryID);
        console.log("agreement", agreement);
      })
    };
  });

export default { Wallet, Transation };
