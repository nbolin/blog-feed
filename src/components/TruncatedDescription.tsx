"use client";

import { useEffect, useState } from "react";

interface TruncatedDescriptionProps {
  html: string;
  className?: string;
}

export default function TruncatedDescription({ html, className = "" }: TruncatedDescriptionProps) {
  const [textContent, setTextContent] = useState("");

  useEffect(() => {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = html;
    const extractedText = tempElement.textContent || tempElement.innerText || "";

    if (extractedText.length > 254) {
      const truncatedText = extractedText.substring(0, 254);
      const lastSpaceIndex = truncatedText.lastIndexOf(" "); // Find last space before cutoff
      setTextContent(lastSpaceIndex > 230 ? `${truncatedText.substring(0, lastSpaceIndex)}...` : truncatedText + "...");
    } else {
      setTextContent(extractedText);
    }
  }, [html]);

  return <p className={className}>{textContent}</p>;
}
