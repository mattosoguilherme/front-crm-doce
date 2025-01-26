import { Link } from "react-router-dom";
import Header from "../../components/navbar";
import ContainerS, { ListCardapio } from "../styles";
import CardCardapio from "../../components/card/itemCardapio";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/loading";

const Cardapio = () => {
  const [cardapio, setCardapio] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("/cardapio")
      .then((response) => {
        console.log(response.data);
        setCardapio(response.data);
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

        <Link to={"/cardapio/cadastro"}>
          <button className="btn btn-primary " type="button">
            Adicionar Item
          </button>
        </Link>

        {loading ? (
          <ListCardapio>
            {cardapio.map((item) => (
              <CardCardapio data={item} key={item.id} />
            ))}
          </ListCardapio>
        ) : (
          <>
            <Loading />
          </>
        )}
      </ContainerS>
    </>
  );
};

export default Cardapio;
