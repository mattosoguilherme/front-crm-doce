import ReactInputMask from "react-input-mask";
import Header from "../../components/navbar";
import axios from "axios";
import { ContainerCadstroS, FormS, H1s } from "../styles";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../../components/loading";

const EditCardapio = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState({});

  useEffect(() => {
    axios
      .get("/cardapio/" + id)
      .then((response) => {
        setLoading(true);
        setItem(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemCardapio = {
      urlFoto: e.target.floatingInputURLFoto.value,
      titulo: e.target.floatingInputTitulo.value,
      preco: Number(e.target.floatingInputPreco.value),
      descricao: e.target.floatingTextareaDescricao.value,
    };

    axios
      .patch("/cardapio/" + id, itemCardapio)
      .then((res) => {
        alert("Cadastro realizado com sucesso!");

        navigate("/cardapio");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        alert(err.response.data.message);
      });
  };

  const HandleDetele = () => {
    axios
      .delete("/cardapio/" + id)
      .then((res) => {
        alert("Item excluido com sucesso!");
        navigate("/cardapio");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        alert(err.response.data.message);
      });
  };

  return (
    <>
      <ContainerCadstroS>
        <Header />

        <H1s>Edição de Item</H1s>

        {loading ? (
          <>
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body text-dark">
                    Tem certeza que deseja excluir o item?
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      FECHAR
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                      onClick={HandleDetele}
                    >
                      Excluir Item
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <FormS method="POST" onSubmit={handleSubmit}>
              <button
                className="btn btn-danger "
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                type="button"
              >
                EXCLUIR
              </button>

              {/* url foto */}
              <div className="form-floating mb-3">
                <input
                  type="url"
                  className="form-control"
                  id="floatingInputURLFoto"
                  placeholder="Foto"
                  defaultValue={item.urlFoto}
                  required
                />
                <label for="floatingInputURLFoto"> URL Foto </label>
              </div>
              {/* titulo*/}
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInputTitulo"
                  placeholder="Título"
                  defaultValue={item.titulo}
                  required
                />
                <label for="floatingInputTitulo">Título </label>
              </div>
              {/* preço*/}
              <div className="form-floating mb-3">
                <input
                  className="form-control"
                  id="floatingInputPreco"
                  placeholder="R$ 0,00"
                  defaultValue={item.preco}
                  required
                />
                <label for="floatingInputPreco">Preço </label>
              </div>
              {/* descrição*/}
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextareaDescricao"
                  defaultValue={item.descricao}
                  required
                ></textarea>
                <label for="floatingTextareaDescricao">Descrição</label>
              </div>

              <button className="btn btn-primary " type="submit">
                Cadastrar
              </button>

              <Link to={"/cardapio"}>
                <buttton className="btn btn-secondary"> Voltar </buttton>
              </Link>
            </FormS>{" "}
          </>
        ) : (
          <>
            {" "}
            <Loading />{" "}
          </>
        )}
      </ContainerCadstroS>
    </>
  );
};
export default EditCardapio;
