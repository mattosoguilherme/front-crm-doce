import ContainerS, { DivDashboard } from "../styles";
import Header from "../../components/navbar";
import Dashboard from "../../components/dashboard/index,js";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [comanda, setComanda] = useState();
  const [cardapio, setCardapio] = useState();
  const [pedido, setPedido] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    axios.get("/comanda").then((res) => { setComanda(res.data)}).catch((erro)=>{console.log(erro)});

    axios.get("/cardapio").then((res) => { setCardapio(res.data)}).catch((erro)=>{console.log(erro)});

    axios.get("/pedido").then((res) => { setPedido(res.data)}).catch((erro)=>{console.log(erro)});
    
    axios.get("/user").then((res) => { setUser(res.data)}).catch((erro)=>{console.log(erro)});
  }, []);

  return (
    <>
      <ContainerS>
        <Header />

        <DivDashboard>
          <Dashboard />
        </DivDashboard>
      </ContainerS>
    </>
  );
};

export default Home;
