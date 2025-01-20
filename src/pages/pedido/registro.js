import { Link } from "react-router-dom";
import Header from "../../components/navbar";
import { ContainerCadstroS, FormS, H1s } from "../styles";
import ReactInputMask from "react-input-mask";

const RegistroPedido = () => {
  return (
    <>
      <ContainerCadstroS>
        <Header />

        <H1s>Registro de Pedido</H1s>

        <FormS>
          {/* Cliente do pedio */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInputcliente"
              placeholder="Cliente do pedio"
              disabled
            />
            <label for="floatingInputcliente">cliente</label>
          </div>

          {/* item do cardapio */}
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelectItem"
              aria-label="Floating label select example"
              required
            >
              <option selected>*Escolha o item</option>
              <option value="1">surpresa de uva</option>
              <option value="2">brigadeiro</option>={" "}
            </select>
            <label for="floatingSelectItem">Item do Pedido</label>
          </div>
          {/* preço do item */}
          <div className="form-floating mb-3">
            <ReactInputMask
              mask={"99,99"}
              type="text "
              className="form-control"
              id="floatingInputPreco"
              placeholder="R$ 0,00"
              disabled
            />
            <label for="floatingInputPreco">Preço </label>
          </div>
          {/* STATUS DO PEDIDO */}
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelectPedido"
              aria-label="Floating label select example"
              required
            >
              <option selected>*Escolha o status</option>
              <option value="pago">pago</option>
              <option value="pendente">pendente</option>
            </select>
            <label for="floatingSelectPedido">Status do Pedido</label>
          </div>


          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelectMetodo"
              aria-label="Floating label select example"
              required
            >
              <option selected>*Escolha o Forma</option>
              <option value="pix">PIX</option>
              <option value="cartão">cartão</option>
            </select>
            <label for="floatingSelectMetodo">Forma de Pagamento</label>
          </div>

          <button className="btn btn-primary " type="submit">
            Registrar
          </button>
          <Link to={"/cliente"}>
            <button className="btn btn-secondary">Voltar</button>
          </Link>
        </FormS>
      </ContainerCadstroS>
    </>
  );
};

export default RegistroPedido;
