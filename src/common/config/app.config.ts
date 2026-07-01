import { config } from 'dotenv';
config();

export const AppConfig = {
    APP_NAME: process.env.APP_NAME,
    APP_DEBUG: process.env.APP_DEBUG === 'true',
};
