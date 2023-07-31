declare namespace NodeJS {
  interface ProcessEnv extends Env {
    readonly NEXT_PUBLIC_FIREBASE_API_KEY: string
    readonly NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: string
    readonly NEXT_PUBLIC_FIREBASE_PROJECT_ID: string
    readonly NEXT_PUBLIC_FIREBASE_STORAGE_BAKET: string
    readonly NEXT_PUBLIC_FIREBASE_MESSAGE_SENDER_ID: string
    readonly NEXT_PUBLIC_FIREBASE_APP_ID: string
    readonly NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL: string
    readonly NEXT_PUBLIC_FIREBASE_PRIVATE_KEY: string
    readonly JWT_TOKEN_ALGORITHM: string
    readonly API_BASE_URL: string
    readonly HASURA_GRAPHQL_ENDPOINT: string
    readonly HASURA_ADMIN_SECRET: string
    readonly HASURA_GRAPHQL_JWT_SECRET: string
    readonly NEXTAUTH_URL: string
    readonly GOOGLE_CLOUD_CLIENT_ID: string
    readonly GOOGLE_CLOUD_CLIENT_SECRET: string
  }
}
