import React from "react";
import "./App.css";
import {
  FaTooth,
  FaLock,
  FaCalendarAlt,
  FaDatabase,
  FaFileMedical,
} from "react-icons/fa";

export default function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="brand">ProntOdont</div>
        <ul className="nav-links">
          <li><a href="#problema">Problema</a></li>
          <li><a href="#solucao">Solução</a></li>
          <li><a href="#funcionalidades">Funcionalidades</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>

      {/* Hero */}
      <section className="hero">
        <h1>ProntOdont</h1>
        <p>Gestão odontológica moderna e segura em um único app</p>
        <a
          href="https://prontodont.anakelly.grupo2.mobile.ufersa.dev.br"
          className="btn-primary"
        >
          Acesse agora
        </a>
      </section>

      {/* Problema */}
      <section id="problema" className="section">
        <h2>O problema</h2>
        <p>
          Muitos dentistas ainda utilizam fichas em papel ou sistemas limitados,
          sem integração entre prontuários, exames e agendamentos. Isso aumenta
          riscos de perda de dados e dificulta o acompanhamento clínico dos pacientes.
        </p>
      </section>

      {/* Solução */}
      <section id="solucao" className="section alt">
        <h2>Nossa solução</h2>
        <p>
          O ProntOdont centraliza todas as informações da clínica em um só lugar.
          Registre e consulte prontuários digitais segmentados por especialidade,
          emita documentos digitais e gerencie consultas com praticidade e segurança.
        </p>
      </section>

      {/* Funcionalidades */}
      <section id="funcionalidades" className="section">
        <h2>Funcionalidades</h2>
        <div className="features-grid">
          <div className="feature-card">
            <FaLock className="icon" />
            <h3>Autenticação segura</h3>
            <p>Acesso exclusivo via Amazon Cognito, restrito a dentistas.</p>
          </div>
          <div className="feature-card">
            <FaFileMedical className="icon" />
            <h3>Prontuários digitais</h3>
            <p>
              Histórico clínico organizado por especialidade odontológica.
            </p>
          </div>
          <div className="feature-card">
            <FaCalendarAlt className="icon" />
            <h3>Agendamentos</h3>
            <p>
              Controle de consultas integrado ao histórico do paciente.
            </p>
          </div>
          <div className="feature-card">
            <FaDatabase className="icon" />
            <h3>Armazenamento seguro</h3>
            <p>
              Exames e documentos salvos com segurança no Amazon S3 e DynamoDB.
            </p>
          </div>
          <div className="feature-card">
            <FaTooth className="icon" />
            <h3>Foco em odontologia</h3>
            <p>
              Odontograma exclusivo para odontopediatria e suporte a várias especialidades.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Experimente o ProntOdont</h2>
        <p>Mais organização, segurança e praticidade para sua clínica</p>
        <div className="btn-group">
          <a
            href="https://github.com/kellynobre/projetoAppWeb"
            className="btn-secondary"
          >
            GitHub Web
          </a>
          <a
            href="https://github.com/kellynobre/projetoAppMobile"
            className="btn-secondary"
          >
            GitHub Mobile
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contato">
        <p>
          &copy; 2025 ProntOdont - Desenvolvido por Ana Kelly Nobre Costa.
        </p>
      </footer>
    </div>
  );
}
