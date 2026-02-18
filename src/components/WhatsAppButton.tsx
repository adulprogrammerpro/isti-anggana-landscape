import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/6285648276200"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5d] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-[#fff]" fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;
