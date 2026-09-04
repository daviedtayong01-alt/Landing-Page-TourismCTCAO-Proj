"use client";

import { Heart } from "lucide-react";

import { useCallback, useSyncExternalStore } from "react";

import { isFavorite, setFavorite, subscribeToFavorites } from "@/lib/favorites";

interface FavoriteButtonProps {
  itemId: string;
  label: string;
  className?: string;
  iconClassName?: string;
}

export function FavoriteButton({
  itemId,
  label,
  className = "",
  iconClassName = "size-4",
}: FavoriteButtonProps) {
  const getSnapshot = useCallback(() => isFavorite(itemId), [itemId]);

  const favorite = useSyncExternalStore(
    subscribeToFavorites,
    getSnapshot,
    () => false,
  );

  function handleToggle() {
    setFavorite(itemId, !favorite);
  }

  return (
    <button
      type="button"
      aria-label={
        favorite
          ? `Remove ${label} from favorites`
          : `Add ${label} to favorites`
      }
      aria-pressed={favorite}
      onClick={handleToggle}
      className={[
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-tourism-pink",
        "focus-visible:ring-offset-2",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Heart
        aria-hidden="true"
        className={`${iconClassName} ${favorite ? "fill-current" : ""}`}
      />
    </button>
  );
}
