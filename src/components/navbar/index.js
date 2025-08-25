import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavS = styled.nav`
  background-color: transparent !important;
  position: relative !important;

  .container-fluid {
    justify-content: space-between !important;
  }
`;

const Header = () => {
  
  return (
    <>
      <NavS className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://i.ibb.co/gVnmYDf/logo.jpg" width={50} />
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
                    to={"/home"}
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/cardapio"} className="nav-link" href="#">
                    cardapio
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/pedido"} className="nav-link" href="#">
                    Pedidos
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/cliente"} className="nav-link" href="#">
                    clientes
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/comanda"} className="nav-link" href="#">
                    comandas
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Configurações
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
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

export default Header;
