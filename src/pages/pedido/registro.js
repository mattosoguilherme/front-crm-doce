import { Link, useParams } from "react-router-dom";
import Header from "../../components/navbar";
import { CardItemPedidoS, ContainerCadstroS, FormS, H1s } from "../styles";
import ReactInputMask from "react-input-mask";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/loading";

const RegistroPedido = () => {
  const [cliente, setCliente] = useState([]);
  const [step, setStep] = useState(1);
  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(false);
  const [itensSelecionados, setItensSelecionados] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/user/${id}`)
      .then((res) => {
        setCliente(res.data);

        console.log(res.data);

        setLoading(true);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

    axios.get("/cardapio").then((res) => {
      const listItens = res.data.filter((item) => item.active === true);
      console.log(listItens);

      setItens(listItens);
    });
  }, []);

  const nextStep = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const prevStep = (e) => {
    e.preventDefault();
    setStep(1);
  };

  const handleAddItem = (item, delta) => {
    setItensSelecionados((prev) => {
      const existeItem = prev.find((id) => id === item.id);

      if (existeItem) {
        const novaQuantidade = existeItem.quantidade + delta;

        if (novaQuantidade < 1) {
          return prev.filter((i) => i.id !== item.id);
        } else {
          return prev.map((i) =>
            i.id === item.id ? { ...i, quantidade: novaQuantidade } : i
          );
        }
      } else if (delta > 0) {
        return [...prev, { id: item.id, preco: item.preco, quantidade: 1 }];
      }

      return prev;
    });
  };

  const handleSubimit = (e) => {
    e.preventDefault();

    const pedido = {
      user_id: id,
      items_id: itensSelecionados,
      status: e.target.floatingSelectStatusPedido.value,
      metodo_pagamento: e.target.floatingSelectMetodo.value,
      total: e.target.floatingInputPreco.value,
    };

    console.log(pedido);
  };

  return (
    <>
      {loading ? (
        <>
          <ContainerCadstroS>
            <Header />

            <H1s>Registro de Pedido</H1s>

            <FormS method="POST" onSubmit={handleSubimit}>
              {step === 1 ? (
                <>
                  <h2> Selecione os itens</h2>

                  {/* Cliente do pedio */}
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInputNome"
                      placeholder="Nome Completo"
                      disabled
                    />
                    <label for="floatingInputNome">{cliente.nome}</label>
                  </div>

                  {/* item do cardapio */}

                  {itens.length > 0 ? (
                    <>
                      {itens.map((item) => (
                        <CardItemPedidoS key={item.id}>
                          <img src="https://benditosalgado.com.br/wp-content/uploads/2022/06/Morango-Coberto-Doce-de-Leite-Branco2.jpg" />

                          <div className="body-card-item">
                            <div className="top-line">
                              <h6>{item.titulo}</h6>
                              <span>R$ {item.preco}</span>
                            </div>

                            <div className="quantidade-controle">
                              <button type="button">
                                {" "}
                                <i className="bi bi-dash-circle"></i>
                              </button>
                              <span>0</span>
                              <button type="button">
                                {" "}
                                <i className="bi bi-plus-circle"></i>
                              </button>
                            </div>

                            <div>
                              {" "}
                              <input
                                type="checkbox"
                                className="btn-check"
                                id={"item-" + item.id}
                                checked={itensSelecionados.includes(item.id)}
                                onChange={() => handleAddItem(item.id)}
                              />
                              <label
                                className="btn btn-outline-primary"
                                for={"item-" + item.id}
                                key={item.id}
                              >
                                adicionar
                              </label>
                            </div>
                          </div>
                        </CardItemPedidoS>
                      ))}
                    </>
                  ) : (
                    <> </>
                  )}
                  <button className="prox" type="button" onClick={nextStep}>
                    <i className="bi bi-arrow-right-square-fill"></i>
                  </button>
                </>
              ) : (
                <>
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
                      id="floatingSelectStatusPedido"
                      aria-label="Floating label select example"
                      required
                    >
                      <option selected>*Escolha o status</option>
                      <option value="pago">pago</option>
                      <option value="pendente">pendente</option>
                    </select>
                    <label for="floatingSelectStatusPedido">
                      Status do Pedido
                    </label>
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

                  <button className="end " onClick={prevStep}>
                    <i className="bi bi-arrow-left-square-fill"></i>
                  </button>

                  <button className="btn btn-primary " type="submit">
                    fazer pedido
                  </button>
                </>
              )}

              <Link to={"/cliente"}>
                <button className="btn btn-secondary">Voltar</button>
              </Link>
            </FormS>
          </ContainerCadstroS>
        </>
      ) : (
        <>
          {" "}
          <Loading />{" "}
        </>
      )}
    </>
  );
};

export default RegistroPedido;
