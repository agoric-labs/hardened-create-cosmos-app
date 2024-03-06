import { useState } from "react";
import { Wallet } from "@/components";
import Layout from '@/components/root/Layout'
import { CHAIN_NAME } from "@/config";

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
