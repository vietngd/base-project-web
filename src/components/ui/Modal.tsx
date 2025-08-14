"use client";

import React, { useEffect } from "react";
import { ModalProps } from "@/interfaces/components";
import { cn } from "@/helpers/utils/cn";
import { useHydration } from "@/hooks/useHydration";

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      className,
      isOpen,
      onClose,
      title,
      size = "md",
      closeOnOverlayClick = true,
      closeOnEscape = true,
      children,
      ...props
    },
    ref
  ) => {
    const mounted = useHydration();

    useEffect(() => {
      if (!mounted) return;

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape" && closeOnEscape) {
          onClose();
        }
      };

      if (isOpen) {
        document.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";
      }

      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.body.style.overflow = "unset";
      };
    }, [isOpen, onClose, closeOnEscape, mounted]);

    const handleOverlayClick = (event: React.MouseEvent) => {
      if (event.target === event.currentTarget && closeOnOverlayClick) {
        onClose();
      }
    };

    const sizeClasses = {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      full: "max-w-full mx-4",
    };

    // Don't render anything on the server if not mounted
    if (!mounted || !isOpen) return null;

    return (
      <div className='fixed inset-0 z-50 overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4'>
          {/* Backdrop */}
          <div
            className='fixed inset-0 bg-black bg-opacity-50 transition-opacity'
            onClick={handleOverlayClick}
          />

          {/* Modal */}
          <div
            ref={ref}
            className={cn(
              "relative bg-white rounded-lg shadow-xl w-full",
              sizeClasses[size],
              className
            )}
            {...props}
          >
            {/* Header */}
            {(title || closeOnOverlayClick) && (
              <div className='flex items-center justify-between p-6 border-b border-gray-200'>
                {title && <h3 className='text-lg font-semibold text-gray-900'>{title}</h3>}
                {closeOnOverlayClick && (
                  <button
                    onClick={onClose}
                    className='text-gray-400 hover:text-gray-600 transition-colors'
                    aria-label='Close modal'
                  >
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                )}
              </div>
            )}

            {/* Content */}
            <div className='p-6'>{children}</div>
          </div>
        </div>
      </div>
    );
  }
);

Modal.displayName = "Modal";

export default Modal;
