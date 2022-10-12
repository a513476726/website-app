import '../styles/globals.css'
// import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
