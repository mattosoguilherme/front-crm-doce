import { Link, useNavigate } from "react-router-dom";
import { ContainerHomeS, FormS } from "./styles";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const HandleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const senha = e.target.senha.value;

    await axios
      .post("/auth", { email, senha })
      .then((response) => {
        
          localStorage.setItem("token", response.data.token);

          if (response.data.user.role === "USER"){ 
            navigate("/inicio");
          }
        
      })
      .catch((error) => {
        console.error("Login error:", error);
        alert("Ocorreu um erro durante o login. Tente novamente");
      });
  };

  return (
    <>
      <ContainerHomeS>
        <img
          className="logo"
          alt="logo"
          src="https://i.ibb.co/gVnmYDf/logo.jpg"
          width={150}
        />
        <FormS onSubmit={HandleLogin} method="POST">
          <input id="email" type="text" placeholder="email" />
          <input id="senha" type="password" placeholder="Senha" />

          <button type="submit" class="btn btn-primary btn-lg">
            Entrar
          </button>

          <Link to={"/cadastro"}> Ainda não tenho cadastro </Link>
        </FormS>
      </ContainerHomeS>
    </>
  );
};
export default Login;
