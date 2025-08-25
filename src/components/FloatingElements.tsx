import React from 'react';
import { Code2, Palette, Zap, Cpu, Database, Globe } from 'lucide-react';

const FloatingElements: React.FC = () => {
  const elements = [
    { Icon: Code2, delay: '0s', position: 'top-20 left-10' },
    { Icon: Palette, delay: '2s', position: 'top-40 right-20' },
    { Icon: Zap, delay: '4s', position: 'top-60 left-1/4' },
    { Icon: Cpu, delay: '1s', position: 'bottom-40 right-10' },
    { Icon: Database, delay: '3s', position: 'bottom-60 left-20' },
    { Icon: Globe, delay: '5s', position: 'bottom-20 right-1/3' }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map(({ Icon, delay, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} opacity-10 dark:opacity-5`}
          style={{
            animation: `float 6s ease-in-out infinite`,
            animationDelay: delay
          }}
        >
          <Icon size={40} className="text-blue-600" />
        </div>
      ))}
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

export default FloatingElements;