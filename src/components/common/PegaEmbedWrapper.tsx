import React, { useEffect, useState } from "react";

let gbEmbedLoadInProgress = false;
const pegaEmbedScriptUrl = "https://prod-cdn.constellation.pega.io/8.23.0-110/react/prod/pega-embed.js";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['pega-embed']: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

function PegaEmbedWrapper(props: any) {
  const [showPega, setShowPega] = useState(!!customElements.get('pega-embed'));

  const loadScript = async (url: any) => {
    return new Promise((resolve, reject) => {
      const element = document.createElement('script');
      // Important success and error for the promise
      element.onload = () => {
        resolve(url);
      };
      element.onerror = (e) => {
        reject(e);
      };
      element.async = true;
      element.src = url;    
      // Inject into document to kick off loading
      document.head.appendChild(element);
    }).catch();
  };

  useEffect(() => {
  
    if( !customElements.get('pega-embed') && !gbEmbedLoadInProgress) {
      gbEmbedLoadInProgress = true;
  
  
      loadScript(pegaEmbedScriptUrl).then(
        loadedUrl => {
          // gbEmbedScriptLoaded = true;
          gbEmbedLoadInProgress = false;
          // Set to force a re-render
          // setStatus("Loaded");
          setShowPega(true);
        },
        error => {
          gbEmbedLoadInProgress = false;
        }
      );
    }
  }, [showPega]); 

  return (
    <div>
    {showPega && (
      <pega-embed {...props}>
      </pega-embed>)}
    </div>
  );
}

export default PegaEmbedWrapper;