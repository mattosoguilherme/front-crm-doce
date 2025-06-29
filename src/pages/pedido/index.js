import { useEffect, useMemo, useState } from "react";
import Header from "../../components/navbar";
import ContainerS, { DivFormSearchS } from "../styles";
import axios from "axios";
import Loading from "../../components/loading";

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchByName, setSearchByName] = useState("");
  const [searchByStatus, setSearchByStatus] = useState("");
  const [searchByMetodo, setSearchByMetodo] = useState("");
  const [searchByData, setSearchByData] = useState("");

  useEffect(() => {
    axios
      .get("/pedido")
      .then((res) => {
        setPedidos(res.data);
        setLoading(true);
        console.log(res.data);
      })
      .catch((err) => {
        setLoading(false);
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const searchFiltered = useMemo(() => {
    const toLowerCaseSearchByName = searchByName.toLowerCase();
    const toLowerCaseSearchByStatus = searchByStatus.toLowerCase();
    const toLowerCaseSearchByMetodo = searchByMetodo.toLowerCase();
    const toLowerCaseSearchByData = searchByData.toLowerCase();

    return pedidos.filter(
      (pedido) =>
        pedido.user.nome.toLowerCase().includes(toLowerCaseSearchByName) &&
        pedido.status.toLowerCase().includes(toLowerCaseSearchByStatus) &&
        pedido.metodo_pagamento
          .toLowerCase()
          .includes(toLowerCaseSearchByMetodo) &&
        pedido.createdAt.toLowerCase().includes(toLowerCaseSearchByData)
    );
  }, [pedidos, searchByName, searchByStatus, searchByMetodo, searchByData]);

  const formatarData = (dataString) => {
    const data = new Date(dataString);
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    }).format(data);
  };

  const limparFiltros = () => {
    setSearchByName("");
    setSearchByStatus("");
    setSearchByMetodo("");
    setSearchByData("");
  };

  return (
    <>
      <ContainerS>
        <Header />

        <DivFormSearchS>
          <form>
            {/* cliente */}
            <div>
              <label for="cliente">Cliente</label>
              <input
                id="cliente"
                type="text"
                value={searchByName}
                onChange={(e) => setSearchByName(e.target.value)}
              />
            </div>
            {/* status */}
            <div>
              <label for="status">Status</label>
              <select
                id="status"
                value={searchByStatus}
                onChange={(e) => setSearchByStatus(e.target.value)}
              >
                <option value="">Todos</option>
                <option value="pendente">Pendente</option>
                <option value="pago">Pago</option>
              </select>
            </div>
            {/* metodo de pagamento */}
            <div>
              <label for="metodo">Método de pagamento</label>
              <select
                id="metodo"
                value={searchByMetodo}
                onChange={(e) => setSearchByMetodo(e.target.value)}
              >
                <option value="">Todos</option>
                <option value="cartao">Cartão</option>
                <option value="dinheiro">Dinheiro</option>
                <option value="pix">Pix</option>
              </select>
            </div>
            {/* data */}
            <div>
              <label for="data">Data</label>
              <input
                id="data"
                type="date"
                value={searchByData}
                onChange={(e) => setSearchByData(e.target.value)}
              />
            </div>
            <button className="btn-clear" type="button" onClick={limparFiltros}>
              Limpar Filtros
            </button>
          </form>
        </DivFormSearchS>

        {loading ? (
          <>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">CLIENTE</th>
                    <th scope="col">STATUS</th>
                    <th scope="col">MÉTODO</th>
                    <th scope="col">TOTAL</th>
                    <th scope="col">DATA</th>
                    <th scope="col">OPÇÕES</th>
                  </tr>
                </thead>
                <tbody>
                  {/* cada TR é uma linha na tabela */}
                  {searchFiltered?.map((p) => (
                    <>
                      <tr>
                        <th scope="row">{p.id}</th>
                        <td>{p.user.nome}</td>
                        <td>{p.status}</td>
                        <td> {p.metodo_pagamento} </td>
                        <td> R$ {p.total} </td>
                        <td> {formatarData(p.createdAt)} </td>
                        <td>
                          <i className="bi bi-caret-down-square-fill"></i>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <>
            {" "}
            <Loading />{" "}
          </>
        )}
      </ContainerS>
    </>
  );
};

export default Pedidos;
