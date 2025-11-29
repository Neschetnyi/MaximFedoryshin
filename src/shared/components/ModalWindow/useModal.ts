import { useEffect, useState } from "react";

export const useModal = <T = string>() => {
  const [modalData, setModalData] = useState<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  const openModal = (data: T) => {
    setModalData(data);
    setTimeout(() => setIsVisible(true), 10); // чтобы transition сработал
  };

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => setModalData(null), 200); // подождать завершения transition
  };

  return {
    modalData,
    isVisible,
    openModal,
    closeModal,
  };
};
