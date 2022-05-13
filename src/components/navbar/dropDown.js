import React from 'react';
import ArrowDown from '../../images/arrow_down.svg';
import ArrowUp from '../../images/arrow_up.svg';

const dropDown = ({selected, setSelected, isActive, setIsActive}) => {

  const options = ['$ USD', '£ GBP', 'A$ AUD', '¥ JPY', '₽ RUB']

  return (
    <div className="dropdown">
      <div className="dropdown_btn" onClick={() => setIsActive(!isActive)}>
        <p>{selected.split(' ')[0]}</p>
        {isActive === false ? (<img src={ArrowDown} alt="arrow_icon"/>) : (
          <img src={ArrowUp} alt="arrow_icon"/>
        )}      
      </div>
      {isActive && (
        <div className="dropdown_content">
          {options.map((option) => (
            <div
            key={option}
            className="dropdown_item"
            onClick={() => {
              setSelected(option)
              setIsActive(false)
            }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default dropDown