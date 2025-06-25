import React from "react";
import "../styles/AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-content">
        <div className="about-section">
          <h2>Sobre este Sitio</h2>
          <p>
            Este portafolio de snippets es una aplicación web moderna desarrollada para demostrar 
            habilidades técnicas y compartir fragmentos de código útiles. La plataforma ofrece una 
            experiencia de usuario fluida con funcionalidades avanzadas como filtrado inteligente, 
            previsualización de código con resaltado de sintaxis, y gestión completa de snippets.
          </p>
          <p>
            El proyecto implementa arquitectura de microservicios con separación clara entre frontend 
            y backend, siguiendo las mejores prácticas de desarrollo web moderno. La interfaz es 
            completamente responsiva y optimizada para diferentes dispositivos.
          </p>
          <p>
            <strong>Despliegue profesional:</strong> El frontend está desplegado en <strong>Vercel</strong> y el backend en <strong>Railway</strong>, permitiendo alta disponibilidad y acceso global. Se configuraron variables de entorno seguras y un sistema avanzado de CORS para permitir la integración entre ambos entornos y el desarrollo local.
          </p>
          <p>
            <strong>Documentos descargables:</strong> Los archivos de CV, certificado de título y diplomado han sido renombrados con nombres profesionales y descriptivos para facilitar su identificación y descarga.
          </p>
          <p>
            <strong>Base de datos en la nube:</strong> Los datos de los snippets se almacenan en una base de datos PostgreSQL gestionada por Supabase, una plataforma cloud gratuita y escalable, lo que permite que el portafolio esté siempre disponible y preparado para producción y despliegue en cualquier hosting.
          </p>
        </div>

        <div className="tech-sections">
          <div className="tech-section">
            <h3>Frontend Technologies</h3>
            <div className="tech-category">
              <h4>Framework & Build Tools</h4>
              <ul>
                <li><strong>React 19.1.0</strong> - Biblioteca de interfaz de usuario con Hooks modernos</li>
                <li><strong>Vite 6.3.5</strong> - Herramienta de build ultra-rápida para desarrollo</li>
                <li><strong>React DOM 19.1.0</strong> - Renderizado del DOM para React</li>
              </ul>
            </div>
            
            <div className="tech-category">
              <h4>UI/UX & Styling</h4>
              <ul>
                <li><strong>CSS3</strong> - Estilos modernos con Flexbox, Grid y animaciones</li>
                <li><strong>React Icons 5.5.0</strong> - Iconografía consistente y escalable</li>
                <li><strong>Responsive Design</strong> - Adaptación automática a todos los dispositivos</li>
                <li><strong>CSS Animations</strong> - Transiciones suaves y efectos visuales</li>
              </ul>
            </div>

            <div className="tech-category">
              <h4>Code Highlighting & Editing</h4>
              <ul>
                <li><strong>Highlight.js 11.9.0</strong> - Resaltado de sintaxis automático</li>
                <li><strong>React Simple Code Editor 0.13.1</strong> - Editor de código en tiempo real</li>
                <li><strong>Atom One Dark Theme</strong> - Tema de colores profesional</li>
              </ul>
            </div>

            <div className="tech-category">
              <h4>HTTP & State Management</h4>
              <ul>
                <li><strong>Axios 1.10.0</strong> - Cliente HTTP para comunicación con API</li>
                <li><strong>React Hooks</strong> - useState, useEffect, useRef para gestión de estado</li>
                <li><strong>React Portal</strong> - Renderizado de modales y tooltips</li>
              </ul>
            </div>
          </div>

          <div className="tech-section">
            <h3>Backend Technologies</h3>
            <div className="tech-category">
              <h4>Framework & Runtime</h4>
              <ul>
                <li><strong>Spring Boot 3.x</strong> - Framework Java para aplicaciones empresariales</li>
                <li><strong>Java 17+</strong> - Lenguaje de programación principal</li>
                <li><strong>Maven</strong> - Gestión de dependencias y build automation</li>
              </ul>
            </div>

            <div className="tech-category">
              <h4>Database & Persistence</h4>
              <ul>
                <li><strong>Spring Data JPA</strong> - Persistencia de datos con Hibernate</li>
                <li><strong>PostgreSQL (Supabase)</strong> - Base de datos relacional en la nube, robusta y escalable</li>
                <li><strong>Hibernate ORM</strong> - Mapeo objeto-relacional</li>
                <li><strong>HikariCP</strong> - Pool de conexiones de alto rendimiento</li>
              </ul>
            </div>

            <div className="tech-category">
              <h4>API & Security</h4>
              <ul>
                <li><strong>Spring Web MVC</strong> - Framework web para APIs REST</li>
                <li><strong>RESTful API</strong> - Arquitectura de servicios web</li>
                <li><strong>CORS Configuration</strong> - Configuración de seguridad cross-origin</li>
                <li><strong>HTTP Status Codes</strong> - Respuestas HTTP estandarizadas</li>
              </ul>
            </div>

            <div className="tech-category">
              <h4>Development & Tools</h4>
              <ul>
                <li><strong>Spring Boot DevTools</strong> - Herramientas de desarrollo automático</li>
                <li><strong>SpringDoc OpenAPI</strong> - Documentación automática de API</li>
                <li><strong>Maven Wrapper</strong> - Gestión consistente de versiones</li>
                <li><strong>Supabase Dashboard</strong> - Interfaz web para gestión de base de datos</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="features-section">
          <h3>Características Principales</h3>
          <div className="features-grid">
            <div className="feature-item">
              <h4>🎯 Filtrado Inteligente</h4>
              <p>Filtrado por tecnologías con actualización en tiempo real</p>
            </div>
            <div className="feature-item">
              <h4>💻 Resaltado de Sintaxis</h4>
              <p>Detección automática de lenguajes y coloreado de código</p>
            </div>
            <div className="feature-item">
              <h4>📱 Diseño Responsivo</h4>
              <p>Interfaz adaptativa para móviles, tablets y desktop</p>
            </div>
            <div className="feature-item">
              <h4>⚡ Rendimiento Optimizado</h4>
              <p>Polling inteligente y carga eficiente de datos</p>
            </div>
            <div className="feature-item">
              <h4>☁️ Base de Datos en la Nube</h4>
              <p>PostgreSQL en Supabase para escalabilidad y confiabilidad</p>
            </div>
            <div className="feature-item">
              <h4>🎨 UI/UX Moderna</h4>
              <p>Interfaz intuitiva con animaciones y feedback visual</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
