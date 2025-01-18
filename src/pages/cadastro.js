import { useEffect } from "react";
import Header from "../components/navbar";
import ContainerS, { DivInfo, FormS, H1s } from "./styles";
import axios from "axios";

const Cadastro = () => {
  useEffect(() => {});

  const HandleSubmit = (e) => {
    const cadastroCliente = {
      email: e.targert.floatingInputEmail.value,
      nome: e.targert.floatingInputNome.value,
      contato: e.targert.contato.value,
      produto: e.targert.floatingSelectProduto.value,
      equipe: e.targert.equipe.value,
      unidade: e.targert.floatingSelectUnidade.value,
      matricula: e.targert.floatingInputMatricula.value,
      aniversario: e.targert.floatingInputData.value,
    };

    console.log(cadastroCliente);

    axios
    .post("/user")
  };

  return (
    <>
      <ContainerS>
        <Header />

        <DivInfo>
          <p>
            Se cadastrar na loja é super fácil e vale muito a pena! 🎉 Além de
            deixar tudo mais rápido na hora de comprar, você ainda recebe
            promoções exclusivas e cortesias de aniversário 🥳. Tudo para você
            aproveitar descontos e ficar por dentro de todas as novidades! 💥
            Não perde essa!{" "}
          </p>

          <FormS method="POST" onSubmit={HandleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInputNome"
                placeholder="Nome Completo"
              />
              <label for="floatingInputNome">Nome Completo</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInputEmail"
                placeholder="name@example.com"
              />
              <label for="floatingInputEmail">E-mail</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="date"
                className="form-control"
                id="floatingInputData"
                placeholder="matricula"
              />
              <label for="floatingInputData">Aniversário</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInputMatricula"
                placeholder="matricula"
              />
              <label for="floatingInputMatricula">Marticula</label>
            </div>

            <div className="form-floating">
              <select
                className="form-select"
                id="floatingSelectProduto"
                aria-label="Floating label select example"
              >
                <option selected>*Escolha o pruduto</option>
                <option value="Alelo">Alelo</option>
                <option value="Amil">Amil</option>
                <option value="EDP">EDP</option>
              </select>
              <label for="floatingSelectProduto">
                Qual produto você trabalha?
              </label>
            </div>

            <div className="form-floating">
              <select
                className="form-select"
                id="floatingSelectUnidade"
                aria-label="Floating label select example"
              >
                <option selected>*Escolha a unidade</option>
                <option value="mogi-II">Mogi II - Cesar de Souza</option>
                <option value="mogi-I">Mogi I - Mogilar</option>
              </select>
              <label for="floatingSelectUnidade">
                Qual unidade você trabalha?
              </label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInputContato"
                placeholder="Contato"
              />
              <label for="floatingInputContato">Whatsapp</label>
            </div>

            <button className="btn btn-primary btn-lg" type="submit">
              Enviar
            </button>
          </FormS>
        </DivInfo>
      </ContainerS>
    </>
  );
};

export default Cadastro;
