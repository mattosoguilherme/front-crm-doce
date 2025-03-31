import { Link, useNavigate } from "react-router-dom";
import { ContainerHomeS, FormS } from "./styles";

const Login = () => {

    const navigate = useNavigate();

  return (
    <>
      <ContainerHomeS>
      <img className="logo" alt="logo" src="https://i.ibb.co/gVnmYDf/logo.jpg" width={150} />
          <FormS>
            <input type="text" placeholder="email" />
            <input type="password" placeholder="Senha" />
            <Link to={"/home"}>
              {" "}
              <button type="button" class="btn btn-primary btn-lg">
                Entrar
              </button>{" "}
            </Link>
           
            <Link to={"/cadastro"} >  Ainda não tenho cadastro </Link>
          </FormS>
       
      </ContainerHomeS>
    </>
  );
};
export default Login;
