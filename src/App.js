/** @format */

import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step === 1) return;
    setStep((s) => s - 1);
  }

  function handleNext() {
    if (step === 3) return;
    setStep((s) => s + 1);
  }

  return (
    <>
      <button onClick={() => setIsOpen((s) => !s)} className="close">
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <Button
              textColor="#fff"
              backgroundColor="#7950f2"
              emoji="👈🏻"
              onClick={handlePrevious}
            >
              <span>👈🏻</span> Previous
            </Button>

            <Button
              textColor="#fff"
              backgroundColor="#7950f2"
              emoji="👉🏻"
              onClick={handleNext}
            >
              Next <span>👉🏻</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ children, textColor, backgroundColor, onClick }) {
  return (
    <button
      style={{ color: textColor, backgroundColor: backgroundColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
