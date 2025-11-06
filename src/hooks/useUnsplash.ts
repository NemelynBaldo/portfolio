export type UnsplashResult = {
  url: string
  alt: string
}

export async function fetchUnsplash(query = 'black and white art'): Promise<UnsplashResult | null> {
  const key = import.meta.env.VITE_UNSPLASH_ACCESS_KEY
  if (!key) return null

  try {
    const res = await fetch(
      `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&orientation=landscape&content_filter=high&count=1`,
      { headers: { Authorization: `Client-ID ${key}` } }
    )
    if (!res.ok) return null
    const data = await res.json()
    const item = Array.isArray(data) ? data[0] : data
    return { url: item?.urls?.regular ?? '', alt: item?.alt_description ?? 'Unsplash image' }
  } catch {
    return null
  }
}
