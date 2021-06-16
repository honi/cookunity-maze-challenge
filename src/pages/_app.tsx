import 'styles/global.css'

import {Layout} from 'components/Layout'
import {AppProps} from 'next/app'
import Head from 'next/head'
import {Provider} from 'react-redux'
import store from 'store'

export default function App({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <Layout>
                <Head>
                    <title>CookUnity Maze Challenge</title>
                </Head>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}
