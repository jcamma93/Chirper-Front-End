import React from 'react'


const ChirpCard = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        {(props.username)}
      </div>
      <div className="card-body">
        <p className="p">
          {(props.message)}
        </p>
      </div>
    </div>
  );
};

export default ChirpCard;