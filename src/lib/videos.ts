// Video URL helper function
// Supports both local paths and external URLs
// Set NEXT_PUBLIC_VIDEO_BASE_URL environment variable for external hosting

const getVideoUrl = (path: string): string => {
  // If path is already a full URL, return as-is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  // If NEXT_PUBLIC_VIDEO_BASE_URL is set, use it for external hosting
  const baseUrl = process.env.NEXT_PUBLIC_VIDEO_BASE_URL;
  if (baseUrl) {
    // Remove leading slash from path if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${baseUrl}/${cleanPath}`;
  }

  // Otherwise, use local path
  return path;
};

// Video data - Update these with your actual video paths
export const videoData = [
  {
    id: '1',
    title: 'Pizza Hut - Brand Campaign',
    description: 'Brand campaign video for Pizza Hut showcasing our creative video production capabilities',
    thumbnail: '/images/videos/placeholder.svg',
    videoPath: '/videos/1- Pizza Hut.mp4',
    category: 'brand-campaign',
  },
  {
    id: '2',
    title: 'Puma - Brand Campaign',
    description: 'Dynamic brand campaign video for Puma featuring our high-energy video production style',
    thumbnail: '/images/videos/placeholder.svg',
    videoPath: '/videos/2- Puma.mp4',
    category: 'brand-campaign',
  },
  {
    id: '3',
    title: 'Melrose Arch - Brand Campaign',
    description: 'Brand campaign showcasing Melrose Arch with our professional video production expertise',
    thumbnail: '/images/videos/placeholder.svg',
    videoPath: '/videos/3- Melrose Arch.mp4',
    category: 'brand-campaign',
  },
  {
    id: '4',
    title: 'Play Energy - Brand Campaign',
    description: 'Energetic brand campaign video for Play Energy demonstrating our creative vision',
    thumbnail: '/images/videos/placeholder.svg',
    videoPath: '/videos/4- Play Energy.mp4',
    category: 'brand-campaign',
  },
  {
    id: '5',
    title: 'Knorr Durban July Corporate Video',
    description: 'Corporate video for Knorr Durban July event, showcasing our corporate video production capabilities',
    thumbnail: '/images/videos/placeholder.svg',
    videoPath: '/videos/1- Knorr Durban July Corporate Video.mp4',
    category: 'corporate',
  },
  {
    id: '6',
    title: 'Knorr Cook-Off Highlight Video',
    description: 'Highlight video from the Knorr Cook-Off event, capturing the excitement and energy',
    thumbnail: '/images/videos/placeholder.svg',
    videoPath: '/videos/2- Knorr Cook-Off Highlight Video.mp4',
    category: 'corporate',
  },
];

// Export videos with resolved URLs
export const videos = videoData.map((video) => ({
  ...video,
  videoUrl: getVideoUrl(video.videoPath),
}));
