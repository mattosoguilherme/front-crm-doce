import { useEffect, useState } from "react";
import CardComanda from "../../components/card/comanda";
import Header from "../../components/navbar";
import ContainerS, { ListS } from "../styles";
import Loading from "../../components/loading";
import axios from "axios";

const Comanda = () => {
  const [comandas, setComandas] = useState(); // Estado para armazenar as comandas
  const [loading, setLoading] = useState(false); // Estado para controlar o carregamento

  useEffect(() => {
    axios
      .get("/comanda")
      .then((res) => {
        setComandas(res.data); // Armazena os dados das comandas no estado
        setLoading(true); // Define o carregamento como verdadeiro
        console.log(res.data); // Exibe os dados no console para depuração
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err); // Trata erros na requisição
      });
  }, []);

  return (
    <>
      <ContainerS>
        <Header />

        {loading ? (
          <>
            <h1>
              {" "}
              pagina comandas - gerar comanda - visualizar todas as comandas
            </h1>
            <ListS>
              {comandas.map((c, index) => (
                <>
                  <CardComanda key={c.id || index} data={c} />
                </>
              ))}
            </ListS>
          </>
        ) : (
          <>
            <Loading />
          </>
        )}
      </ContainerS>
    </>
  );
};

export default Comanda;
