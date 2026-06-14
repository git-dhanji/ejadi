import { NextResponse } from 'next/server';

export interface CloudinaryResource {
    public_id: string;
    secure_url: string;
    width: number;
    height: number;
    format: string;
    folder: string;
}

/**
 * GET /api/gallery
 * Fetches all images from the gallery Cloudinary account (dl2qoste0)
 * using the Admin API. Server-side only — credentials never reach the client.
 */
export async function GET() {
    const cloudName = process.env.CLOUDINARY_GALLERY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_GALLERY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_GALLERY_API_SECRET;

    if (!cloudName || !apiKey || !apiSecret) {
        return NextResponse.json(
            { error: 'Cloudinary gallery credentials not configured.' },
            { status: 500 }
        );
    }

    try {
        // Use basic auth with Cloudinary Admin API
        const credentials = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');

        const response = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudName}/resources/image?max_results=100&resource_type=image`,
            {
                headers: {
                    Authorization: `Basic ${credentials}`,
                },
                // Cache for 5 minutes — images don't change often
                next: { revalidate: 300 },
            }
        );

        if (!response.ok) {
            const text = await response.text();
            console.error('Cloudinary API error:', text);
            return NextResponse.json(
                { error: 'Failed to fetch from Cloudinary.' },
                { status: response.status }
            );
        }

        const data = await response.json();
        const resources: CloudinaryResource[] = data.resources ?? [];

        return NextResponse.json({ resources });
    } catch (err) {
        console.error('Gallery fetch error:', err);
        return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
    }
}
