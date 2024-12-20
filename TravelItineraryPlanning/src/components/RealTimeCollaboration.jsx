// src/components/RealTimeCollaboration.jsx
import React, { useState, useEffect } from 'react';

function RealTimeCollaboration({ itineraryId }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  let ws;

  useEffect(() => {
    ws = new WebSocket(`ws://localhost:8000/ws/itinerary/${itineraryId}/`);
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages((prev) => [...prev, data]);
    };

    return () => ws.close();
  }, [itineraryId]);

  const sendMessage = () => {
    ws.send(JSON.stringify({ message: input }));
    setInput('');
  };

  return (
    <div>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg.message}</li>
        ))}
      </ul>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default RealTimeCollaboration;
