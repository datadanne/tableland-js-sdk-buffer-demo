import { connect } from "@tableland/sdk";

const conn = connect({ network: "testnet", chainId: 1 });

conn.siwe();
