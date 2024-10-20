import React, { useState, useEffect } from "react";

const TypingText = () => {
  const [firstLine, setFirstLine] = useState("");
  const [secondLine, setSecondLine] = useState("");
  const [currentLine, setCurrentLine] = useState(0); // 0 = firstLine, 1 = secondLine

  const lines = ["Coding is not just a job", "It's an Adventure"];
  const typingSpeed = 100; // Speed of typing in milliseconds
  const pauseBetweenLines = 1000; // Pause between typing lines

  useEffect(() => {
    let charIndex = 0;
    let isTypingFirstLine = currentLine === 0;
    let currentText = isTypingFirstLine ? lines[0] : lines[1];

    const typeText = () => {
      if (charIndex <= currentText.length) {
        if (isTypingFirstLine) {
          setFirstLine(currentText.slice(0, charIndex));
        } else {
          setSecondLine(currentText.slice(0, charIndex));
        }
        charIndex++;
      } else {
        // Move to the next line or restart the process
        setTimeout(() => {
          if (isTypingFirstLine) {
            setCurrentLine(1);
          } else {
            // Reset and start over
            setFirstLine("");
            setSecondLine("");
            setCurrentLine(0);
          }
        }, pauseBetweenLines);
      }

      setTimeout(typeText, typingSpeed);
    };

    const timer = setTimeout(typeText, typingSpeed); // Start typing effect
    return () => clearTimeout(timer); // Cleanup timer when component unmounts
  }, [currentLine]); // Retrigger effect when currentLine changes

  return (
    <div className="text-center">
      <h1 className="text-6xl font-bold py-5 leading-snug">
        {firstLine}
      </h1>
      <h1 className="text-6xl font-bold py-5 leading-snug">
        {secondLine}
      </h1>
    </div>
  );
};

export default TypingText;
