import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
  ],
  theme: {
    extend: {
      colors: {
        ...colors, 
      },
    },
  },
  plugins: [],
}

export default config
