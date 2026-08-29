"use client";

import Image, {
  type ImageProps,
} from "next/image";
import { useState } from "react";

interface TourismImageProps
  extends Omit<
    ImageProps,
    "src" | "alt" | "fill"
  > {
  src: string | null;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  sizes?: string;
  priority?: boolean;
}

export function TourismImage({
  src,
  alt,
  className = "",
  fallbackLabel = "Approved tourism photography pending",
  sizes = "100vw",
  priority = false,
  ...props
}: TourismImageProps) {
  const [hasError, setHasError] =
    useState(false);

  if (!src || hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`absolute inset-0 overflow-hidden bg-[linear-gradient(135deg,var(--tourism-navy),var(--tourism-navy-dark))] ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(245,43,145,.30),transparent_34%)]" />

        <div className="relative flex h-full items-center justify-center px-6 text-center">
          <span className="max-w-[220px] text-[8px] font-bold uppercase tracking-[0.14em] text-white/65">
            {fallbackLabel}
          </span>
        </div>
      </div>
    );
  }

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      onError={() =>
        setHasError(true)
      }
      className={`object-cover ${className}`}
    />
  );
}
