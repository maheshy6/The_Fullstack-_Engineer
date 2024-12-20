// src/components/ShareItinerary.jsx
import React, { useState } from 'react';
import axios from 'axios';

function ShareItinerary({ itineraryId }) {
  const [link, setLink] = useState('');

  const generateLink = async () => {
    const response = await axios.get(`/api/itinerary/share/${itineraryId}/`);
    setLink(response.data.share_link);
  };

  return (
    <div className="container">
      <button onClick={generateLink}>Generate Share Link</button>
      {link && (
        <p>
          Share this link: <a href={link}>{link}</a>
        </p>
      )}
    <ShareItinerary itineraryId={itineraryId} />
    <RealTimeCollaboration itineraryId={itineraryId} />
  </div>
  );
}

export default ShareItinerary;
