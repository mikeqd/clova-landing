import React, { useState, useEffect } from "react";

interface TypewriterProps {
  words: string[];
  speed?: number; // Typing speed in milliseconds
  delay?: number; // Delay before switching to the next word
}

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  speed = 200,
  delay = 2000,
}) => {
  const [text, setText] = useState<string>("");
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [isTyping] = useState<boolean>(true);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping && !isDeleting) {
      // Typing the word
      if (text.length < words[wordIndex].length) {
        timeout = setTimeout(() => {
          setText(words[wordIndex].substring(0, text.length + 1));
        }, speed);
      } else {
        // Word is fully typed, wait before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
      }
    } else if (isDeleting) {
      // Deleting the word
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(words[wordIndex].substring(0, text.length - 1));
        }, speed / 2); // Delete faster than typing
      } else {
        // Word is fully deleted, move to next word
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, wordIndex, isTyping, isDeleting, words, speed, delay]);

  return (
    <span className="bg-gradient-to-r from-[#7ED957] to-[#C9E265] bg-clip-text text-transparent font-bold">
      {text}
    </span>
  );
};

export default Typewriter;
