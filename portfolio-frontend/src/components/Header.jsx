import React from "react";
import "../styles/Header.css";

const techTags = [
  "Python",
  "Java",
  "C#",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "PHP",
  "SQL",
  "PL/SQL",
  "Microsoft SQL Server",
  "Git",
  "GitHub",
  "GitLab",
];

const Header = ({ onTechSelect, selectedTech }) => {
  const handleTagClick = (tag) => {
    if (onTechSelect) {
      onTechSelect(selectedTech === tag ? "" : tag);
    }
  };

  return (
    <header className="header-wrapper">
      <div className="header-content">
        <h1 className="title">Fabián Ignacio Cerpa González</h1>

        <div className="subtitle">
          Ingeniero en Informática
        </div>

        <div className="tag-list">
          {techTags.map((tag) => (
            <button 
              key={tag} 
              className={`tag-button ${selectedTech === tag ? 'active' : ''}`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className={`filter-info ${selectedTech ? 'show' : ''}`}>
          {selectedTech && (
            <>
              <strong>Filtro activo:</strong> {selectedTech} 
              <span style={{ marginLeft: '1rem', cursor: 'pointer', color: '#60a5fa' }}
                    onClick={() => onTechSelect("")}>
                ✕ Limpiar filtro
              </span>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
