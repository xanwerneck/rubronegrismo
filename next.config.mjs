/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'conteudo.imguol.com.br',
      },
      {
        protocol: 'https',
        hostname: 'fla-media.mundobola.com',
      },
      {
        protocol: 'https',
        hostname: 'midias.agazeta.com.br',
      },
      {
        protocol: 'https',
        hostname: 'media.gettyimages.com',
      }
    ],
  },
};

export default nextConfig;
