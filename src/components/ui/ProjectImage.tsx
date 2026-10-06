"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectImageData } from "@/data/projects";
import { cn } from "@/lib/cn";

interface ProjectImageProps {
  image?: ProjectImageData;
  title: string;
  sizes: string;
  fit?: "cover" | "contain";
  priority?: boolean;
  className?: string;
}

/**
 * Renders a project image, or a clean typographic placeholder when no image
 * is set (or when the image fails to load).
 * - Local paths ("/images/...") use next/image for automatic optimisation.
 * - Remote URLs (Behance thumbnails) use a plain <img> so they keep working
 *   without extra hosting configuration.
 */
export function ProjectImage({
  image,
  title,
  sizes,
  fit = "cover",
  priority = false,
  className,
}: ProjectImageProps) {
  const [failed, setFailed] = useState(false);
  const fitClass = fit === "cover" ? "object-cover" : "object-contain";

  if (!image || failed) {
    return (
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-end bg-gradient-to-br from-navy-700 via-navy-800 to-navy-950 p-5"
      >
        <div className="bg-grid-sm absolute inset-0 opacity-70" />
        <span className="relative font-display text-2xl font-semibold leading-tight text-white/85">
          {title}
        </span>
      </div>
    );
  }

  if (image.src.startsWith("http")) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={image.src}
        alt={image.alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
        className={cn("absolute inset-0 h-full w-full", fitClass, className)}
      />
    );
  }

  return (
    <Image
      key={image.src}
      src={image.src}
      alt={image.alt}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
      className={cn(fitClass, className)}
    />
  );
}
