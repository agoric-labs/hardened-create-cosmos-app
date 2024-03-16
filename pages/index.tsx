import { useState } from "react";
import { CHAIN_NAME } from "../config";
import { Layout, Wallet } from "../components";


export default function Home() {
  const [chainName, setChainName] = useState(CHAIN_NAME);

  function onChainChange(chainName?: string) {
    setChainName(chainName!);
    console.log("current chain", chainName);
  }

  return (
    <Layout>
      <Wallet chainName={chainName} onChainChange={onChainChange} />
    </Layout>
  );
}
