import Link from "next/link";
import Image from "next/image";

/**
 * Brand logo. Uses the official "integer8 SYSTEMS" wordmark (transparent PNG).
 */
export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Integer8 Systems home"
      className={`group inline-flex items-center focus-ring ${className}`}
    >
      <Image
        src="/logo.png"
        alt="Integer8 Systems"
        width={1489}
        height={504}
        priority
        className="h-9 w-auto"
      />
    </Link>
  );
}
