import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT | 5000;
export const MONGO_URI = process.env.MONGO_URI;
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

if (!MONGO_URI || !JWT_SECRET_KEY) {
    console.error('Please check environment variables');
    process.exit(1);
}
