import axios from "axios";
import CardComanda from "../../components/card/comanda";
import Header from "../../components/navbar";
import ContainerS, { ListS } from "../styles";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/loading";

const ViewComanda = () => {
  const { id } = useParams(); // Pega o ID da URL
  const [user, setUser] = useState({}); // Estado para armazenar os dados da comanda
  const [loading, setLoading] = useState(false); // Estado para controlar o carregamento
  const navigate = useNavigate(); // Hook para navegação

  useEffect(() => {
    axios
      .get(`/user/${id}`)
      .then((res) => {
        setUser(res.data);
        setLoading(true);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [id]); // Adiciona o ID como dependência do useEffect
  const backCliente = () => {
    navigate("/cliente");
  }; // Função para voltar à página de clientes
  return (
    <>
      <ContainerS>
        <Header />

        <button className="btn btn-primary  " onClick={backCliente}>
          VOLTAR CLIENTES
        </button>

        {loading ? (
          <>
            <ListS>
              {user.Comanda.map((c, index) => (
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

export default ViewComanda;
