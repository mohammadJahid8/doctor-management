/** @type {import('next').NextConfig} */
// next.config.mjs
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["wp1.themevibrant.com"],
  },
  webpack: (config) => {
    config.resolve.alias['@'] = __dirname
    return config
  },
}

export default nextConfig
