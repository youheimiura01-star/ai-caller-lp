"use client";

import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import type { FaqItem as FaqItemType } from "@/lib/types";

interface FaqItemProps {
  item: FaqItemType;
  isOpen: boolean;
  onToggle: () => void;
}

export function FaqItem({ item, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer"
      >
        <span className="text-lg font-medium text-text-primary pr-4">
          {item.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-text-muted shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-text-secondary leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
