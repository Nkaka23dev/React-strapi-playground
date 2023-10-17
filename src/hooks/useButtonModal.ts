/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useResizeDetector } from "./useResizeDetector";

export const useButtonModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  useResizeDetector();
  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  };
};
