# 영화 검색 페이지

## 개요

- Next.js 학습을 위해 TMDB Movie API를 사용하여 영화 정보를 보거나 검색할 수 있는 페이지 제작
- 개발 기간 (2023.05 ~ 2023.08)

## 사용 기술

- Next.js
- Recoil
- React-Bootstrap
- ES6+
- Vercel
- React-Query
- Fetch
- TypeScript
- Styled Component

## 구현 기능

### 무한 스크롤링
- React-Query의 useInfiniteQuery로 영화 데이터 무한 스크롤링 구현
- IntersectionObserver를 활용한 useObserver라는 custom hook을 만들어 스크롤 시 페이지 바닥에 닿으면 다음 영화 데이터 요청

### SSG, SSR 페이지 구현
- 메인 페이지는 상황에 따라 동적 데이터 호출이 아닌 항상 같은 데이터를 띄우기 때문에 getStaticProps로 SSG 페이지 구현
- 영화 검색결과 페이지는 상황에 따라 띄울 데이터가 달라지는 페이지이기 때문에 getServerSideProps로 SSR 페이지 구현
