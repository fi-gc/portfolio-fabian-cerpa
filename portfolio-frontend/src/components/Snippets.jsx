import React, { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import axios from "axios";
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
import "../styles/Snippets.css";

const Snippets = ({ selectedTech }) => {
  const [snippets, setSnippets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage] = useState(5);
  const [previewSnippet, setPreviewSnippet] = useState(null);
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });
  const [showPreview, setShowPreview] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState(null);
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);

  const fetchSnippets = async (isBackground = false) => {
    try {
      if (!isBackground) setLoading(true);
      const response = await axios.get('http://localhost:8080/api/snippets');
      console.log('Datos recibidos de la API:', response.data);
      if (response.data.length > 0) {
        console.log('Estructura del primer snippet:', response.data[0]);
        console.log('Campos disponibles:', Object.keys(response.data[0]));
      }
      setSnippets(response.data);
      if (!isBackground) setLoading(false);
    } catch (error) {
      console.error('Error fetching snippets:', error);
      if (!isBackground) setLoading(false);
    }
  };

  useEffect(() => {
    fetchSnippets();
    // Configurar recarga automática cada 30 minutos en segundo plano
    intervalRef.current = setInterval(() => fetchSnippets(true), 1800000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Resetear página cuando cambia el filtro
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTech]);

  const filteredSnippets = selectedTech
    ? snippets.filter(snippet => {
        console.log('Comparando:', snippet.tech, 'con:', selectedTech, 'Resultado:', snippet.tech === selectedTech);
        return snippet.tech === selectedTech;
      })
    : snippets;

  console.log('Snippets totales:', snippets.length);
  console.log('Filtro seleccionado:', selectedTech);
  console.log('Snippets filtrados:', filteredSnippets.length);

  // Calcular snippets para la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSnippets = filteredSnippets.slice(startIndex, endIndex);
  
  // Calcular total de páginas para los snippets filtrados
  const filteredTotalPages = Math.ceil(filteredSnippets.length / itemsPerPage);

  // Asegurar que la página actual sea válida después del filtrado
  useEffect(() => {
    if (currentPage > filteredTotalPages && filteredTotalPages > 0) {
      setCurrentPage(1);
    }
  }, [filteredSnippets, currentPage, filteredTotalPages]);

  const calculateTooltipPosition = () => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    return {
      x: Math.max(10, Math.min(viewportWidth - 310, previewPosition.x)),
      y: Math.max(10, Math.min(viewportHeight - 210, previewPosition.y))
    };
  };

  const handleMouseEnter = (snippet, event) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const rect = event.currentTarget.getBoundingClientRect();
    setPreviewPosition({
      x: rect.right + 10,
      y: rect.top
    });
    
    setPreviewSnippet(snippet);
    setShowPreview(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowPreview(false);
      setPreviewSnippet(null);
    }, 300);
  };

  const handleCopyCode = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedSnippet(code);
      setTimeout(() => setCopiedSnippet(null), 2000);
    } catch (err) {
      console.error('Error copying code:', err);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="snippets-container">
        <div className="snippets-header">
          <h2>Fragmentos de Código</h2>
        </div>
        <div className="loading-state">
          <h3>Cargando snippets...</h3>
        </div>
      </div>
    );
  }

  if (filteredSnippets.length === 0) {
    return (
      <div className="snippets-container">
        <div className="snippets-header">
          <h2>Fragmentos de Código</h2>
        </div>
        <div className="empty-state">
          <h3>No se encontraron snippets</h3>
          <p>
            {selectedTech 
              ? `No hay snippets disponibles para ${selectedTech}. Intenta con otra tecnología.`
              : "No hay snippets disponibles en este momento."
            }
          </p>
          <p style={{ fontSize: '0.8rem', color: '#9ca3af', marginTop: '1rem' }}>
            Debug: Total snippets: {snippets.length} | Filtro: "{selectedTech}" | Snippets filtrados: {filteredSnippets.length}
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="snippets-container">
        <div className="snippets-header">
          <h2>Fragmentos de Código</h2>
        </div>
        
        <table className="snippets-table">
          <thead>
            <tr>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {currentSnippets.map((snippet, index) => (
              <tr key={snippet.id || index}>
                <td>
                  <div 
                    className="description"
                    onMouseEnter={(e) => handleMouseEnter(snippet, e)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {snippet.description}
                  </div>
                </td>
              </tr>
            ))}
            {/* Filas fantasma para mantener altura fija - siempre 5 filas */}
            {Array.from({ length: Math.max(0, 5 - currentSnippets.length) }, (_, index) => (
              <tr key={`ghost-${index}`} className="ghost-row">
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Paginación */}
        {filteredTotalPages > 1 && (
          <div className="pagination">
            <button 
              className="pagination-button"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              ← Anterior
            </button>
            
            <div className="page-numbers">
              {Array.from({ length: filteredTotalPages }, (_, index) => {
                const page = index + 1;
                // Mostrar solo algunas páginas para no saturar
                if (
                  page === 1 ||
                  page === filteredTotalPages ||
                  (page >= currentPage - 1 && page <= currentPage + 1)
                ) {
                  return (
                    <button
                      key={page}
                      className={`page-button ${currentPage === page ? 'active' : ''}`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  );
                } else if (
                  page === currentPage - 2 ||
                  page === currentPage + 2
                ) {
                  return <span key={page} className="page-ellipsis">...</span>;
                }
                return null;
              })}
            </div>
            
            <button 
              className="pagination-button"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === filteredTotalPages}
            >
              Siguiente →
            </button>
          </div>
        )}

        <div className="snippets-info">
          <p>
            Mostrando {startIndex + 1}-{Math.min(endIndex, filteredSnippets.length)} de {filteredSnippets.length} snippets
            {selectedTech && ` filtrados por ${selectedTech}`}
          </p>
        </div>
      </div>

      {/* Tooltip de previsualización */}
      {showPreview && previewSnippet && createPortal(
        <div 
          className="preview-tooltip"
          style={{
            left: calculateTooltipPosition().x,
            top: calculateTooltipPosition().y
          }}
          onMouseEnter={() => {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="preview-header">
            <span className="preview-language">{previewSnippet.tech}</span>
            <button 
              className={`copy-button ${copiedSnippet === previewSnippet.code ? 'copied' : ''}`}
              onClick={() => handleCopyCode(previewSnippet.code)}
            >
              {copiedSnippet === previewSnippet.code ? '✓ Copiado' : '📋 Copiar'}
            </button>
          </div>
          <pre className="preview-code">
            <code
               dangerouslySetInnerHTML={{
                 __html: hljs.highlight(
                   previewSnippet.code,
                   { language: hljs.getLanguage(previewSnippet.tech.toLowerCase()) ? previewSnippet.tech.toLowerCase() : 'plaintext' }
                 ).value,
               }}
             />
          </pre>
        </div>,
        document.body
      )}
    </>
  );
};

export default Snippets; 