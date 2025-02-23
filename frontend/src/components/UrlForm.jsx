import { useState } from 'react';
import './UrlForm.css';

const UrlForm = () => {
  const [fullUrl, setFullUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('https://url-shortener-71ww.onrender.com/api/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullUrl }),
      });

      if (!response.ok) {
        throw new Error('Failed to shorten URL');
      }

      const data = await response.json();
      setShortUrl(`http://localhost:5000/api/${data.shortUrl}`);
    } catch (error) {
      setError('Failed to shorten URL. Please try again.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="main-container">
      <div className="url-shortener-container">
        <h1>URL Shortener</h1>
        <h3>100% Automatically and Free</h3>
        <form className="url-shortener-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={fullUrl}
            onChange={(e) => setFullUrl(e.target.value)}
            placeholder="Enter a long URL"
            required
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Shortening...' : 'Shorten URL'}
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
        {shortUrl && (
          <div className="short-url-result">
            <p>
              Short URL:{' '}
              <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                {shortUrl}
              </a>
            </p>
          </div>
        )}
      </div>
      <div className="image-container">
        <img src="/image/url-replacce.png" alt="URL Shorner Illustration" />
      </div>
    </div>
  );
};

export default UrlForm;
