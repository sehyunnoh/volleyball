import type { Video } from '../types'

/**
 * `hqdefault` exists for every video and is small enough for a list of cards.
 * `maxresdefault` is missing on plenty of older uploads, so it is not worth it.
 */
export function thumbnailUrl(video: Video): string {
  return `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`
}

/** Only built when the user actually taps play (7.3). */
export function embedUrl(video: Video): string {
  const params = new URLSearchParams({
    autoplay: '1',
    rel: '0',
    modestbranding: '1',
    playsinline: '1',
  })
  if (video.startSeconds) params.set('start', String(video.startSeconds))
  return `https://www.youtube-nocookie.com/embed/${video.youtubeId}?${params}`
}

/** Fallback for when embedding is blocked, or the viewer prefers the app. */
export function watchUrl(video: Video): string {
  const t = video.startSeconds ? `&t=${video.startSeconds}` : ''
  return `https://www.youtube.com/watch?v=${video.youtubeId}${t}`
}
