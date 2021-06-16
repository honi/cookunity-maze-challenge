import 'styles/global.css'

import Layout from 'components/layout/Layout'
import {AppProps} from 'next/app'
import Head from 'next/head'

export default function App({Component, pageProps}: AppProps) {
    return (
        <Layout>
            <Head>
                <title>CookUnity Maze Challenge</title>
            </Head>
            <Component {...pageProps} />
        </Layout>
    )
}
