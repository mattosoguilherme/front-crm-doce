import ContainerS, { DivInputBuscaS, H1s, InputBuscaS, ListS } from "../styles";
import Header from "../../components/navbar";
import { useEffect, useState } from "react";
import Loading from "../../components/loading";
import axios from "axios";
import CardCliente from "../../components/card/cliente";
import { useMemo } from "react";

const Cliente = () => {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [busca, setBusca] = useState("");

  const clientesFiltrados = useMemo(() => {
    const toLowerCaseBusca = busca.toLowerCase();
    return clientes.filter((cliente) =>
      cliente.nome.toLowerCase().includes(toLowerCaseBusca)
    );
  }, [clientes, busca]);

  useEffect(() => {
    axios
      .get("/user")
      .then((response) => {
        let listaClientes = response.data;
        
        setClientes(listaClientes.sort((a, b) => a.nome.localeCompare(b.nome)));
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

      <DivInputBuscaS> 

        <input 
        placeholder="Search"
        type="text"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        />
      </DivInputBuscaS>

        {loading ? (
          <> 
           

          <ListS> 


            {clientesFiltrados.map((cliente) => ( 
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
