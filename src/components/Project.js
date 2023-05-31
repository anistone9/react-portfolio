import React from 'react';
import Card from 'react-bootstrap/Card';
//import 'holderjs';

const styles = {
  card: {
    width: '18rem',
    textAlign: 'center',
  }
}

const Project = () => {
  return (
    <div className="card">
      <div className="p-5 mb-4 bg-dark">
        <img src="card-image.jpg" alt="Card" />
        <div className="flex-row">
          <p>Project Title</p>
          <p>Add links to repo and deployed app</p>
        </div>
      </div>
    </div>
  )
};


export default Project;