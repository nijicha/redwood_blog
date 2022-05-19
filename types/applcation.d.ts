type Environment = 'development' | 'staging' | 'production'

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: Environment
      DEBUG_MODE: 'true' | 'false'
    }
  }
}

export { Environment }
