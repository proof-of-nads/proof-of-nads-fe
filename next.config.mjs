/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/profile",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
