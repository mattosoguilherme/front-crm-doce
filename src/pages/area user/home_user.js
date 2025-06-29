import { useEffect, useState } from "react";
import HeaderUser from "../../components/navbar_user";
import ContainerS from "../styles";
import Loading from "../../components/loading";
import axios from "axios";
import CardComandaForUser from "../../components/card/comandaForUser";

const HomeUser = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    axios
      .get("/auth", config)
      .then((res) => {
        setLoading(false);
        setUser(res.data);

        console.log(res.data);
      })
      .catch((err) => {
        setLoading(true);
        console.error("ops! ocorreu um erro" + err);
      });
  }, [loading]);

  return (
    <>
      <ContainerS>
        <HeaderUser />

        {loading ? (
          <Loading />
        ) : (
          <div>
            <h1>Olá, {user?.nome}!</h1>

            <div className="section">
              <button className="btn btn-primary btn-sm disable"> FAZER PEDIDO</button>
            </div>

            {user?.Comanda.map((c, index) => (
              <>
                <CardComandaForUser key={c.id || index} data={c} />
              </>
            ))}

            <div className="section-buttons">
              <button className="btn btn-primary btn-lg disable"> PAGAR</button>
              <a href="https://wa.me/5511999241855">
                <button className="btn btn-primary btn-lg">
                  ENTRAR EM CONTATO
                </button>
              </a>
            </div>
          </div>
        )}
      </ContainerS>
    </>
  );
};

export default HomeUser;
