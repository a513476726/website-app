import type { NextPage } from 'next'
import Layouts from '../layouts/index'
import style from '@/styles/index/index.module.scss'
import bg from '@/assets/videos/home-bg.mp4'
import ChristmasType from './view/Home/Christmas'
const Home: NextPage = () => {
  return (
    <>
      <Layouts>
        <ChristmasType />
      </Layouts>
    </>
  )
}

export default Home
