/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'vopper-academy.b-cdn.net', // Dominio del cual proviene la imagen
                pathname: '/**', // Coincide con la ruta de las imágenes (puedes ajustarlo si la ruta varía)
            },
            {
                protocol: 'https',
                hostname: 'thumbs.cdn.mdstrm.com', // Dominio del cual proviene la imagen
                pathname: '/**', // Coincide con la ruta de las imágenes (puedes ajustarlo si la ruta varía)
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com', // Dominio del cual proviene la imagen
                pathname: '/**', // Coincide con la ruta de las imágenes (puedes ajustarlo si la ruta varía)
            },
            {
                protocol: 'https',
                hostname: 'thumbs.cdn.mdstrm.com', // Dominio del cual proviene la imagen
                pathname: '/**', // Coincide con la ruta de las imágenes (puedes ajustarlo si la ruta varía)
            }
        ],
    },
    
};

export default nextConfig;
