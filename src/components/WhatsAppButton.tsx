import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const WhatsAppButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isVisible = window.scrollY > 100;
      setVisible(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

//   const handleClick = () => {
//     window.open('https://wa.me/1234567890', '_blank'); // Replace with your WhatsApp number
//   };

  return (
    <Button
    //   onClick={handleClick}
      className={cn(
        'fixed right-8 z-50 bg-green-500 hover:bg-green-600 rounded-full p-3 shadow-lg transition-all duration-300 transform',
        visible
          ? 'bottom-20 translate-y-0 opacity-100'
          : 'bottom-0 translate-y-16 opacity-0'
      )}
    >
      <MessageCircle className="h-6 w-6 text-white" />
      <span className="">Start chatting</span>
    </Button>
  );
};

export default WhatsAppButton;