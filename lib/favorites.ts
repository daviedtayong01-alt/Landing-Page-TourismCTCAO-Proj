const FAVORITES_STORAGE_KEY = "koronadal-tourism-favorites";

const FAVORITES_CHANGED_EVENT = "koronadal:favorites-changed";

const EMPTY_FAVORITES: string[] = [];

let cachedFavorites: string[] | null = null;

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

function readFavoritesFromStorage(): string[] {
  if (!isBrowser()) {
    return EMPTY_FAVORITES;
  }

  try {
    const raw = window.localStorage.getItem(FAVORITES_STORAGE_KEY);

    if (!raw) {
      return EMPTY_FAVORITES;
    }

    const parsed: unknown = JSON.parse(raw);

    if (
      !Array.isArray(parsed) ||
      !parsed.every((item) => typeof item === "string")
    ) {
      return EMPTY_FAVORITES;
    }

    return parsed;
  } catch {
    return EMPTY_FAVORITES;
  }
}

export function subscribeToFavorites(callback: () => void): () => void {
  if (!isBrowser()) {
    return () => {};
  }

  const handleStorageChange = (event: StorageEvent) => {
    if (
      event.storageArea === window.localStorage &&
      event.key === FAVORITES_STORAGE_KEY
    ) {
      cachedFavorites = readFavoritesFromStorage();
      callback();
    }
  };

  window.addEventListener(FAVORITES_CHANGED_EVENT, callback);

  window.addEventListener("storage", handleStorageChange);

  return () => {
    window.removeEventListener(FAVORITES_CHANGED_EVENT, callback);

    window.removeEventListener("storage", handleStorageChange);
  };
}

export function getFavorites(): string[] {
  if (cachedFavorites !== null) {
    return cachedFavorites;
  }

  cachedFavorites = readFavoritesFromStorage();

  return cachedFavorites;
}

export function getFavoritesSnapshot(): string[] {
  return getFavorites();
}

export function getServerFavoritesSnapshot(): string[] {
  return EMPTY_FAVORITES;
}

export function isFavorite(itemId: string): boolean {
  return getFavorites().includes(itemId);
}

export function setFavorite(itemId: string, favorite: boolean): string[] {
  if (!isBrowser()) {
    return getFavoritesSnapshot();
  }

  const current = getFavoritesSnapshot();
  const next = new Set(current);

  if (favorite) {
    next.add(itemId);
  } else {
    next.delete(itemId);
  }

  const result = Array.from(next);

  cachedFavorites = result;

  try {
    window.localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(result));
  } catch {
    /*
     * Favorites are enhancement state.
     * A storage failure must not break the page.
     */
  }

  window.dispatchEvent(new CustomEvent(FAVORITES_CHANGED_EVENT));

  return result;
}

export function getFavoriteCount(): number {
  return getFavoritesSnapshot().length;
}
