import React, { useRef } from "react";
import "../styles/ShareQuotes.css";

const ShareQuotes = ({ quote }) => {
  const quoteRef = useRef(null);

  const shareViaEmail = () => {
    const emailSubject = "Check out this awesome quote!";
    const emailBody = `Hey there,\n\nI wanted to share this amazing quote with you:\n\n${quote}`;
    const emailLink = `mailto:?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = emailLink;
  };

  const copyToClipboard = () => {
    if (quoteRef.current) {
      const quoteToCopy = quoteRef.current.value;
      navigator.clipboard.writeText(quoteToCopy)
        .then(() => {
          quoteRef.current.blur();
          alert("Quote copied to clipboard!");
        })
        .catch((error) => {
          console.error("Error copying to clipboard:", error);
        });
    }
  };
  
  return (
    <div className="share-quotes">
      <h1>Share Quotes</h1>
      <button onClick={copyToClipboard}>Copy to Clipboard</button>
      <button onClick={shareViaEmail}>Share via Email</button>
      <textarea
        ref={quoteRef}
        readOnly
        value={quote}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default ShareQuotes;
