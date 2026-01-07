"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import {
  FacebookShareButton,
  FacebookMessengerShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  XIcon,
  WhatsappIcon,
  RedditIcon,
  EmailIcon,
} from "react-share";
import { useEffect } from "react";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
  message: string;
  modalTitle?: string;
}

export function ShareModal({
  isOpen,
  onClose,
  url,
  title,
  message,
  modalTitle = "Share Our Mission",
}: ShareModalProps) {
  const iconSize = 56;

  // Close on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Title */}
              <h2 className="text-xl font-bold text-black mb-6">
                {modalTitle}
              </h2>

              {/* Share buttons grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center cursor-pointer">
                  <TwitterShareButton url={url} title={message}>
                    <XIcon size={iconSize} round />
                  </TwitterShareButton>
                  <p className="text-xs mt-2 text-gray-600">X</p>
                </div>

                <div className="flex flex-col items-center cursor-pointer">
                  <RedditShareButton url={url} title={title}>
                    <RedditIcon size={iconSize} round />
                  </RedditShareButton>
                  <p className="text-xs mt-2 text-gray-600">Reddit</p>
                </div>

                <div className="flex flex-col items-center cursor-pointer">
                  <EmailShareButton url={url} subject={title} body={message}>
                    <EmailIcon size={iconSize} round />
                  </EmailShareButton>
                  <p className="text-xs mt-2 text-gray-600">Email</p>
                </div>

                <div className="flex flex-col items-center cursor-pointer">
                  <WhatsappShareButton url={url} title={message}>
                    <WhatsappIcon size={iconSize} round />
                  </WhatsappShareButton>
                  <p className="text-xs mt-2 text-gray-600">WhatsApp</p>
                </div>

                <div className="flex flex-col items-center cursor-pointer">
                  <FacebookShareButton url={url} hashtag="#ThousandMadleens">
                    <FacebookIcon size={iconSize} round />
                  </FacebookShareButton>
                  <p className="text-xs mt-2 text-gray-600">Facebook</p>
                </div>

                <div className="flex flex-col items-center cursor-pointer">
                  <FacebookMessengerShareButton url={url} appId="">
                    <FacebookMessengerIcon size={iconSize} round />
                  </FacebookMessengerShareButton>
                  <p className="text-xs mt-2 text-gray-600">Messenger</p>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
