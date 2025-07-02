import React from "react";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  outline?: boolean;
  primary?: boolean;
  disabled?: boolean;
}

const outlineClasses = "text-gray-700 border-gray-300 hover:border-gray-500 hover:text-gray-900 active:bg-gray-200 active:border-gray-600";
const primaryClasses = "bg-[#6E40D7] text-white hover:bg-[#5A34B0] active:bg-[#4D2B99]";

export function Button({children, onClick, outline, primary, disabled}: Props) {

  return (
    <>
      <button
        onClick={onClick}
        className={clsx(
          "border-1 rounded-lg font-semibold text-sm px-4 py-2.5",
          outline && outlineClasses,
          primary && primaryClasses,
          disabled && "opacity-50 cursor-not-allowed",
        )}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
}
