import { default as Layer2lib, BrowserStorageProxy, Agreement } from "js-layer2lib";
import * as localforage from "localforage";
// import { isAwaitExpression } from "babel-types";

let l2: Layer2lib | null = null;

export type Agreement = Agreement;
class Layer2Service {
  public connected: boolean = false;
  private dbSalt: string = "Alice";
  constructor() {
    this.connected = false;
  }
  public connect(privateKey: string, dbSalt?: string): void {
    if (l2 !== null) return; // already connected
    this.dbSalt = dbSalt ? dbSalt : "alice";

    const localstore = localforage.createInstance({
      driver: localforage.INDEXEDDB,
      name: "channel-explorer",
      version: 1.0,
      size: 4980736,
      storeName: "Store",
      description: "Stores data for layer2lib"
    });
    const options = {
      db: new BrowserStorageProxy(localstore),
      privateKey
    };
    l2 = new Layer2lib("http://127.0.0.1:8545", options);
    l2!.initGSC({});
    this.connected = true;
  }

  public async getBalance(mainnetAccount?: string): Promise<number> {
    // TODO remove, for testing
    mainnetAccount = mainnetAccount || "0x7ea92dBce5387f8fF480Fe5D557aBd4C7B09054f";
    // aysnc test using FLOW and a generator for an operation
    const bal: string = await l2!.getMainnetBalance(mainnetAccount);
    return Number.parseFloat(bal);
  }

  public async getAgreement(agreementId: string): Promise<Agreement> {
    const agreementid = "testid";
    const entryID = agreementid + this.dbSalt;
    console.log("agreementId", entryID);
    const agreement: Agreement = await l2!.getGSCAgreement(entryID);
    console.log("agreement", agreement);
    return agreement;
  }

  public async createAgreement(agreementParams: any): Promise<Agreement> {
    // const id = agreementParams.ID;
    agreementParams.dbSalt = this.dbSalt; // replace using salt from indexeddb
    agreementParams.balanceA = l2!.web3.toWei(0.0001, "ether");
    agreementParams.balanceB = l2!.web3.toWei(0.0001, "ether");
    console.log("createAgreement options", JSON.stringify(agreementParams));
    // balanceA

    await l2!.createGSCAgreement({ ...agreementParams }); // copy object

    // const entryID = agreementParams.ID + agreementParams.dbSalt;
    const agreement = this.getAgreement(agreementParams.ID);
    console.log("agreement saved and fetched", agreement);

    // now test closing contract
    /*
    const updateState = {
      isClose: 1
    };

    const r = yield l2!.gsc.initiateUpdateChannelState(entryID, updateState, false);
    console.log("r", r);
    */
    return agreement;
  }

  public initateCloseAgreement(agreementParams: any): void {
    return;
  }
}

const instance = new Layer2Service();
export default instance;
