import Link from "next/link";

interface BackButtonProps {
  href: string;
  text: string;
  className?: string;
}

export default function BackButton({
  href,
  text,
  className = "",
}: BackButtonProps) {
  return (
    <div className={`flex justify-start ${className}`}>
      <Link
        href={href}
        className="text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-1 cursor-pointer"
      >
        &larr; {text}
      </Link>
    </div>
  );
}
