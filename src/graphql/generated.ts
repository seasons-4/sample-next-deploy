import { GraphQLClient } from 'graphql-request'
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types'
import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  timestamptz: { input: string; output: string }
  timetz: { input: any; output: any }
  uuid: { input: string; output: string }
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']['input']>
  _gt?: InputMaybe<Scalars['String']['input']>
  _gte?: InputMaybe<Scalars['String']['input']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>
  _in?: InputMaybe<Array<Scalars['String']['input']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>
  _lt?: InputMaybe<Scalars['String']['input']>
  _lte?: InputMaybe<Scalars['String']['input']>
  _neq?: InputMaybe<Scalars['String']['input']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>
  _nin?: InputMaybe<Array<Scalars['String']['input']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>
}

/** columns and relationships of "articles" */
export type Articles = {
  __typename?: 'articles'
  /** An object relationship */
  articles_user: Users
  created_at: Scalars['timestamptz']['output']
  id: Scalars['uuid']['output']
  lead_line: Scalars['String']['output']
  punch_line: Scalars['String']['output']
  users_id: Scalars['String']['output']
}

/** aggregated selection of "articles" */
export type ArticlesAggregate = {
  __typename?: 'articles_aggregate'
  aggregate?: Maybe<ArticlesAggregateFields>
  nodes: Array<Articles>
}

/** aggregate fields of "articles" */
export type ArticlesAggregateFields = {
  __typename?: 'articles_aggregate_fields'
  count: Scalars['Int']['output']
  max?: Maybe<ArticlesMaxFields>
  min?: Maybe<ArticlesMinFields>
}

/** aggregate fields of "articles" */
export type ArticlesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ArticlesSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** Boolean expression to filter rows from the table "articles". All fields are combined with a logical 'AND'. */
export type ArticlesBoolExp = {
  _and?: InputMaybe<Array<ArticlesBoolExp>>
  _not?: InputMaybe<ArticlesBoolExp>
  _or?: InputMaybe<Array<ArticlesBoolExp>>
  articles_user?: InputMaybe<UsersBoolExp>
  created_at?: InputMaybe<TimestamptzComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  lead_line?: InputMaybe<StringComparisonExp>
  punch_line?: InputMaybe<StringComparisonExp>
  users_id?: InputMaybe<StringComparisonExp>
}

/** unique or primary key constraints on table "articles" */
export enum ArticlesConstraint {
  /** unique or primary key constraint on columns "id" */
  ARTICLES_PKEY = 'articles_pkey',
}

/** input type for inserting data into table "articles" */
export type ArticlesInsertInput = {
  articles_user?: InputMaybe<UsersObjRelInsertInput>
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  lead_line?: InputMaybe<Scalars['String']['input']>
  punch_line?: InputMaybe<Scalars['String']['input']>
  users_id?: InputMaybe<Scalars['String']['input']>
}

/** aggregate max on columns */
export type ArticlesMaxFields = {
  __typename?: 'articles_max_fields'
  created_at?: Maybe<Scalars['timestamptz']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  lead_line?: Maybe<Scalars['String']['output']>
  punch_line?: Maybe<Scalars['String']['output']>
  users_id?: Maybe<Scalars['String']['output']>
}

/** aggregate min on columns */
export type ArticlesMinFields = {
  __typename?: 'articles_min_fields'
  created_at?: Maybe<Scalars['timestamptz']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  lead_line?: Maybe<Scalars['String']['output']>
  punch_line?: Maybe<Scalars['String']['output']>
  users_id?: Maybe<Scalars['String']['output']>
}

/** response of any mutation on the table "articles" */
export type ArticlesMutationResponse = {
  __typename?: 'articles_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<Articles>
}

/** on_conflict condition type for table "articles" */
export type ArticlesOnConflict = {
  constraint: ArticlesConstraint
  update_columns?: Array<ArticlesUpdateColumn>
  where?: InputMaybe<ArticlesBoolExp>
}

/** Ordering options when selecting data from "articles". */
export type ArticlesOrderBy = {
  articles_user?: InputMaybe<UsersOrderBy>
  created_at?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  lead_line?: InputMaybe<OrderBy>
  punch_line?: InputMaybe<OrderBy>
  users_id?: InputMaybe<OrderBy>
}

/** primary key columns input for table: articles */
export type ArticlesPkColumnsInput = {
  id: Scalars['uuid']['input']
}

/** select columns of table "articles" */
export enum ArticlesSelectColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  LEAD_LINE = 'lead_line',
  /** column name */
  PUNCH_LINE = 'punch_line',
  /** column name */
  USERS_ID = 'users_id',
}

/** input type for updating data in table "articles" */
export type ArticlesSetInput = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  lead_line?: InputMaybe<Scalars['String']['input']>
  punch_line?: InputMaybe<Scalars['String']['input']>
  users_id?: InputMaybe<Scalars['String']['input']>
}

/** Streaming cursor of the table "articles" */
export type ArticlesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ArticlesStreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type ArticlesStreamCursorValueInput = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  lead_line?: InputMaybe<Scalars['String']['input']>
  punch_line?: InputMaybe<Scalars['String']['input']>
  users_id?: InputMaybe<Scalars['String']['input']>
}

/** update columns of table "articles" */
export enum ArticlesUpdateColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  LEAD_LINE = 'lead_line',
  /** column name */
  PUNCH_LINE = 'punch_line',
  /** column name */
  USERS_ID = 'users_id',
}

export type ArticlesUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ArticlesSetInput>
  /** filter the rows which have to be updated */
  where: ArticlesBoolExp
}

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  ASC = 'ASC',
  /** descending ordering of the cursor */
  DESC = 'DESC',
}

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root'
  /** delete data from the table: "articles" */
  delete_articles?: Maybe<ArticlesMutationResponse>
  /** delete single row from the table: "articles" */
  delete_articles_by_pk?: Maybe<Articles>
  /** delete data from the table: "users" */
  delete_users?: Maybe<UsersMutationResponse>
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>
  /** insert data into the table: "articles" */
  insert_articles?: Maybe<ArticlesMutationResponse>
  /** insert a single row into the table: "articles" */
  insert_articles_one?: Maybe<Articles>
  /** insert data into the table: "users" */
  insert_users?: Maybe<UsersMutationResponse>
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>
  /** update data of the table: "articles" */
  update_articles?: Maybe<ArticlesMutationResponse>
  /** update single row of the table: "articles" */
  update_articles_by_pk?: Maybe<Articles>
  /** update multiples rows of table: "articles" */
  update_articles_many?: Maybe<Array<Maybe<ArticlesMutationResponse>>>
  /** update data of the table: "users" */
  update_users?: Maybe<UsersMutationResponse>
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<UsersMutationResponse>>>
}

/** mutation root */
export type MutationRootDeleteArticlesArgs = {
  where: ArticlesBoolExp
}

/** mutation root */
export type MutationRootDeleteArticlesByPkArgs = {
  id: Scalars['uuid']['input']
}

/** mutation root */
export type MutationRootDeleteUsersArgs = {
  where: UsersBoolExp
}

/** mutation root */
export type MutationRootDeleteUsersByPkArgs = {
  auth_id: Scalars['String']['input']
  id: Scalars['uuid']['input']
}

/** mutation root */
export type MutationRootInsertArticlesArgs = {
  objects: Array<ArticlesInsertInput>
  on_conflict?: InputMaybe<ArticlesOnConflict>
}

/** mutation root */
export type MutationRootInsertArticlesOneArgs = {
  object: ArticlesInsertInput
  on_conflict?: InputMaybe<ArticlesOnConflict>
}

/** mutation root */
export type MutationRootInsertUsersArgs = {
  objects: Array<UsersInsertInput>
  on_conflict?: InputMaybe<UsersOnConflict>
}

/** mutation root */
export type MutationRootInsertUsersOneArgs = {
  object: UsersInsertInput
  on_conflict?: InputMaybe<UsersOnConflict>
}

/** mutation root */
export type MutationRootUpdateArticlesArgs = {
  _set?: InputMaybe<ArticlesSetInput>
  where: ArticlesBoolExp
}

/** mutation root */
export type MutationRootUpdateArticlesByPkArgs = {
  _set?: InputMaybe<ArticlesSetInput>
  pk_columns: ArticlesPkColumnsInput
}

/** mutation root */
export type MutationRootUpdateArticlesManyArgs = {
  updates: Array<ArticlesUpdates>
}

/** mutation root */
export type MutationRootUpdateUsersArgs = {
  _set?: InputMaybe<UsersSetInput>
  where: UsersBoolExp
}

/** mutation root */
export type MutationRootUpdateUsersByPkArgs = {
  _set?: InputMaybe<UsersSetInput>
  pk_columns: UsersPkColumnsInput
}

/** mutation root */
export type MutationRootUpdateUsersManyArgs = {
  updates: Array<UsersUpdates>
}

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  ASC = 'asc',
  /** in ascending order, nulls first */
  ASC_NULLS_FIRST = 'asc_nulls_first',
  /** in ascending order, nulls last */
  ASC_NULLS_LAST = 'asc_nulls_last',
  /** in descending order, nulls first */
  DESC = 'desc',
  /** in descending order, nulls first */
  DESC_NULLS_FIRST = 'desc_nulls_first',
  /** in descending order, nulls last */
  DESC_NULLS_LAST = 'desc_nulls_last',
}

export type QueryRoot = {
  __typename?: 'query_root'
  /** fetch data from the table: "articles" */
  articles: Array<Articles>
  /** fetch aggregated fields from the table: "articles" */
  articles_aggregate: ArticlesAggregate
  /** fetch data from the table: "articles" using primary key columns */
  articles_by_pk?: Maybe<Articles>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
}

export type QueryRootArticlesArgs = {
  distinct_on?: InputMaybe<Array<ArticlesSelectColumn>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<ArticlesOrderBy>>
  where?: InputMaybe<ArticlesBoolExp>
}

export type QueryRootArticlesAggregateArgs = {
  distinct_on?: InputMaybe<Array<ArticlesSelectColumn>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<ArticlesOrderBy>>
  where?: InputMaybe<ArticlesBoolExp>
}

export type QueryRootArticlesByPkArgs = {
  id: Scalars['uuid']['input']
}

export type QueryRootUsersArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<UsersOrderBy>>
  where?: InputMaybe<UsersBoolExp>
}

export type QueryRootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<UsersOrderBy>>
  where?: InputMaybe<UsersBoolExp>
}

export type QueryRootUsersByPkArgs = {
  auth_id: Scalars['String']['input']
  id: Scalars['uuid']['input']
}

export type SubscriptionRoot = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "articles" */
  articles: Array<Articles>
  /** fetch aggregated fields from the table: "articles" */
  articles_aggregate: ArticlesAggregate
  /** fetch data from the table: "articles" using primary key columns */
  articles_by_pk?: Maybe<Articles>
  /** fetch data from the table in a streaming manner: "articles" */
  articles_stream: Array<Articles>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>
}

export type SubscriptionRootArticlesArgs = {
  distinct_on?: InputMaybe<Array<ArticlesSelectColumn>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<ArticlesOrderBy>>
  where?: InputMaybe<ArticlesBoolExp>
}

export type SubscriptionRootArticlesAggregateArgs = {
  distinct_on?: InputMaybe<Array<ArticlesSelectColumn>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<ArticlesOrderBy>>
  where?: InputMaybe<ArticlesBoolExp>
}

export type SubscriptionRootArticlesByPkArgs = {
  id: Scalars['uuid']['input']
}

export type SubscriptionRootArticlesStreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<ArticlesStreamCursorInput>>
  where?: InputMaybe<ArticlesBoolExp>
}

export type SubscriptionRootUsersArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<UsersOrderBy>>
  where?: InputMaybe<UsersBoolExp>
}

export type SubscriptionRootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
  order_by?: InputMaybe<Array<UsersOrderBy>>
  where?: InputMaybe<UsersBoolExp>
}

export type SubscriptionRootUsersByPkArgs = {
  auth_id: Scalars['String']['input']
  id: Scalars['uuid']['input']
}

export type SubscriptionRootUsersStreamArgs = {
  batch_size: Scalars['Int']['input']
  cursor: Array<InputMaybe<UsersStreamCursorInput>>
  where?: InputMaybe<UsersBoolExp>
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>
  _gt?: InputMaybe<Scalars['timestamptz']['input']>
  _gte?: InputMaybe<Scalars['timestamptz']['input']>
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['timestamptz']['input']>
  _lte?: InputMaybe<Scalars['timestamptz']['input']>
  _neq?: InputMaybe<Scalars['timestamptz']['input']>
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>
}

/** Boolean expression to compare columns of type "timetz". All fields are combined with logical 'AND'. */
export type TimetzComparisonExp = {
  _eq?: InputMaybe<Scalars['timetz']['input']>
  _gt?: InputMaybe<Scalars['timetz']['input']>
  _gte?: InputMaybe<Scalars['timetz']['input']>
  _in?: InputMaybe<Array<Scalars['timetz']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['timetz']['input']>
  _lte?: InputMaybe<Scalars['timetz']['input']>
  _neq?: InputMaybe<Scalars['timetz']['input']>
  _nin?: InputMaybe<Array<Scalars['timetz']['input']>>
}

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users'
  auth_id: Scalars['String']['output']
  id: Scalars['uuid']['output']
  last_logged_in?: Maybe<Scalars['timetz']['output']>
  name: Scalars['String']['output']
}

/** aggregated selection of "users" */
export type UsersAggregate = {
  __typename?: 'users_aggregate'
  aggregate?: Maybe<UsersAggregateFields>
  nodes: Array<Users>
}

/** aggregate fields of "users" */
export type UsersAggregateFields = {
  __typename?: 'users_aggregate_fields'
  count: Scalars['Int']['output']
  max?: Maybe<UsersMaxFields>
  min?: Maybe<UsersMinFields>
}

/** aggregate fields of "users" */
export type UsersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UsersSelectColumn>>
  distinct?: InputMaybe<Scalars['Boolean']['input']>
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: InputMaybe<Array<UsersBoolExp>>
  _not?: InputMaybe<UsersBoolExp>
  _or?: InputMaybe<Array<UsersBoolExp>>
  auth_id?: InputMaybe<StringComparisonExp>
  id?: InputMaybe<UuidComparisonExp>
  last_logged_in?: InputMaybe<TimetzComparisonExp>
  name?: InputMaybe<StringComparisonExp>
}

/** unique or primary key constraints on table "users" */
export enum UsersConstraint {
  /** unique or primary key constraint on columns "auth_id" */
  USERS_AUTH_ID_KEY = 'users_auth_id_key',
  /** unique or primary key constraint on columns "id" */
  USERS_ID_KEY = 'users_id_key',
  /** unique or primary key constraint on columns "name" */
  USERS_NAME_KEY = 'users_name_key',
  /** unique or primary key constraint on columns "id", "auth_id" */
  USERS_PKEY = 'users_pkey',
}

/** input type for inserting data into table "users" */
export type UsersInsertInput = {
  auth_id?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  last_logged_in?: InputMaybe<Scalars['timetz']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

/** aggregate max on columns */
export type UsersMaxFields = {
  __typename?: 'users_max_fields'
  auth_id?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  last_logged_in?: Maybe<Scalars['timetz']['output']>
  name?: Maybe<Scalars['String']['output']>
}

/** aggregate min on columns */
export type UsersMinFields = {
  __typename?: 'users_min_fields'
  auth_id?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['uuid']['output']>
  last_logged_in?: Maybe<Scalars['timetz']['output']>
  name?: Maybe<Scalars['String']['output']>
}

/** response of any mutation on the table "users" */
export type UsersMutationResponse = {
  __typename?: 'users_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output']
  /** data from the rows affected by the mutation */
  returning: Array<Users>
}

/** input type for inserting object relation for remote table "users" */
export type UsersObjRelInsertInput = {
  data: UsersInsertInput
  /** upsert condition */
  on_conflict?: InputMaybe<UsersOnConflict>
}

/** on_conflict condition type for table "users" */
export type UsersOnConflict = {
  constraint: UsersConstraint
  update_columns?: Array<UsersUpdateColumn>
  where?: InputMaybe<UsersBoolExp>
}

/** Ordering options when selecting data from "users". */
export type UsersOrderBy = {
  auth_id?: InputMaybe<OrderBy>
  id?: InputMaybe<OrderBy>
  last_logged_in?: InputMaybe<OrderBy>
  name?: InputMaybe<OrderBy>
}

/** primary key columns input for table: users */
export type UsersPkColumnsInput = {
  auth_id: Scalars['String']['input']
  id: Scalars['uuid']['input']
}

/** select columns of table "users" */
export enum UsersSelectColumn {
  /** column name */
  AUTH_ID = 'auth_id',
  /** column name */
  ID = 'id',
  /** column name */
  LAST_LOGGED_IN = 'last_logged_in',
  /** column name */
  NAME = 'name',
}

/** input type for updating data in table "users" */
export type UsersSetInput = {
  auth_id?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  last_logged_in?: InputMaybe<Scalars['timetz']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

/** Streaming cursor of the table "users" */
export type UsersStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: UsersStreamCursorValueInput
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>
}

/** Initial value of the column from where the streaming should start */
export type UsersStreamCursorValueInput = {
  auth_id?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['uuid']['input']>
  last_logged_in?: InputMaybe<Scalars['timetz']['input']>
  name?: InputMaybe<Scalars['String']['input']>
}

/** update columns of table "users" */
export enum UsersUpdateColumn {
  /** column name */
  AUTH_ID = 'auth_id',
  /** column name */
  ID = 'id',
  /** column name */
  LAST_LOGGED_IN = 'last_logged_in',
  /** column name */
  NAME = 'name',
}

export type UsersUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UsersSetInput>
  /** filter the rows which have to be updated */
  where: UsersBoolExp
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>
  _gt?: InputMaybe<Scalars['uuid']['input']>
  _gte?: InputMaybe<Scalars['uuid']['input']>
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>
  _is_null?: InputMaybe<Scalars['Boolean']['input']>
  _lt?: InputMaybe<Scalars['uuid']['input']>
  _lte?: InputMaybe<Scalars['uuid']['input']>
  _neq?: InputMaybe<Scalars['uuid']['input']>
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>
}

export type GetArticlesQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>
}>

export type GetArticlesQuery = { __typename?: 'query_root' } & {
  articles: Array<
    { __typename?: 'articles' } & Pick<
      Articles,
      'created_at' | 'id' | 'lead_line' | 'punch_line'
    > & { articles_user: { __typename?: 'users' } & Pick<Users, 'name'> }
  >
  articles_aggregate: { __typename?: 'articles_aggregate' } & {
    aggregate?: Maybe<
      { __typename?: 'articles_aggregate_fields' } & Pick<ArticlesAggregateFields, 'count'>
    >
  }
}

export type InsertArticleMutationVariables = Exact<{
  lead: Scalars['String']['input']
  punch: Scalars['String']['input']
  userId: Scalars['String']['input']
}>

export type InsertArticleMutation = { __typename?: 'mutation_root' } & {
  insert_articles_one?: Maybe<
    { __typename?: 'articles' } & Pick<Articles, 'lead_line' | 'punch_line' | 'created_at' | 'id'>
  >
}

export type GetUsersByNameQueryVariables = Exact<{
  name: Scalars['String']['input']
}>

export type GetUsersByNameQuery = { __typename?: 'query_root' } & {
  users: Array<{ __typename?: 'users' } & Pick<Users, 'name'>>
}

export type UpsertUserMutationVariables = Exact<{
  auth_id: Scalars['String']['input']
  name: Scalars['String']['input']
}>

export type UpsertUserMutation = { __typename?: 'mutation_root' } & {
  insert_users?: Maybe<
    { __typename?: 'users_mutation_response' } & {
      returning: Array<
        { __typename?: 'users' } & Pick<Users, 'id' | 'auth_id' | 'name' | 'last_logged_in'>
      >
    }
  >
}

export const GetArticlesDocument = gql`
  query GetArticles($offset: Int) {
    articles(limit: 10, order_by: { created_at: desc }, offset: $offset) {
      created_at
      id
      lead_line
      punch_line
      articles_user {
        name
      }
    }
    articles_aggregate {
      aggregate {
        count
      }
    }
  }
`
export const InsertArticleDocument = gql`
  mutation InsertArticle($lead: String!, $punch: String!, $userId: String!) {
    insert_articles_one(object: { users_id: $userId, punch_line: $punch, lead_line: $lead }) {
      lead_line
      punch_line
      created_at
      id
    }
  }
`
export const GetUsersByNameDocument = gql`
  query GetUsersByName($name: String!) {
    users(where: { name: { _eq: $name } }) {
      name
    }
  }
`
export const UpsertUserDocument = gql`
  mutation UpsertUser($auth_id: String!, $name: String!) {
    insert_users(
      objects: [{ auth_id: $auth_id, name: $name }]
      on_conflict: { constraint: users_auth_id_key, update_columns: [name, last_logged_in] }
    ) {
      returning {
        id
        auth_id
        name
        last_logged_in
      }
    }
  }
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action()

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetArticles(
      variables?: GetArticlesQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetArticlesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetArticlesQuery>(GetArticlesDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'GetArticles',
        'query',
      )
    },
    InsertArticle(
      variables: InsertArticleMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<InsertArticleMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<InsertArticleMutation>(InsertArticleDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'InsertArticle',
        'mutation',
      )
    },
    GetUsersByName(
      variables: GetUsersByNameQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetUsersByNameQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetUsersByNameQuery>(GetUsersByNameDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'GetUsersByName',
        'query',
      )
    },
    UpsertUser(
      variables: UpsertUserMutationVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<UpsertUserMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<UpsertUserMutation>(UpsertUserDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'UpsertUser',
        'mutation',
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
