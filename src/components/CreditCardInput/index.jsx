
import React, { useRef, useState } from 'react';
import "./style.css"

const CreditCardInput = () => {
  const inputRef = useRef();
  const [showWarning, setShowWarning] = useState(false);

  const handleInputChange = (index, e) => {
    const value = e.target.value;

    if (/^[0-9]*$/.test(value) && value.length <= 4) { // určuje, že pole bude obsahovat jen číslice
      const nextIndex = index + 1;
      if (nextIndex < 4 && value.length === 4) {
        inputRef.current.children[nextIndex].focus();
      }
      setShowWarning(false); // resetuje upozornění, když je input číselný
    } else {
      setShowWarning(true); // ukáže upozornění, když není input číselný
    }
  };

  return (
    <div>
      <div className="inputs" ref={inputRef}>
        {[0, 1, 2, 3].map((index) => (
          <input
            key={index}
            type="text"
            maxLength="4"
            onChange={(e) => handleInputChange(index, e)}
          />
        ))}
      </div>
      {showWarning && <div className="warning">Prosím, vyplňte číselné hodnoty</div>}
    </div>
  );
};

export default CreditCardInput;





