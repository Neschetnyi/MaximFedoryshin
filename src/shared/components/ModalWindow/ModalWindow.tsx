type ModalWindowType = {
  isVisible: boolean;
  closeModal: () => void;
  children: React.ReactNode;
};

const ModalWindow = ({ isVisible, closeModal, children }: ModalWindowType) => {
  return (
    <div
      className={`fixed inset-0 pt-[5vh] pb-[5vh] bg-black/85 backdrop-blur-lg flex items-center justify-center z-50 transition-opacity duration-200 ${
        isVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={closeModal}
    >
      <div
        className={`relative flex items-center justify-center max-w-[95vw] max-h-[90vh] p-2 rounded-2xl transition-transform duration-200 ${
          isVisible ? "scale-100" : "scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 bg-white/80 rounded-full px-2 py-1 text-black text-lg font-bold hover:bg-white transition"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
