"use client";

import React, { useState, useEffect } from "react";

const hausaGreeting = "Assalamu Alaikum Jama'a Alhaji Dr Apple Gabanku Anan Shagonmu Dake Yanar Gizo";
const phrases = [
  ...Array(3).fill(hausaGreeting),
  "مرحباً بكم في متجر د. أبل، وجهتكم الفاخرة للتقنية",
  "欢迎来到 Dr. Apple，您的尊贵科技之选",
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
      setTypingSpeed(isDeleting ? 20 : 40 + Math.random() * 30);
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(300);
      }
    };
    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="w-full h-[110px] sm:h-[130px] md:h-[150px] flex items-center justify-center overflow-hidden px-2">
      <p className="text-[24px] sm:text-[34px] md:text-[44px] lg:text-[50px] font-serif font-bold text-silver-900 dark:text-white transition-colors duration-300 text-center tracking-tight leading-[1.15] max-w-5xl">
        {text}
        <span className="inline-block w-[3px] h-[28px] sm:h-[38px] md:h-[48px] bg-deep-orange-500 ml-2 animate-pulse align-middle" />
      </p>
    </div>
  );
}
