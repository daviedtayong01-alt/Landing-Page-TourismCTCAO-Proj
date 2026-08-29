const FAVORITES_STORAGE_KEY =
  "koronadal-tourism-favorites";

const FAVORITES_CHANGED_EVENT =
  "koronadal:favorites-changed";

const EMPTY_FAVORITES: string[] = [];

let cachedFavorites: string[] | null = null;

export function subscribeToFavorites(
  callback: () => void,
): () => void {
  window.addEventListener(
    FAVORITES_CHANGED_EVENT,
    callback,
  );

  return () => {
    window.removeEventListener(
      FAVORITES_CHANGED_EVENT,
      callback,
    );
  };
}

export function getFavorites(): string[] {
  if (
    typeof window === "undefined"
  ) {
    return EMPTY_FAVORITES;
  }

  try {
    const raw =
      window.localStorage.getItem(
        FAVORITES_STORAGE_KEY,
      );

    if (!raw) {
      return EMPTY_FAVORITES;
    }

    const parsed: unknown =
      JSON.parse(raw);

    if (
      !Array.isArray(parsed) ||
      !parsed.every(
        (item) =>
          typeof item === "string",
      )
    ) {
      return EMPTY_FAVORITES;
    }

    return parsed;
  } catch {
    return EMPTY_FAVORITES;
  }
}

export function getFavoritesSnapshot(): string[] {
  if (cachedFavorites) {
    return cachedFavorites;
  }

  cachedFavorites = getFavorites();

  return cachedFavorites;
}

export function getServerFavoritesSnapshot(): string[] {
  return EMPTY_FAVORITES;
}

export function isFavorite(
  itemId: string,
): boolean {
  return getFavorites().includes(
    itemId,
  );
}

export function setFavorite(
  itemId: string,
  favorite: boolean,
): string[] {
  const current =
    getFavoritesSnapshot();

  const next = new Set(current);

  if (favorite) {
    next.add(itemId);
  } else {
    next.delete(itemId);
  }

  const result =
    Array.from(next);

  cachedFavorites = result;

  try {
    window.localStorage.setItem(
      FAVORITES_STORAGE_KEY,
      JSON.stringify(result),
    );
  } catch {
    /*
     * Favorites are enhancement state.
     * A storage failure must not break the page.
     */
  }

  window.dispatchEvent(
    new CustomEvent(
      FAVORITES_CHANGED_EVENT,
    ),
  );

  return result;
}

export function getFavoriteCount(): number {
  return getFavorites().length;
}
