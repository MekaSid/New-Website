import { NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    const galleryPath = join(process.cwd(), 'public', 'gallery');
    
    // Read all files in the gallery directory
    const files = await readdir(galleryPath);
    
    // Filter for image files
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    const imageFiles = files.filter(file => {
      const ext = file.toLowerCase().substring(file.lastIndexOf('.'));
      return imageExtensions.includes(ext);
    });
    
    // Create full paths for the images
    const imagePaths = imageFiles.map(file => `/gallery/${file}`);
    
    return NextResponse.json({ images: imagePaths });
  } catch (error) {
    console.error('Error reading gallery directory:', error);
    return NextResponse.json({ images: [] }, { status: 500 });
  }
} 