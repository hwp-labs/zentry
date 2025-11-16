"use client";

import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "lucide-react";

interface Props {
  href?: string;
}

export const GoBackButton: React.FC<Props> = ({ href }) => {
  const router = useRouter();
  const handleClick = () => (href ? router.push(href) : router.back());
  // RENDER
  return (
    <button
      onClick={handleClick}
      className="absolute left-5 top-5 flex items-center gap-2"
    >
      <i className="flex items-center justify-center">
        <ChevronLeftIcon />
      </i>
      <p className="whitespace-nowrap font-semibold">Back</p>
    </button>
  );
};
