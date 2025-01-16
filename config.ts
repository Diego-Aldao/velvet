// config.ts
interface Config {
  apiKey: string;
}

if (!process.env.NEXT_PUBLIC_API_KEY) {
  throw new Error(
    "La variable NEXT_PUBLIC_API_KEY no está definida en el entorno"
  );
}

const config: Config = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
};

export default config;
