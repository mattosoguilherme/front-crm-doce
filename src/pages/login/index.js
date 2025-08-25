import { useNavigate } from "react-router-dom";
import { ContainerHomeS, FormS } from "../styles";
import axios from "axios";
import { useState } from "react";
import Loading from "../../components/loading";

const Login = () => {
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  
  const HandleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    const email = e.target.email.value;
    const senha = e.target.senha.value;
   
    

    await axios
      .post("/auth", { email, senha })
      .then((response) => {
        localStorage.setItem("token", response.data.token);

        if (response.data.user.role === "USER") {

          navigate("/inicio");
        }
      })
      .catch((error) => {
        setLoading(false)
        alert(error.response.data.message);

      });
  };

 

  return (
    <>
      <ContainerHomeS>
        {loading ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            <img
              className="logo"
              alt="logo"
              src="https://i.ibb.co/gVnmYDf/logo.jpg"
              width={150}
            />

            <FormS onSubmit={HandleLogin} method="POST">
              <input id="email" type="text" placeholder="email" />
              <input id="senha" type="password" placeholder="Senha" />

              <button type="submit" class="btn btn-primary btn-lg" >
                Entrar
              </button>

              {/* <Link to={"/cadastro"}> Ainda não tenho cadastro </Link> */}
            </FormS>
          </>
        )}
      </ContainerHomeS>
    </>
  );
};
export default Login;
