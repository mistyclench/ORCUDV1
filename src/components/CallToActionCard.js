// components/CallToActionCard.js

import React from 'react';

const CallToActionCard = ({ title, backgroundColor, url }) => {
  return (
    <div href={url} style={{ backgroundColor, padding: '20px', margin: '10px 10px', borderRadius: '5px', width:'45%', color:'white' }}>
      <h1>{title}</h1>
    </div>
  );
};

export default CallToActionCard;