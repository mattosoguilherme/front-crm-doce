import { useEffect } from "react";
import { DivInfo, FormS, ContainerCadS } from "../styles";
import axios from "axios";
import ReactInputMask from "react-input-mask";


const CadastroCliente = () => {
  useEffect(() => {});

  const HandleSubmit = (e) => {
    e.preventDefault();

    const cadastroCliente = {
      email: e.target.floatingInputEmail.value,
      nome: e.target.floatingInputNome.value,
      contato: e.target.floatingInputContato.value,
      produto: e.target.floatingSelectProduto.value,
      unidade: e.target.floatingSelectUnidade.value,
      matricula: e.target.floatingInputMatricula.value,
      aniversario: e.target.floatingInputData.value,
      password: e.target.floatingInputPassword.value,
      confirmPassword: e.target.floatingInputPasswordC.value,
    };

    console.log(cadastroCliente);

    axios
      .post("/user", cadastroCliente)
      .then((res) => {
  
        alert("Cadastro realizado com sucesso!");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        alert(err.response.data.message);
      });
  };

  return (
    <>
      <ContainerCadS>
        <DivInfo>
          <p>
            Se cadastrar na loja é super fácil e vale muito a pena! 🎉 Além de
            deixar tudo mais rápido na hora de comprar, você ainda recebe
            promoções exclusivas e cortesias de aniversário 🥳. Tudo para você
            aproveitar descontos e ficar por dentro de todas as novidades! 💥
            Não perde essa!{" "}
          </p>

          <FormS method="POST" onSubmit={HandleSubmit}>
            {/* Nome */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInputNome"
                placeholder="Nome Completo"
                required
              />
              <label for="floatingInputNome">Nome Completo</label>
            </div>

            {/* Email */}
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInputEmail"
                placeholder="name@example.com"
                required
              />
              <label for="floatingInputEmail">E-mail</label>
            </div>
            {/* Aniversário */}
            <div className="form-floating mb-3">
              <input
                type="date"
                className="form-control"
                id="floatingInputData"
                placeholder="matricula"
                required
              />
              <label for="floatingInputData">Aniversário</label>
            </div>
            {/* Matricula */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingInputMatricula"
                placeholder="matricula"
                required
              />
              <label for="floatingInputMatricula">Marticula</label>
            </div>
            {/* Produto */}
            <div className="form-floating">
              <select
                className="form-select"
                id="floatingSelectProduto"
                aria-label="Floating label select example"
                required
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
            {/* Unidade */}
            <div className="form-floating">
              <select
                className="form-select"
                id="floatingSelectUnidade"
                aria-label="Floating label select example"
                required
              >
                <option selected>*Escolha a unidade</option>
                <option value="mogi-II">Mogi II - Cesar de Souza</option>
                <option value="mogi-I">Mogi I - Mogilar</option>
              </select>
              <label for="floatingSelectUnidade">
                Qual unidade você trabalha?
              </label>
            </div>
            {/* Contato */}
            <div className="form-floating mb-3">
              <ReactInputMask
                mask={"(99) 99999-9999"}
                type="text"
                className="form-control"
                id="floatingInputContato"
                placeholder="Contato"
                required
              />
              <label for="floatingInputContato">Whatsapp</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingInputPassword"
                placeholder="matricula"
                required
              />
              <label for="floatingInputPassword">Senha</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingInputPasswordC"
                placeholder="password"
                required
              />
              <label for="floatingInputPasswordC">Confirmação de senha</label>
            </div>

            <button className="btn btn-primary btn-lg" type="submit">
              Enviar
            </button>

            {/* <Link to={"/"}>
              {" "}
              <button type="button" class="btn btn-secondary">
                Voltar
              </button>{" "}
            </Link> */}
            
          </FormS>
        </DivInfo>
      </ContainerCadS>
    </>
  );
};

export default CadastroCliente;
