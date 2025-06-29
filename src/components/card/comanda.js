import { useEffect, useState } from "react";
import { FormComanda } from "../../pages/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CardComanda = (props) => {
  const { data, key } = props;
  const { id, nome_cliente, status, saldo_pendente, saldo_quitado, total } =
    data;
  const [pedido, setPedido] = useState();
  const [user, setUser] = useState({});
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();

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

  const handleSendToClient = () => {
    // Implementar a lógica para enviar a comanda para o cliente

    const msg = `
    🌟 Olá! Sou a Maju, assistente da loja. 😊  
  
    👤 *${nome_cliente}*, \n espero que esteja bem!  
    Me perdoe pelo horário, mas estou passando para lembrar sobre o pagamento da sua *comanda de maio*.  
  
    📋 *COMANDA DE PEDIDO* 📋  
  
    📦 *Pedidos:*  
    ${pedido
      .map(
        (p) =>
          `➡️ ${p.pedidoitem[0].quantidade}x ${p.pedidoitem[0].cardapio.titulo} - R$ ${p.pedidoitem[0].valor_unitario}`
      )
      .join("\n")}  
  
    💰 *Total: R$ ${total}*  
  
    🔹 Para facilitar, você pode fazer o pagamento via *Pix*:  
    💳 *Chave Pix (Nubank): 11999241855*  
  
    📩 Assim que realizar o pagamento, por gentileza, envie o comprovante para agilizar a confirmação.  
  
    Obrigado pela preferência! Qualquer dúvida, estou por aqui. 😊🍬  
  
    📲 *Fique por dentro das novidades e promoções!*  
    👉 Siga a gente no Instagram: [@docinhostialulu_](https://www.instagram.com/docinhostialulu_?igsh=MW1tNDNjODdqeXp3Mg==) 🍭✨  
    👉 Entre no nosso grupo do WhatsApp e receba ofertas exclusivas: [Clique aqui](https://chat.whatsapp.com/BvgnLYXjYaR8ek68dMeGvK) 💬🎁  
  `;
    axios
      .post("/whatsapp", {
        telefone: user.contato,
        msg: msg,
        id_comanda: Number(id),
      })
      .then((res) => {
        alert("Mensagem enviada com sucesso!");
      })
      .catch((err) => {
        console.error("Erro ao enviar mensagem:", err);
      });
  };

  const handleEditTrue = () => {
    setEdit(true);
  };

  const handleEditFalse = () => {
    setEdit(false);
  };

  const handleComandaEdit = async (e) => {
    const comandaObj = {
      id: id,
      status: e.target.status.value,
      saldo_pendente: Number(e.target.total.value),
      saldo_quitado: Number(e.target.saldo_quitado.value),
    };

    await axios.patch(`/comanda/${id}`, comandaObj).then((res) => {
      alert("Comanda editada com sucesso!");
      setEdit(false);
    });
  };

  return (
    <>
      <FormComanda onSubmit={handleComandaEdit}>
        <h3 className="text-center">COMANDA #{id} </h3>
        <input
          type="text"
          className="form-control text-center"
          id="nome_cliente"
          placeholder="nome do cliente"
          value={nome_cliente}
          readOnly
          disabled
        />
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
        {edit ? (
          <>
            <label for="status">STATUS</label>
            <select id="status" className="form-control text-center">
              <option value={status} selected disabled>
                {status}
              </option>

              <option value="PENDENTE">PENDENTE</option>
              <option value="PAGO">PAGO</option>
              <option value="PARCELADO"> PARCELADO</option>
              <option value="ENVIADA"> ENVIADA</option>
            </select>

            <label for="total">SALDO PENDENTE</label>
            <input
              type="text"
              className="form-control text-center"
              id="total"
              placeholder="saldo pendente"
              defaultValue={total}
            />

            <label for="saldo_quitado">SALDO QUITADO</label>
            <input
              type="text"
              className="form-control text-center"
              id="saldo_quitado"
              placeholder="saldo quitado"
              defaultValue={saldo_quitado}
            />

            <div className="footer-comanda">
              <button type="submit" className="btn btn-sm btn-primary">
                SALVAR
              </button>

              <button
                onClick={handleEditFalse}
                className="btn btn-md btn-secondary"
              >
                VOLTAR
              </button>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className=" status_info ">
              <div className="left">
                {" "}
                <span className="centro">STATUS</span>
                <span className="centro"> PENDENTE</span>
                <span className="centro"> QUITADO</span>{" "}
              </div>

              <div className=" right">
                <span className={status}>{status}</span>
                <span className="status_pagamento">R$ {total}</span>
                <span className="status_pagamento">R$ {saldo_quitado}</span>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-striped ">
                <thead className="table-light">
                  <tr>
                    <th id="primeiro" scope="col">
                      Produto
                    </th>
                    <th scope="col">Quantidade</th>
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
            <div className="footer-comanda">
              <button
                className="btn btn-sm btn-primary"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                ENVIAR PARA CLIENTE
              </button>

              <button
                onClick={handleEditTrue}
                className="btn btn-sm btn-secondary"
              >
                EDITAR
              </button>
            </div>
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-sm">
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    TEM CERTEZA QUE DESEJA ENVIAR A COMANDA PARA O CLIENTE?
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      VOLTAR
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                      onClick={handleSendToClient}
                    >
                      ENVIAR
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </FormComanda>

      
    </>
  );
};

export default CardComanda;
