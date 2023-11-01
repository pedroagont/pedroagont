import { useEffect } from 'react';

function useDocumentMetaTags(newTitle, newUrl) {
  useEffect(() => {
    document.title = newTitle;

    document
      .querySelector('meta[property="og:title"]')
      .setAttribute('content', newTitle);

    document
      .querySelector('meta[property="og:url"]')
      .setAttribute('content', `https://pedroagont.com${newUrl}`);

    document
      .querySelector('link[rel="canonical"]')
      .setAttribute('href', `https://pedroagont.com${newUrl}`);
  });
}

export default useDocumentMetaTags;
