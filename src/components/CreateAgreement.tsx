import * as React from "react";
import { observer, inject } from "mobx-react";
import Store from "../models/Store";
@inject("Store")
@observer
class CreateAgreement extends React.Component<{ store: typeof Store.Store.Type }> {
  public render() {
    console.log("props", this.props);
    const onChange = this.onChange.bind(this);
    return (
      <div className="create-agreement">
        <h1>Explorer / Create Agreement</h1>
        <form className="agreement-form" onSubmit={e => this.handleSubmit(e)}>
          <label>
            Counter Party Address:
            <input type="text" placeholder="(0x...)" name="partyB" onChange={onChange} />
          </label>
          <label>
            Initial Type:
            <select onChange={onChange} name="type">
              <option selected={true} disabled={true}>
                Choose One
              </option>
              <option value="Ether">Ether</option>
              <option>Hashlock</option>
              <option>Token</option>
              <option>Object</option>
            </select>
          </label>
          <label>
            Counter Party State:
            <input type="text" placeholder="(XX)" name="balanceB" onChange={onChange} />
          </label>
          <label>
            Your State:
            <input type="text" placeholder="(XX)" name="balanceA" onChange={onChange} />
          </label>
          <div className="submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
  private onChange(event: any) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log("this.setState", this.state);
  }
  private async handleSubmit(event: any) {
    event.preventDefault();
    const s = this.state as any;
    const id = "testid2";
    const options = {
      ID: id,
      partyA: "0x3afa9e75471ef7d29d58fec49e48d17ba617bba8",
      partyB: s.partyB,
      balanceA: s.balanceA,
      balanceB: s.balanceB,
      types: [s.type]
    };
    // console.log('createAgreement options', options);
    await this.props.store.createAgreement(options);
    //const getagreement = await this.props.store
    //const Store = this.props.store;

    alert("agreement was submitted");
  }
}

export default CreateAgreement;
