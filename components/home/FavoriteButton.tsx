"use client";

import {
  Heart,
} from "lucide-react";

import {
  useCallback,
  useSyncExternalStore,
} from "react";

import {
  isFavorite,
  setFavorite,
  subscribeToFavorites,
} from "@/lib/favorites";

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
  const getSnapshot = useCallback(
    () => isFavorite(itemId),
    [itemId],
  );

  const favorite = useSyncExternalStore(
    subscribeToFavorites,
    getSnapshot,
    () => false,
  );

  function handleToggle() {
    const nextValue =
      !favorite;

    setFavorite(
      itemId,
      nextValue,
    );
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
      className={className}
    >
      <Heart
        aria-hidden="true"
        className={`${iconClassName} ${
          favorite
            ? "fill-current"
            : ""
        }`}
      />
    </button>
  );
}
