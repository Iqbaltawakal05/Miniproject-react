import Layout from "../Components/Layout"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Home () {
    const access_token = localStorage.getItem("access_token");
    const getData = () => {
    const access_token =
      "QpwL5tke4Pnpja7X4"

    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    };

    axios
      .get(
        "http://193.203.161.17:3000/main/transaction/list-product?search&serviceName&unitType=",
        config
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      
      useEffect(() => {
          getData();
        }, []);
  };


    return (
        <Layout>
            <h1>Home</h1>
        </Layout>
    )
}

export default Home