import ContainerS, { H1s, ListS } from "../styles";
import Header from "../../components/navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../../components/loading";
import axios from "axios";
import CardCliente from "../../components/card/cliente";

const Cliente = () => {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("/user")
      .then((response) => {
        
        setClientes(response.data);
        setLoading(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <ContainerS>
        <Header />

        <H1s> Clientes</H1s>

        {loading ? (
          <> 
          <ListS> 


            {clientes.map((cliente) => ( 
              <> 
              
              
              <CardCliente data={cliente} key={cliente.id} />
              
              </>
            ))}
          </ListS>
          
          
          
          </>
        ) : (
          <>
            <Loading />
          </>
        )}

        <p> lembra de fazer a logica de busca do video </p>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5Tq4-UgPTDs?si=3g4TX0aKwWf0aJgx"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <p>
          {" "}
          <br /> cliente / adicionar novo pedido / pegar ID e subir vinculado{" "}
          <br /> é melhor deixar pagina de cliente vinculada com função interna
          <br /> de registra de pedido para ficar mais otimizado{" "}
        </p>
      </ContainerS>
    </>
  );
};
export default Cliente;
