import React, { useState } from "react";
import navbarLogo from "../../../src/assets/navbar-logo.png";
import "./styles.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="h-14 w-full flex justify-around items-center fixed top-0 bg-white z-50">
      <div>
        {/*
        //TODO cambiar el logo
         */}
        <Link to="/">
          <img className="h-10 w-auto" src={navbarLogo} alt="" />
        </Link>
      </div>

      {/* Navegación en pantallas pequeñas */}
      <div className="lg:hidden xl:hidden">
        <div className={`links ${isNavOpen ? "active" : ""}`}>
          <div className="w-full flex flex-col gap-3 h-screen m-5 text-3xl p-5 pt-10">
            <ul>
              <li>
                <Link to="/" onClick={toggleNav}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/therapy" onClick={toggleNav}>
                  Terapia
                </Link>
              </li>
            </ul>
            <div className="text-xl ml-4">
              <ul>
                <li>
                  <Link to="/therapy/online">Terapia Online</Link>
                </li>
                <li>
                  <Link to="/therapy/in-person">Terapia Presencial</Link>
                </li>
                <li>
                  <Link to="/therapy/social">Costo Social</Link>
                </li>
              </ul>
            </div>
            <li>
              <Link to="/about" onClick={toggleNav}>
                Sobre nosotros
              </Link>
            </li>
            <div className="text-xl ml-4">
              <ul>
                <li>
                  <Link to="/about/staff" onClick={toggleNav}>
                    Equipo
                  </Link>
                </li>
                <li>
                  <Link to="/about/testimonials" onClick={toggleNav}>
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link to="/about/fqa" onClick={toggleNav}>
                    Preguntas Frecuentes
                  </Link>
                </li>
              </ul>
            </div>
            <li>
              <Link to="/self-care" onClick={toggleNav}>
                Autocuidado
              </Link>
            </li>
            <div className="text-xl ml-4">
              <ul>
                <li>
                  <Link to="/self-care/blog" onClick={toggleNav}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/self-care/resources" onClick={toggleNav}>
                    Recursos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <button
        className="menu-button flex justify-center items-center lg:hidden xl:hidden "
        onClick={toggleNav}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>

      {/* Navegación en pantallas grandes */}
      <div className="hidden lg:flex xl:flex">
        <ul className="flex gap-8 text-xl">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/therapy">Terapia</Link>
          </li>
          <li>
            <Link to="/about">Sobre nosotros</Link>
          </li>
          <li>
            <Link to="/self-care">Autocuidado</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
