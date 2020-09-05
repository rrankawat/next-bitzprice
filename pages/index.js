import Fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Prices from "../components/Prices";

const Index = (props) => (
  <Layout>
    <h1>Welcome To BitzPrice</h1>
    <Prices bpi={props.bpi} />
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`);
  const data = await res.json();

  return {
    bpi: data,
  };
};

export default Index;
