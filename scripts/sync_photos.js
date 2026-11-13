/**
 * Photo Sync Script
 * Scans photos directory, ensures all images are cataloged in photos.json,
 * formatted strictly with "Gaddamunugu Frame XX" and "Gaddamunugu, India".
 */
const fs = require('fs');
const path = require('path');

const PHOTOS_DIR = path.join(__dirname, '..', 'photos', 'other');
const JSON_FILE = path.join(__dirname, '..', 'photos.json');

// 1. Read existing photos.json
let currentData = { photos: [] };
if (fs.existsSync(JSON_FILE)) {
  try {
    currentData = JSON.parse(fs.readFileSync(JSON_FILE, 'utf8'));
  } catch (err) {
    console.error('Error parsing photos.json:', err);
  }
}

// 2. Scan photos/other directory for image files
const validExts = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];
const files = fs.readdirSync(PHOTOS_DIR).filter(file => {
  const ext = path.extname(file).toLowerCase();
  return validExts.includes(ext);
});

// Natural sort order (post1.jpg, post2.jpg, ... post45.jpeg)
files.sort((a, b) => {
  const numA = parseInt(a.replace(/\D/g, ''), 10) || 0;
  const numB = parseInt(b.replace(/\D/g, ''), 10) || 0;
  return numA - numB;
});

console.log(`Found ${files.length} image files in photos/other`);

// 3. Rebuild sequential photos catalog
const categories = ['landscape', 'nature', 'atmosphere'];
const exifs = [
  '24mm · f/2.8 · 1/250s · ISO 100',
  '50mm · f/1.4 · 1/500s · ISO 50',
  '35mm · f/2.0 · 1/320s · ISO 100',
  '85mm · f/1.8 · 1/400s · ISO 64',
  '50mm · f/2.8 · 1/200s · ISO 100',
];

const updatedPhotos = files.map((file, idx) => {
  const num = String(idx + 1).padStart(2, '0');
  const existing = currentData.photos.find(p => p.src.includes(file));
  
  return {
    id: idx + 1,
    src: `photos/other/${file}`,
    title: `Gaddamunugu Frame ${num}`,
    category: existing ? existing.category : categories[idx % categories.length],
    location: 'Gaddamunugu, India',
    exif: existing ? existing.exif : exifs[idx % exifs.length],
    year: '2025',
    edition: 'Gaddamunugu Archive'
  };
});

// 4. Save updated photos.json
const output = { photos: updatedPhotos };
fs.writeFileSync(JSON_FILE, JSON.stringify(output, null, 2), 'utf8');

console.log(`✅ Successfully synced ${updatedPhotos.length} photos into photos.json`);
