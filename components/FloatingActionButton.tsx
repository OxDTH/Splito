"use client";

import { useState, useEffect } from "react";
import { ReceiptText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FloatingActionButtonProps {
  onClick?: () => void;
}

export function FloatingActionButton({ onClick }: FloatingActionButtonProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show full button when scrolling up or at top
      if (currentScrollY < lastScrollY || currentScrollY === 0) {
        setIsScrolled(false);
      } 
      // Show icon only when scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsScrolled(true);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Button
      className={`fixed bottom-20 md:bottom-6 right-6 z-40 rounded-full bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2 ${
        isScrolled ? 'h-12 w-12 px-0' : 'h-12 px-4'
      }`}
      onClick={onClick}
    >
      <ReceiptText className="h-5 w-5 text-white" />
      {!isScrolled && (
        <span className="text-white font-medium text-sm transition-opacity duration-300">
          Add expense
        </span>
      )}
    </Button>
  );
}