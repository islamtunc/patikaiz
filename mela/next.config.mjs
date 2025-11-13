// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah ve ala alihi ve sahbihi ecmain
// Allahumme salli ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Allah u Ekber, Allahu Ekber, Allahu Ekber
// La ilahe illallah, Allahu Ekber, Allahu Ekber, ve lillahi'l-hamd


/** @type {import('next').NextConfig} */
const vebijêrkênNextê = {
  // Taybetmendiyên nû
  experimental: {
    // Kiryarên serverê
    serverActions: {
      bodySizeLimit: '2mb'
    }
  },
  
  // Mîhengên wêneyan
  images: {
    domains: ['localhost'],
    // Tenê formatên ku Next.js destûr dide
    formats: ['image/avif', 'image/webp']
  },
  
  // Mîhengên TypeScriptê
  typescript: {
    // Xeletiyên avakirinê nîşan bide
    ignoreBuildErrors: false
  },

  // Mîhengên webpack
  webpack: (config) => {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  },

  // Rewrites
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://www.patikaiz.com/api/:path*'
      }
    ]
  }
}

export default vebijêrkênNextê



