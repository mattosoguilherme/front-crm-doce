import { ContainerS, FormS } from "./styles";

const Cadastro = () => {
  return (
    <>
      <ContainerS>
        <h1>Cadastro</h1>

        <FormS>
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
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">E-mail</label>
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
              id="floatingSelect"
              aria-label="Floating label select example"
            >
              <option selected>*Escolha o pruduto</option>
              <option value="Alelo">Alelo</option>
              <option value="Amil">Amil</option>
              <option value="EDP">EDP</option>
            </select>
            <label for="floatingSelect">Qual produto você trabalha?</label>
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

          <button type="button" className="btn btn-primary btn-lg">
            Enviar
          </button>
        </FormS>
      </ContainerS>
    </>
  );
};

export default Cadastro;
