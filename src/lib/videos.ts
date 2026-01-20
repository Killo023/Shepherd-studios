// Video URL helper function
// Supports both local paths, external URLs, and Google Drive links
// Set NEXT_PUBLIC_VIDEO_BASE_URL environment variable for external hosting

const extractGoogleDriveFileId = (url: string): string | null => {
  // Match Google Drive share link format: https://drive.google.com/file/d/FILE_ID/view
  const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
};

const convertGoogleDriveUrl = (url: string): string => {
  const fileId = extractGoogleDriveFileId(url);
  if (fileId) {
    // Use preview URL which works better for video streaming
    // This format allows video playback without triggering downloads
    return `https://drive.google.com/file/d/${fileId}/preview`;
  }
  return url;
};

// Helper to check if URL is Google Drive (for iframe embedding if needed)
export const isGoogleDriveUrl = (url: string): boolean => {
  return url.includes('drive.google.com');
};

// Get Google Drive preview URL for iframe embedding (alternative method)
export const getGoogleDrivePreviewUrl = (url: string): string | null => {
  const fileId = extractGoogleDriveFileId(url);
  if (fileId) {
    return `https://drive.google.com/file/d/${fileId}/preview`;
  }
  return null;
};

// Get Google Drive thumbnail URL
export const getGoogleDriveThumbnailUrl = (url: string, width: number = 1280, height: number = 720): string | null => {
  const fileId = extractGoogleDriveFileId(url);
  if (fileId) {
    // Google Drive thumbnail API - works for publicly shared files
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w${width}-h${height}`;
  }
  return null;
};

const getVideoUrl = (path: string): string => {
  // If path is already a full URL
  if (path.startsWith('http://') || path.startsWith('https://')) {
    // Check if it's a Google Drive URL and convert it
    if (path.includes('drive.google.com')) {
      return convertGoogleDriveUrl(path);
    }
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

// Video data - Google Drive hosted videos
export const videoData = [
  {
    id: '1',
    title: 'Pizza Hut - Brand Campaign',
    description: 'Brand campaign video for Pizza Hut showcasing our creative video production capabilities',
    thumbnail: '/images/videos/placeholder.svg',
    videoPath: 'https://drive.google.com/file/d/190WtYyk4GN2jk4-vmgFgDcuvN9K3a53j/view?usp=drive_link',
    category: 'brand-campaign',
  },
  {
    id: '2',
    title: 'Puma - Brand Campaign',
    description: 'Dynamic brand campaign video for Puma featuring our high-energy video production style',
    thumbnail: '/images/videos/placeholder.svg',
    videoPath: 'https://drive.google.com/file/d/1X0iaMau0O0NCMOx28TIGvt0EQ7mGkhJM/view?usp=drive_link',
    category: 'brand-campaign',
  },
  {
    id: '3',
    title: 'Melrose Arch - Brand Campaign',
    description: 'Brand campaign showcasing Melrose Arch with our professional video production expertise',
    thumbnail: '/images/videos/placeholder.svg',
    videoPath: 'https://drive.google.com/file/d/1sQ5Ik9O-qzTNFHwLGB9u5vEp6VUOWr91/view?usp=drive_link',
    category: 'brand-campaign',
  },
  {
    id: '4',
    title: 'Play Energy - Brand Campaign',
    description: 'Energetic brand campaign video for Play Energy demonstrating our creative vision',
    thumbnail: '/images/videos/placeholder.svg',
    videoPath: 'https://drive.google.com/file/d/10kwMsRjLPCAj1DyJ-tkoE3sI7ACC3e1P/view?usp=drive_link',
    category: 'brand-campaign',
  },
  {
    id: '5',
    title: 'Knorr Durban July Corporate Video',
    description: 'Corporate video for Knorr Durban July event, showcasing our corporate video production capabilities',
    thumbnail: '/images/videos/placeholder.svg',
    videoPath: 'https://drive.google.com/file/d/1DglaZt0o7_KLFzPn0DOHxynRVTBcxsKZ/view?usp=drive_link',
    category: 'corporate',
  },
  {
    id: '6',
    title: 'Knorr Cook-Off Highlight Video',
    description: 'Highlight video from the Knorr Cook-Off event, capturing the excitement and energy',
    thumbnail: '/images/videos/placeholder.svg',
    videoPath: 'https://drive.google.com/file/d/1DCyrBg1A4pyy8mIwm_CJLJJqhjeth3sa/view?usp=drive_link',
    category: 'corporate',
  },
];

// Export videos with resolved URLs
export const videos = videoData.map((video) => {
  const convertedUrl = getVideoUrl(video.videoPath);
  // Debug logging (remove in production)
  if (process.env.NODE_ENV === 'development') {
    console.log(`Video ${video.id} (${video.title}):`, {
      original: video.videoPath,
      converted: convertedUrl,
    });
  }
  return {
    ...video,
    videoUrl: convertedUrl,
  };
});
