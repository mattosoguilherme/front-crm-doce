import styled from "styled-components";

const ContainerS = styled.main`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  background-color: #f2e5bd;
  flex-direction: column;
  flex: 1;

  @media (max-width: 420px) {
    background-color: #db496e;
    color: white;
    height: 100%;
  }

  .form-check {
    margim: 0;
    background-color: back !important;
    width: 100%;
  }

  input {
    width: 2.5rem;
    height: 1.5rem;
  }

  .preco {
    font-size: 1rem;
  }

  .section {
    width: 100%;
    display: flex;
    justify-content: start;
    margin: 1rem 0 1rem 0;
    padding: 0 1rem;
  }
  .section button {
    width: 10rem;
    height: 3rem;
    font-size: 1.2rem;
    background-color: #db496e;
    color: white;
    border: none;
    border-radius: 0.3rem;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.56);
    transition: background-color 0.3s ease;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    margin-right: 1rem;
    margin-bottom: 1rem;
    @media (max-width: 420px) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 0.5rem;
    }
  }

  .section-buttons {
    width: 100%;
    height: 10rem;
    display: flex;
    padding:1rem;
    flex-direction: column;
  
    justify-content: space-evenly;
  }

  .section-buttons button {
    width: 100%;
    height: 3rem;
    font-size: 1.2rem;
    background-color: #db496e;
    color: white;
    border: none;
    border-radius: 0.3rem;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.56);
    transition: background-color 0.3s ease;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
  }

  a{
  text-decoration:none;
  
  }
`;

export const ContainerHomeS = styled.main`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  width: 100%;
  height: 100vh;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  background-color: #f2e5bd;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 420px) {
    background-color: #db496e;
    color: white;
    height: 100vh;
  }

  .logo {
    margin-bottom: 2rem;
  }
`;

export const ContainerCadstroS = styled.main`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  width: 100%;
  height: 100vh;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  background-color: #f2e5bd;
  flex-direction: column;

  @media (max-width: 420px) {
    background-color: #db496e;
    color: white;
    height: 130vh;
  }

  .logo {
    margin-bottom: 2rem;
  }
`;

export const ContainerCadS = styled.main`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  width: 100%;
  height: 100vh;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  background-color: #f2e5bd;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 430px) {
    background-color: #db496e;
    color: white;
    height: 100%;
  }

  .logo {
    margin-bottom: 2rem;
  }
`;

export const FormS = styled.form`
  background-color: #db496e;
  display: flex;
  flex-direction: column;
  width: 25rem;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.56);

  align-self: center;
  text-align: center;

  @media (max-width: 420px) {
    background-color: transparent;
    width: 100%;
    placeholder-color: black;
  }

  label {
    color: black;
  }

  input,
  textarea {
    margin-bottom: 0.8rem;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem;
  }

  select {
    margin-bottom: 1.5rem;
  }

  button {
    margin-bottom: 1rem;
  }

  .prox {
    background-color: none;
    border: none;
    padding: 0.2rem 0.2rem 0.2rem 0.2rem;
    width: 4rem;
    align-self: end;
    color: #db496e;
    border-radius: 5px;
  }
  .end {
    background-color: none;
    border: none;
    padding: 0.2rem 0.2rem 0.2rem 0.2rem;
    width: 4rem;
    align-self: start;
    color: #db496e;
    border-radius: 5px;
  }

  a {
    color: rgb(241, 241, 241);
  }
`;

export const H1s = styled.h1`
  align-self: center;
`;

export const DivInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-around;

  @media (max-width: 420px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  p {
    align-self: center;
    margin-right: 3rem;
    margin-top: 3rem;
    width: 38rem;
    text-align: center;
    background-color: #f29bab;
    padding: 1rem;
    border-radius: 1rem;
    opacity: 0.8;

    @media (max-width: 420px) {
      width: 100%;
      align-self: center;
      margin-right: 0;
      color: black;
      background-color: #f2c6ac;
    }
  }
`;

export const ListS = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const CardS = styled.div`
  margin: 1rem !important ;
  width: 14rem;
  background-color: #f29bab;

  @media (max-width: 420px) {
    margim: 1rem !important ;
    width: 10rem;
    font-size: 0.3rem;
  }

  .card-body {
    padding: 0.5rem !important;
  }

  .card-body button {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    width: 8rem;
    height: 1rem;
    font-size: 0.6rem;
    margin-bottom: 0.2rem;
  }
  a {
    text-decoration: none;
  }

  img {
    width: 100%;
  }

  .btn-edit {
    background-color: none;
    border: none;
    padding: 0;
    width: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    border-radius: 5px;

    @media (max-width: 420px) {
      width: 1rem;
      height: 1rem;
    }
  }

  .btn-edit i {
    @media (max-width: 420px) {
      font-size: 0.8rem;
    }
  }
`;

export const CardItemPedidoS = styled.div`
  background-color: white;
  display: flex;
  margin-bottom: 2rem;
  border-radius: 0.3rem;
  height: 7rem;

  @media (max-width: 420px) {
    color: black;
  }

  img {
    width: 30%;
    border-radius: 0.3rem 0 0 0.3rem;
  }

  .body-card-item {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    padding: 0.1rem 0.1rem 0.1rem 0.1rem;
  }

  .body-card-item label {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    text-align: center;
    aling-self: center;
    width: 8rem;
    height: 2rem;
    padding: 0;
  }

  .top-line {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .top-line h6 {
    margin-top: 0.3rem;
    margin-left: 0.5rem;
  }

  .top-line span {
    background-color: #17a63b;
    padding: 0.2rem;
    border-radius: 0.3rem;
  }

  .quantidade-controle {
    display: flex;
    justify-content: center;
    height: 2rem;
    width: 100%;
    justify-content: space-evenly;
  }

  .quantidade-controle button {
    background-color: none;
    border: none;
  }

  .quantidade-controle button i {
    font-size: 1.5rem;
  }

  .quantidade-controle span {
    display: flex;
    justify-content: center;
    align-items: end;
    font-size: 1.2rem;
  }
`;

export const DivInputBuscaS = styled.div`
  display: flex;
  justify-content: center;

  input {
    width: 90%;
    height: 3rem;
    padding: 0.5rem;
    border-radius: 0.3rem;
    border: none;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
`;

export const DivFormSearchS = styled.div`
  width: 100%;
  background-color: rgb(252, 132, 198);
  padding: 0.9rem;
  border-radius: 0.8rem;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2rem;

  form {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
  form div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  form div input,
  select {
    width: 100%;
    height: 2.2rem;
    padding: 0.5rem;
    border-radius: 0.3rem;
    border: none;
  }

  .btn-clear {
    height: 2.5rem;
    padding: 0.5rem;
    align-self: end;
    border-radius: 0.3rem;
    text-align: center;
    width: 15rem;
    background-color: #db496e;
    color: white;
  }
`;

export const FormComanda = styled.form`
  width: 30rem;
  font-size: 0.8rem;
  background-color: #db496e;
  padding: 1rem;
  border-radius: 10px;
  border: 1.5px solid rgb(255, 252, 252);
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.49);
  margin-bottom: 2rem;

  label {
    font-size: 1rem;
    background-color: ;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed; /* ✅ Garante alinhamento das colunas */
    margin-bottom: 1rem;
  }

  thead,
  tfoot {
    display: table;
    width: 100%;
    table-layout: fixed;
  }

  tbody {
    display: block;
    width: 100%;
    max-height: 10rem;
    overflow-y: auto;
  }

  th,
  td {
    width: 1%; /* ✅ Mesma largura para alinhar */
    padding: 0.2rem;
    text-align: center;
    box-sizing: border-box; /* ✅ Evita estouro da largura */
  }

  th {
    font-weight: bold;
    background-color: #636773;
    border: none;
    font-weight: bold;
  }
  td {
    background-color: #f2dcd8;
  }

  #primeiro {
    border-radius: 0.3rem 0 0 0;
  }
  #ultimo {
    border-radius: 0 0.3rem 0 0;
  }

  tfoot tr td {
    font-weight: bold;
    background-color: #636773;
    border: none;
    border-radius: 0 0 0.3rem 0.3rem;
    padding: 0 2rem 0 0;
    font-size: 1.1rem;
  }
  tfoot tr td:nth-child(2) {
    text-align: center;
  }

  input,
  select {
    font-size: 0.8rem;
    width: 100%;
    height: 1.5rem;
    padding: 0.5rem;
    border-radius: 0.3rem;
    border: none;
    margin-bottom: 1rem;
  }

  .PENDENTE {
    background-color: rgb(255, 230, 7);
    color: black;
    border-radius: 0.3rem;
    text-align: center;
    font-size: 0.8rem;
    padding: 0.2rem 1rem 0.2rem 1rem;
  }
  .PAGO {
    background-color: #4dfaa9;
    color: black;
    border-radius: 0.3rem;
    padding: 0.2rem 1rem 0.2rem 1rem;
    height: 1.5rem;
    width: 30%;
    text-align: center;
  }

  .status_info {
    display: flex;
    height: 5rem;
    padding: 0.5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    justify-content: space-between;
  }
  .left,
  .right {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .right .status_pagamento {
    background-color: rgb(255, 255, 255);
    border-radius: 0.3rem;
    border: 1px solid #636773;
    height: 1.4rem;
    align-self: center;
    text-align: center;
    width: 30%;
  }

  .centro {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #636773;
    padding: 0.2rem 2rem 0.2rem 2rem;
    border-radius: 0.3rem;
    color: white;
    font-size: 0.8rem;
    width: 30%;
    height: 1.5rem;
  }

  .footer-comanda {
    display: flex;
    justify-content: space-evenly;
  }

  .edit-button {
    width: 7rem;
  }

  select {
    padding: 0;
  }
`;

export const FormComandaUser = styled.form`
  width: 30rem;
  font-size: 0.8rem;
  background-color: #db496e;
  padding: 1rem;
  border-radius: 10px;
  border: 1.5px solid rgb(255, 252, 252);
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.49);
  margin-bottom: 2rem;

  @media (max-width: 420px) {
    width: 100%;
    padding: 0;
    font-size: 0.8rem;
    box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.49);
    margim: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed; /* ✅ Garante alinhamento das colunas */
    margin-bottom: 1rem;

    @media (max-width: 420px) {
      width: 100%;
      font-size: 0.5rem;
      margin-bottom: none;
    }
  }

  thead,
  tfoot {
    display: table;
    width: 100%;
    table-layout: fixed;

    @media (max-width: 420px) {
      width: 100%;
      font-size: 0.7rem;
    }
  }

  tbody {
    display: block;
    width: 100%;
    max-height: 10rem;
    overflow-y: auto;
  }

  th,
  td {
    width: 1%; /* ✅ Mesma largura para alinhar */
    padding: 0.2rem;
    text-align: center;
    box-sizing: border-box; /* ✅ Evita estouro da largura */

    @media (max-width: 420px) {
      font-size: 0.5rem;
    }
  }

  th {
    font-weight: bold;
    background-color: #636773;
    border: none;
    font-weight: bold;
  }
  td {
    background-color: #f2dcd8;
  }

  #primeiro {
    border-radius: 0.3rem 0 0 0;
  }
  #ultimo {
    border-radius: 0 0.3rem 0 0;
  }

  tfoot tr td {
    font-weight: bold;
    background-color: #636773;
    border: none;
    border-radius: 0 0 0.3rem 0.3rem;
    padding: 0 2rem 0 0;
    font-size: 1.1rem;

    @media (max-width: 420px) {
      padding: 0 1rem 0 0;
      font-size: 0.5rem;
      width: 340px;
    }
  }
  tfoot tr td:nth-child(2) {
    text-align: center;
  }

  input,
  select {
    font-size: 0.8rem;
    width: 100%;
    height: 1.5rem;
    padding: 0.5rem;
    border-radius: 0.3rem;
    border: none;

    @media (max-width: 420px) {
      width: 80%;
    }
  }

  .PENDENTE {
    background-color: rgb(255, 230, 7);
    color: black;
    border-radius: 0.3rem;
    text-align: center;
    font-size: 0.8rem;
    padding: 0.2rem 1rem 0.2rem 1rem;
  }
  .PAGO {
    background-color: #4dfaa9;
    color: black;
    border-radius: 0.3rem;
    padding: 0.2rem 1rem 0.2rem 1rem;
    height: 1.5rem;
    width: 30%;
    text-align: center;
  }

  .status_info {
    display: flex;
    height: 5rem;
    padding: 0.5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    justify-content: space-evenly;
  }

  .left .info {
    background-color: #636773;
    padding: 0.2rem 1rem;
    border-radius: 0.3rem;
    width: 10rem;
  }

  .footer-comanda {
    display: flex;
    justify-content: space-evenly;
  }
`;

export default ContainerS;
