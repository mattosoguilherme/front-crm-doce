import { Link, useParams } from "react-router-dom";
import Header from "../../components/navbar";
import { CardItemPedidoS, ContainerCadstroS, FormS, H1s } from "../styles";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../../components/loading";

const RegistroPedido = () => {
  const [cliente, setCliente] = useState([]);
  const [step, setStep] = useState(1);
  const [itens, setItens] = useState([]);
  const [loading, setLoading] = useState(false);
  const [itensSelecionados, setItensSelecionados] = useState([]);
  const [total, setTotal] = useState(0);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/user/${id}`)
      .then((res) => {
        setCliente(res.data);

        setLoading(true);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

    axios.get("/cardapio").then((res) => {
      const listItens = res.data.filter((item) => item.active === true);

      setItens(listItens);
    });
  }, [id]);

  const nextStep = (e) => {
    e.preventDefault();
    setTotal(
      itensSelecionados.reduce((acc, i) => acc + i.preco * i.quantidade, 0)
    );
    setStep(2);
  };

  const prevStep = (e) => {
    e.preventDefault();
    setStep(1);
  };

  const handleAddItem = (item, isChecked) => {
    setItensSelecionados((prev) => {
      if (isChecked) {
        // Se estiver marcado e o item ainda não foi adicionado, adiciona com quantidade 1
        if (!prev.some((i) => i.id === item.id)) {
          return [...prev, { ...item, quantidade: 1 }];
        }
      } else {
        // Se for desmarcado, remove o item da lista
        return prev.filter((i) => i.id !== item.id);
      }

      console.log(prev);

      return prev;
    });
  };

  const handleUpdateQuantidade = (item, delta) => {
    setItensSelecionados((prev) => {
      return prev.map((i) =>
        i.id === item.id
          ? { ...i, quantidade: Math.max(1, i.quantidade + delta) }
          : i
      );
    });
  };

  const handleSubimit = (e) => {
    e.preventDefault();

    const pedido = {
      user_id: id,
      itens_id: itensSelecionados,
      status: e.target.floatingSelectStatusPedido.value,
      metodo_pagamento: e.target.floatingSelectMetodo.value,
      total: Number(e.target.floatingInputPreco.value),
    };
    console.log(pedido);

    axios
      .post("/pedido", pedido)
      .then((res) => {
        alert("Pedido realizado com sucesso");
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
        alert("Erro ao realizar o pedido");
        console.log(err);
      });
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
                      {itens.map((item) => {
                        const itemSelecionado = itensSelecionados.find(
                          (i) => i.id === item.id
                        );

                        return (
                          <CardItemPedidoS key={item.id}>
                            <img
                              src="https://benditosalgado.com.br/wp-content/uploads/2022/06/Morango-Coberto-Doce-de-Leite-Branco2.jpg"
                              alt="doce png"
                            />

                            <div className="body-card-item">
                              <div className="top-line">
                                <h6>{item.titulo}</h6>
                                <span>R$ {item.preco}</span>
                              </div>

                              {itemSelecionado && (
                                <div className="quantidade-controle">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      handleUpdateQuantidade(item, -1)
                                    }
                                  >
                                    <i className="bi bi-dash-circle"></i>
                                  </button>
                                  <span>{itemSelecionado.quantidade}</span>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      handleUpdateQuantidade(item, 1)
                                    }
                                  >
                                    <i className="bi bi-plus-circle"></i>
                                  </button>
                                </div>
                              )}

                              <div>
                                <input
                                  type="checkbox"
                                  className="btn-check"
                                  id={"item-" + item.id}
                                  checked={!!itemSelecionado}
                                  onChange={(e) =>
                                    handleAddItem(item, e.target.checked)
                                  }
                                />
                                <label
                                  className="btn btn-outline-primary"
                                  htmlFor={"item-" + item.id}
                                >
                                  {itemSelecionado ? "Remover" : "Adicionar"}
                                </label>
                              </div>
                            </div>
                          </CardItemPedidoS>
                        );
                      })}
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
                    <input
                      type="text "
                      className="form-control"
                      id="floatingInputPreco"
                      placeholder="R$ 0,00"
                      value={total.toFixed(2)}
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
