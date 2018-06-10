declare global {
  const Gun: any;
}

class GunService {
  public connected: boolean = false;
  private dbSalt: string = "Alice";
  constructor() {
    this.connected = false;
  }
  public connect(privateKey: string, dbSalt?: string): void {
    this.connected = true;
  }
}

const instance = new GunService();
export default instance;
