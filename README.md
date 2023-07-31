## 野党.app

霜降り明星のオールナイトニッポンのコーナー「野党」をアプリ化したもの。
ボケとツッコミを１セットで投稿し、他人が投稿したものを閲覧できる。
ユーザーアカウントには Google アカウントのみ使用可能。

## 使用技術

- Next.js
  - next-auth
  - react-hook-form
  - react-query
  - etc...
- Tailwind CSS
- Hasura
  - GraphQL
  - Postgres
- Firebase Authentication

## デモ

<details>
  <summary>PC view</summary>
  
  https://github.com/seasons-4/next-hasura-app1/assets/48409453/2558c5bc-348c-4977-9478-11e892e61635

</details>

<details>
  <summary>SP view</summary>
  
  https://github.com/seasons-4/next-hasura-app1/assets/48409453/0f70761b-628c-457a-af1d-cd50eccbfc38

</details>

## その他

- ディレクトリ構造
  - src/
    - components/
      - 汎用コンポーネントを定義
    - features/
      - xxx（機能名）
        - api/
        - components/
        - hooks/
        - index.ts（Barrel export）
    - graphql/
      - GraphQL に関するロジック
    - hooks/
      - アプリケーション全体で使用するような hooks
    - libs/
      - ライブラリの拡張用ロジック
    - pages/
      - Next.js の標準構造に従ったページを定義
    - styles/
      - アプリケーション全体に影響するスタイルを定義
    - types/
      - 型の拡張を定義
