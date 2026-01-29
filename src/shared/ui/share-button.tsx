"use client";

import { Share2 } from "lucide-react";
import { Button } from "./button";
import { useState } from "react";

export default function ShareButton() {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const sharePageUrl = async (url: string) => {
    try {
      await navigator.share({
        title: document.title,
        url,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const copyPageUrl = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    } catch (e) {
      console.error(e);
    }
  };

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.canShare({ title: document.title, url })) {
      await sharePageUrl(url);
    } else {
      await copyPageUrl(url);
    }
  };

  return (
    <Button variant="outline" className="gap-2" onClick={handleShare}>
      <Share2 />
      {isCopied ? "복사 완료!" : "공유하기"}
    </Button>
  );
}
