import type { NextPage } from 'next';
import useSWR from 'swr';

import Header from '../components/common/Header';
import Main from '../components/Index/Main';

import styles from '../styles/index.module.scss';
const fetcher = (url: URL) => fetch(url).then((r) => r.json());

const Home: NextPage = () => {
  const { data, error } = useSWR('./api/hello', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className={styles.main}>
      <Header />
      <Main />
    </div>
  );
};

export default Home;
