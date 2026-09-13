import 'dotenv/config';

// Centralized environment configuration

function required(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const env = {
  baseUrl: required('BASE_URL', 'https://demo.realworld.show'),
  apiBaseUrl: required('API_BASE_URL', 'https://api.realworld.show/api'),
};
