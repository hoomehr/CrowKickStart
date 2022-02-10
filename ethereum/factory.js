//any time we want to interact with a contract we should give it the contract interface
import web3 from "./web3";

import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x9cE335DBa5D9f45C88358874C7171d154B912C64"
);

export default instance;
