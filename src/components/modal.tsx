import React, { useState, FC, ReactNode } from 'react';

interface ModalProps {
  title: string;
  content: ReactNode;
  show: boolean;
  onHide: () => void;
}

const Modal: FC<ModalProps> = ({ title, content, show, onHide }) => {
  return (
    <>
      {show && (
        <>
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">{title}</h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={onHide}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                <div className="p-6 space-y-6">{content}</div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
