import Layout, { siteTitle } from '../components/layout'
import Head from 'next/head'

const title = 'Layout editor'

const LayoutEditor = ({ allPostsData  })=> {
  return<Layout  home={false}>
   <Head>
      <title>YETI - {title}</title>
    </Head>
    <h1>
      {title}
    </h1>
    
  </Layout>
}

export default LayoutEditor;