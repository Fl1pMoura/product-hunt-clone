/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true, // ou false, se o redirecionamento não for permanente
      },
    ];
  },
  images: {
    domains: ['logospng.org', 'www.imagensempng.com.br'],
  },
};

export default nextConfig;
