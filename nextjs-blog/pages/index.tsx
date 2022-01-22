import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'


export default function Home({ allPostsData  }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      </section>
      
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>News</h2>
        <ul className={utilStyles.list}>
        </ul>
      </section>
    </Layout>
  )
}
