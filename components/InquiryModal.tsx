"use client";

import React, { useState } from "react";
import { X, Send, ShoppingBag } from "lucide-react";

export interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  farmerName: string;
}

export default function InquiryModal({
  isOpen,
  onClose,
  productName,
  farmerName,
}: InquiryModalProps) {
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quantity || !message) {
      alert("Please fill in all the details.");
      return;
    }

    setIsSubmitting(true);

    // Mock submission latency
    setTimeout(() => {
      alert(`Inquiry sent successfully for ${quantity} quintals of ${productName} to ${farmerName}!`);
      setIsSubmitting(false);
      setQuantity("");
      setMessage("");
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog Content Card */}
      <div
        className="relative w-full max-w-md overflow-hidden bg-white rounded-3xl shadow-2xl border border-slate-100 transform scale-100 transition-all duration-300 z-10"
        onClick={(e) => e.stopPropagation()} // Prevent click outside events
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-gradient-to-r from-green-50/30 to-white">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 bg-green-50 rounded-xl flex items-center justify-center text-green-600 border border-green-100/50">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-800 text-sm md:text-base leading-tight">
                Send Inquiry to Farmer
              </h4>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                {farmerName} &bull; {productName}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors cursor-pointer"
            aria-label="Close inquiry dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit}>
          <div className="p-6 flex flex-col gap-5">
            {/* Quantity Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="quantity" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Required Quantity (in quintals)
              </label>
              <input
                type="number"
                id="quantity"
                placeholder="e.g. 50"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors"
              />
            </div>

            {/* Message Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Inquiry Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder={`Hi ${farmerName}, I am interested in buying ${productName}...`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors resize-none"
              />
            </div>
          </div>

          {/* Modal Actions Footer */}
          <div className="flex gap-3 px-6 py-4 bg-slate-50 border-t border-slate-100 justify-end">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="px-4 py-2.5 border border-slate-200 hover:bg-slate-100 disabled:opacity-50 rounded-xl text-sm font-semibold text-slate-600 hover:text-slate-800 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 disabled:opacity-70 text-white rounded-xl text-sm font-semibold transition-all shadow-md shadow-green-500/10 hover:shadow-lg cursor-pointer"
            >
              <Send className="h-4 w-4 shrink-0" />
              <span>{isSubmitting ? "Sending..." : "Send Inquiry"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
