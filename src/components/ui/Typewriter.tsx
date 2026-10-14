"use client";

import React, { useState, useEffect } from "react";

const phrases = [
  "Assalamu Alaikum Jama'a Dr. Apple Gabanku Anan Shagwanmu Dake Internet",
  "Assalamu Alaikum Jama'a Dr. Apple Gabanku Anan Shagwanmu Dake Internet",
  "مرحباً بكم في متجر د. أبل، وجهتكم الفاخرة للتقنية",
  "欢迎来到 Dr. Apple，您的尊贵科技之选",
  "Welcome to Dr. Apple, your premium tech destination",
  "Bienvenue chez Dr. Apple, votre destination tech premium"
];

export default function Typewriter() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(70);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];
      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
      setTypingSpeed(isDeleting ? 25 : 55 + Math.random() * 30);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(400);
      }
    };
    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="min-h-[90px] md:min-h-[60px] flex items-center justify-center px-4">
      <p className="text-[22px] md:text-[30px] font-bold text-silver-900 dark:text-white transition-colors duration-300 text-center tracking-tight leading-tight max-w-4xl">
        {text}
        <span className="inline-block w-[3px] h-[28px] md:h-[34px] bg-deep-orange-500 ml-1 animate-pulse align-middle" />
      </p>
    </div>
  );
}
