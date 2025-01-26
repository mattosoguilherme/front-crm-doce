import ReactInputMask from "react-input-mask";
import Header from "../../components/navbar";
import axios from "axios";
import { ContainerCadstroS, FormS, H1s } from "../styles";
import { Link } from "react-router-dom";

const CadastroCardapio = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const itemCardapio = {
      urlFoto: e.target.floatingInputURLFoto.value,
      titulo: e.target.floatingInputTitulo.value,
      preco: Number(e.target.floatingInputPreco.value),
      descricao: e.target.floatingTextareaDescricao.value,
    };

    axios
      .post("/cardapio", itemCardapio)
      .then((res) => {
        console.log(res);
        console.log(itemCardapio);
        alert("Cadastro realizado com sucesso!");
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

        <H1s>Registro de Item</H1s>

        <FormS method="POST" onSubmit={handleSubmit}>
          {/* url foto */}
          <div className="form-floating mb-3">
            <input
              type="url"
              className="form-control"
              id="floatingInputURLFoto"
              placeholder="Foto"
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
              required
            />
            <label for="floatingInputTitulo">Título </label>
          </div>
          {/* preço*/}
          <div className="form-floating mb-3">
            <ReactInputMask
              mask={"99.99"}
              type="text"
              className="form-control"
              id="floatingInputPreco"
              placeholder="R$ 0,00"
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
        </FormS>
      </ContainerCadstroS>
    </>
  );
};
export default CadastroCardapio;
