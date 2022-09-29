import React from 'react';
import './Practice.css';

const Practice = (props) => {
  const { caption, time, details, picture } = props.practice;
  return (
    <div className='practice-container'>
      <div className="practice-topic">
        <img src={picture} alt="" />
        <h3>{caption}</h3>
        <p>{details}</p>
        <h5>For Age : 20-25</h5>
        <h5>Time Required: {time}sec</h5>
        <p className='add-button'>Add to list</p>
      </div>
    </div>
  );
};

export default Practice;