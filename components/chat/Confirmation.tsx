// components/chat/Confirmation.tsx
"use client";

import Button from "@/components/interactions/Button";

type ConfirmationProps = {
  onConfirm: () => void;
  onCancel: () => void;
};

export default function Confirmation({ onConfirm, onCancel }: ConfirmationProps) {
    return (
        <div className="absolute inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg text-center w-80">
            <p className="mb-4 font-medium text-black">
              Are you sure you want to end the chat?
            </p>
            <div className="flex justify-center gap-4">
              <Button
                importance="primary"
                className="px-4 py-2"
                onClick={onConfirm}
              >
                Yes
              </Button>
              <Button
                importance="secondary"
                className="px-4 py-2"
                onClick={onCancel}
              >
                No
              </Button>
            </div>
          </div>
        </div>
    );
}
