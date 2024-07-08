import React from 'react';

type ChipProps = {
  label: string;
  onClick?: () => void;
};

export const Chip = ({ label, onClick }: ChipProps) => {
  return (
    <span
      onClick={onClick}
      className="inline-flex items-center bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-medium hover:bg-gray-300 cursor-pointer"
    >
      {label}
    </span>
  );
};
