import React from 'react';

const NewsItem = ({ title, category, description, keywords }) => {
  return (
    <div className="news-item">
      <h2>{title}</h2>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Description:</strong> {description}</p>
      {keywords.length > 0 && (
        <p><strong>Keywords:</strong> {keywords.join(', ')}</p>
      )}
    </div>
  );
};

export default NewsItem;
