// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Gera uma pasta 'out' com o site estático
  output: 'export',

  // IMPORTANTE: Altere 'nome-do-repo' para o nome do seu repositório no GitHub
  basePath: '/dml',
  
  // Opcional: Desativa a otimização de imagens que depende de um servidor
  images: {
    unoptimized: true,
  },
};

export default nextConfig;