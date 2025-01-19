/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'encrypted-tbn0.gstatic.com', // Dominio del cual proviene la imagen
                pathname: '/**', // Coincide con la ruta de las imágenes (puedes ajustarlo si la ruta varía)
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com', // Dominio del cual proviene la imagen
                pathname: '/**', // Coincide con la ruta de las imágenes (puedes ajustarlo si la ruta varía)
            },
            {
                protocol: 'https',
                hostname: 'codigofacilito.com', // Dominio del cual proviene la imagen
                pathname: '/**', // Coincide con la ruta de las imágenes (puedes ajustarlo si la ruta varía)
              },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com', // Dominio del cual proviene la imagen
                pathname: '/**', // Coincide con la ruta de las imágenes (puedes ajustarlo si la ruta varía)
            }
        ]
    },
};

export default nextConfig;
