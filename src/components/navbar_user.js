import { Link} from "react-router-dom";
import styled from "styled-components";

const NavS = styled.nav`
  background-color: transparent !important;
  position: relative !important;

  .container-fluid {
    justify-content: space-between !important;
  }
`;

const HeaderUser = () => {
  return (
    <>
      <NavS className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="http://doc.comhttps://docetialulu.vercel.app/inicio">
            <img src="https://i.ibb.co/gVnmYDf/logo.jpg" width={50} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Docinhos Tia Lulu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link
                    to={"/inicio"}
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/inicio"} className="nav-link" href="#">
                    Cadastro
                  </Link>
                </li>
                 <li className="nav-item">
                  <Link to={"/inicio"} className="nav-link" href="#">
                    Fazer Pedido
                  </Link>
                </li>
                 

            
                <li className="nav-item">
                  <Link to={"/"} className="nav-link" href="#">
                    sair
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </NavS>
    </>
  );
};

export default HeaderUser;
