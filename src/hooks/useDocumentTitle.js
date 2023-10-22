import { useEffect } from 'react';

function useDocumentTitle(newTitle) {
  useEffect(() => {
    document.title = newTitle;
  });
}

export default useDocumentTitle;
