import { FaWhatsapp } from 'react-icons/fa';

const WhatsappButton: React.FC = () => {
  const handleWhatsappClick = () => {
    if (typeof navigator !== 'undefined' && navigator.userAgent.includes('WhatsApp')) {
      // WhatsApp is installed, open the app with a pre-filled message
      window.open(`whatsapp://send?phone=+971525866003&text=Hello, I need assistance.`, '_self');
    } else {
      // WhatsApp is not installed, open the web version in a new tab
      window.open('https://web.whatsapp.com/send?phone=+971525866003&text=Hello, I need assistance.', '_blank');
    }
  };
  return (
    <div className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full cursor-pointer" onClick={handleWhatsappClick}>
      <FaWhatsapp size={24} />
    </div>
  );
};

export default WhatsappButton;