/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'vopper-academy.b-cdn.net', // Dominio del cual proviene la imagen
                pathname: '/**', // Coincide con la ruta de las imágenes (puedes ajustarlo si la ruta varía)
            }
        ],
    },
    
};

export default nextConfig;
