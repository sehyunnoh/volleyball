import { useEffect, useState } from 'react'
import type { Video } from '../types'
import { embedUrl, thumbnailUrl, watchUrl } from '../lib/youtube'

function useOnline(): boolean {
  const [online, setOnline] = useState(() => navigator.onLine)
  useEffect(() => {
    const on = () => setOnline(true)
    const off = () => setOnline(false)
    window.addEventListener('online', on)
    window.addEventListener('offline', off)
    return () => {
      window.removeEventListener('online', on)
      window.removeEventListener('offline', off)
    }
  }, [])
  return online
}

interface Props {
  video: Video
  /** The detail page video is large; extra videos render compact. */
  compact?: boolean
}

/**
 * A thumbnail that becomes an iframe only when tapped. Loading YouTube up front
 * would cost hundreds of KB per video before anyone asks to watch (7.3).
 */
export function VideoFacade({ video, compact = false }: Props) {
  const [playing, setPlaying] = useState(false)
  const online = useOnline()

  return (
    <figure className="m-0">
      <div className="bg-rule relative aspect-video w-full overflow-hidden">
        {playing ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={embedUrl(video)}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            disabled={!online}
            className="group absolute inset-0 h-full w-full cursor-pointer disabled:cursor-not-allowed"
            aria-label={online ? `Play: ${video.title}` : 'You are offline — video cannot play'}
          >
            <img
              src={thumbnailUrl(video)}
              alt=""
              loading="lazy"
              decoding="async"
              /* hqdefault is 4:3 with letterbox bars; object-cover crops them
                 back to exactly the 16:9 frame. */
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/5" />
            <span
              className={`absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-transform group-hover:scale-105 ${
                compact ? 'h-12 w-12' : 'h-16 w-16'
              } ${online ? 'bg-accent text-on-accent' : 'bg-ink-3 text-paper'}`}
            >
              {online ? (
                <svg
                  viewBox="0 0 24 24"
                  className={compact ? 'ml-0.5 h-5 w-5' : 'ml-1 h-7 w-7'}
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M3 3l18 18M12 18h.01M5 12.5a10 10 0 013-2M2 8.8a15 15 0 015-3.1M19 12.5a10 10 0 00-6-2.4M22 8.8a15 15 0 00-6.3-3.5" />
                </svg>
              )}
            </span>
          </button>
        )}
      </div>

      <figcaption className="border-rule text-ink-3 mt-1.5 border-t pt-1.5 text-[12.5px] leading-snug">
        {/* Title in text, not only on the thumbnail (7.4). */}
        <span className="text-ink-2">{video.title}</span>
        <span aria-hidden="true"> · </span>
        <span>{video.channel}</span>{' '}
        <a
          href={watchUrl(video)}
          target="_blank"
          rel="noreferrer"
          className="text-accent whitespace-nowrap underline underline-offset-2"
        >
          Open on YouTube
        </a>
        {!online && !playing && (
          <span className="text-ink-2 mt-1 block">
            You are offline. The notes below still work; the video needs a connection.
          </span>
        )}
      </figcaption>
    </figure>
  )
}
