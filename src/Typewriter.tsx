import { useEffect, useState } from "react";

export default function Typewriter({ words }: { words: string[] }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");

  useEffect(() => {
    const currentWordToType = words[currentWordIndex];
    let currentIndex = 0;
    let timeout: number;

    const typeNextCharacter = () => {
      if (currentIndex <= currentWordToType.length) {
        setCurrentWord(currentWordToType.slice(0, currentIndex));
        currentIndex++;

        // Delay between typing characters (random)
        timeout = setTimeout(typeNextCharacter, Math.random() * 200);
      } else {
        // Finished typing current word
        // setTyping(false);
        timeout = setTimeout(deleteNextCharacter, 1000);
      }
    };

    const deleteNextCharacter = () => {
      if (currentIndex >= 0) {
        setCurrentWord(currentWordToType.slice(0, currentIndex));
        currentIndex--;

        // Delay between deleting characters (random)
        timeout = setTimeout(deleteNextCharacter, Math.random() * 100 + 50);
      } else {
        // Finished deleting current word
        // setTyping(true);

        // Move to the next word
        setCurrentWordIndex((prevIndex) =>
          prevIndex < words.length - 1 ? prevIndex + 1 : 0,
        );

        // Delay before typing the next word
        timeout = setTimeout(typeNextCharacter, 1000);
      }
    };

    // Start typing the first word
    typeNextCharacter();

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [currentWordIndex, words]);

  return <span>{currentWord}</span>;
}
