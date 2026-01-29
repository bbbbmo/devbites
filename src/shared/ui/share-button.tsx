"use client";

import { Share2 } from "lucide-react";
import { Button } from "./button";
import { useState } from "react";
import { AlertDialog } from "./alert-dialog";

export default function ShareButton() {
  const [isOpenAlertDialog, setIsOpenAlertDialog] = useState<boolean>(false);

  const openAlertDialog = () => {
    setIsOpenAlertDialog(true);
    setTimeout(() => {
      setIsOpenAlertDialog(false);
    }, 5000);
  };

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
      openAlertDialog();
    }
  };

  return (
    <>
      <Button variant="outline" className="gap-2" onClick={handleShare}>
        <Share2 />
        공유하기
      </Button>
      {isOpenAlertDialog && (
        <AlertDialog
          className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-muted"
          title="복사 완료!"
          description="페이지 주소가 클립보드에 복사되었습니다."
        />
      )}
    </>
  );
}
