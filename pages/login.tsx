import type { NextPage } from 'next'
import Layouts from '../layouts/index'
import dynamic from "next/dynamic"; // 动态加载，不要服务端渲染

const Login = dynamic(()=> import('./login'),{ ssr:false })
const Other = dynamic(()=> import('./other'),{ ssr:false })

const Home: NextPage = () => {
  return (
    <>
      <Layouts>
        我是登录
      </Layouts>
    </>
  )
}

export default Home
