import React, { useState, useEffect } from 'react';
import '../styles/FavoriteQuotes.css';

const FavoriteQuotes = ({ quote, author }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = () => {
    const isQuoteAlreadyAdded = favorites.some((item) => item.quote === quote && item.author === author);
    if (isQuoteAlreadyAdded) {
      return;
    }

    const updatedFavorites = [...favorites, { quote, author }];
    setFavorites(updatedFavorites);
    localStorage.setItem('favoriteQuotes', JSON.stringify(updatedFavorites));
  };

  const removeFromFavorites = (quoteToRemove) => {
    const updatedFavorites = favorites.filter((item) => item.quote !== quoteToRemove.quote || item.author !== quoteToRemove.author);
    setFavorites(updatedFavorites);
    localStorage.setItem('favoriteQuotes', JSON.stringify(updatedFavorites));
  };

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteQuotes');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  return (
    <div className="favorite-quotes">
      <h1>Favorite Quotes</h1>

      <button onClick={addToFavorites}>Add to Favorites</button>
      {favorites?.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Quote</th>
              <th>Author</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {favorites.map((item, index) => (
              <tr key={index}>
                <td>{item.quote}</td>
                <td>{item.author}</td>
                <td>
                  <button onClick={() => removeFromFavorites(item)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No favorite quotes yet.</p>
      )}
    </div>
  );
};

export default FavoriteQuotes;
