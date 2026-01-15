-- Create media table for storing images
CREATE TABLE IF NOT EXISTS media (
  id TEXT PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  image_data TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create video_embeds table for YouTube videos
CREATE TABLE IF NOT EXISTS video_embeds (
  id TEXT PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  url TEXT NOT NULL,
  title TEXT,
  duration TEXT,
  speaker TEXT,
  thumbnail TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create content_cards table for action cards
CREATE TABLE IF NOT EXISTS content_cards (
  id TEXT PRIMARY KEY,
  position INTEGER UNIQUE NOT NULL,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  image_data TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_media_key ON media(key);
CREATE INDEX IF NOT EXISTS idx_video_embeds_key ON video_embeds(key);
CREATE INDEX IF NOT EXISTS idx_content_cards_position ON content_cards(position);
