/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROTECT_ID: process.env.FIREBASE_PROTECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSING_SENDER_ID: process.env.FIREBASE_MESSING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
  },
};

export default nextConfig;
