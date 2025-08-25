import { useEffect, useState } from "react";
import { FormComandaUser } from "../../pages/styles";
import axios from "axios";

const CardComandaForUser = (props) => {
  const { data } = props;
  const { id, status, total } = data;
  const [pedido, setPedido] = useState();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`/comanda/${id}`)
      .then((res) => {
        setUser(res.data.user);
        setPedido(res.data.Pedidos);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err.message);
      });
  }, []);

    const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${day}/${month}`;
};

  return (
    <>
      <FormComandaUser>
        <h3 className="text-center">COMANDA #{id} </h3>

        {user.contato ? (
          <>
            <input
              type="text"
              className="form-control text-center"
              id="contato"
              placeholder="whatsapp"
              value={user.contato}
              readOnly
              disabled
            />
          </>
        ) : (
          <></>
        )}

        <>
          {" "}
          <div className=" status_info ">
            <div className="left">
              <span className="info">STATUS</span>
            </div>

            <div className=" right">
              <span className={status}>{status}</span>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-striped ">
              <thead className="table-light">
                <tr>
                  <th id="primeiro" scope="col">
                    Data
                  </th>
                  <th scope="col">Produto</th>
                  <th scope="col">Qtd</th>
                  <th scope="col">Valor Un.</th>
                  <th id="ultimo" scope="col">
                    Total
                  </th>
                </tr>
              </thead>

              <tbody id="tabela_comanda">
                {pedido &&
                  pedido.map((p, index) => (
                    <tr key={p.id || index}>
                      <td>{formatDate(p.createdAt)}</td>
                      <td>{p.pedidoitem[0].cardapio.titulo}</td>
                      <td>{p.pedidoitem[0].quantidade}</td>
                      <td>R$ {p.pedidoitem[0].valor_unitario}</td>
                      <td>R$ {p.total}</td>
                    </tr>
                  ))}
              </tbody>

              <tfoot>
                <tr>
                  <td colSpan="3" className="text-end">
                    Total: R$ {total}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="footer-comanda"></div>
        </>
      </FormComandaUser>
    </>
  );
};

export default CardComandaForUser;
