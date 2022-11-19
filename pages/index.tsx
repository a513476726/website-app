import type { NextPage } from 'next'
import Layouts from '../layouts/index'
import style from '@/styles/index/index.module.scss'
import bg from '@/assets/videos/home-bg.mp4'
const Home: NextPage = () => {
  return (
    <>
      <Layouts>
        <video controls className={style['video-bg']} src={ 'https://www.apple.com/105/media/us/home/2022/42ee7f26-ec6c-4bdd-8cc5-2af5cd55cacb/anim/hero/largetall.webm' } autoPlay muted loop></video>
      </Layouts>
    </>
  )
}

export default Home
