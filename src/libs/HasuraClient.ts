import { GraphQLClient } from 'graphql-request'
import { getSdk } from '~/src/graphql/generated'

export const createHasuraClient = (header?: ConstructorParameters<typeof GraphQLClient>[1]) => {
  const client = new GraphQLClient(process.env.HASURA_GRAPHQL_ENDPOINT || '', header)
  return getSdk(client)
}

export const getTokenHeader = (token: string): ConstructorParameters<typeof GraphQLClient>[1] => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      'x-hasura-role': 'user',
    },
  }
}
