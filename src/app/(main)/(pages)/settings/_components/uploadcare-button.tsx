"use client";
import React, { useEffect, useRef } from "react";
import * as LR from "@uploadcare/blocks";
import { useRouter } from "next/navigation";
import "@uploadcare/blocks/web/lr-file-uploader-regular.min.css";

type Props = {
  onUpload: (e: string) => any;
};

LR.registerBlocks(LR);

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter();
  const ctxProviderRef = useRef<
    typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
  >(null);

  useEffect(() => {
    const handleUpload = async (e: any) => {
      const file = await onUpload(e.detail.cdnUrl);
      if (file) {
        router.refresh();
      }
    };
    const currentRef = ctxProviderRef.current;
    if (currentRef) {
      currentRef.addEventListener("file-upload-success", handleUpload);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("file-upload-success", handleUpload);
      }
    };
  }, [onUpload, router]);
  return (
    <div>
      <style jsx>{`
        .my-config {
          --darkmode: 0;
          --h-accent: 223;
          --s-accent: 100%;
          --l-accent: 61%;
        }
      `}</style>
      <lr-config
        ctx-name="my-uploader"
        pubkey="fec31ce431fde1679ad2"
        max-local-file-size-bytes="10000000"
        img-only="true"
        source-list="local, url, camera, dropbox, facebook, gdrive, gphotos, instagram"
      ></lr-config>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.39.0/web/lr-file-uploader-regular.min.css"
      />
      <lr-file-uploader-regular
        ctx-name="my-uploader"
        class="my-config"
      ></lr-file-uploader-regular>
      <lr-upload-ctx-provider ctx-name="my-uploader" ref={ctxProviderRef} />
    </div>
  );
};

export default UploadCareButton;
