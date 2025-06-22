import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaEye, FaFileAlt, FaDownload, FaBook, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/RightPanel.css";

const RightPanel = () => {
  return (
    <div className="panel-wrapper">
      <div className="section">
        <h3 className="title">
          <FaEye className="icon" />
          Vista previa
        </h3>
        <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.5' }}>
          Pasa el mouse sobre cualquier descripción para ver una vista previa del código. 
          Puedes copiar el código directamente al portapapeles.
        </p>
      </div>

      <div className="section">
        <h3 className="title">
          <FaCode className="icon" />
          Enlaces
        </h3>
        <a href="https://github.com/fi-gc/portfolio-fabian-cerpa" target="_blank" rel="noopener noreferrer" className="link">
          <FaGithub />
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/fabian-gonzalez-cerpa" target="_blank" rel="noopener noreferrer" className="link">
          <FaLinkedin />
          LinkedIn
        </a>
        <a href="mailto:gonzalez.cerpa.fi@gmail.com" className="link">
          <FaEnvelope />
          Email
        </a>
      </div>

      <div className="section">
        <h3 className="title">
          <FaFileAlt className="icon" />
          Documentos
        </h3>
        <div className="document-item">
          <FaFileAlt className="document-icon" />
          <div className="document-info">
            <span className="document-name">Curriculum Vitae</span>
            <span className="document-type">PDF</span>
          </div>
          <a className="download-link" href="/CV.pdf" download>
            <FaDownload />
          </a>
        </div>
        <div className="document-item">
          <FaFileAlt className="document-icon" />
          <div className="document-info">
            <span className="document-name">Certificado de Título</span>
            <span className="document-type">PDF</span>
          </div>
          <a className="download-link" href="/CT.pdf" download>
            <FaDownload />
          </a>
        </div>
        <div className="document-item">
          <FaFileAlt className="document-icon" />
          <div className="document-info">
            <span className="document-name">Diplomado Python</span>
            <span className="document-type">PDF</span>
          </div>
          <a className="download-link" href="/Diploma.pdf" download>
            <FaDownload />
          </a>
        </div>
      </div>

      <div className="section">
        <h3 className="title">
          <FaBook className="icon" />
          Documentación API
        </h3>
        <a 
          href="http://localhost:8080/swagger-ui.html" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="link"
        >
          <FaExternalLinkAlt />
          Swagger UI - API Docs
        </a>
        <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: '1.4', marginTop: '8px' }}>
          Explora todos los endpoints de la API REST, prueba funcionalidades y ve ejemplos de uso.
        </p>
      </div>
    </div>
  );
};

export default RightPanel;
