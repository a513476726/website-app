// import style from '@/styles/index/index.module.scss'
import type { NextPage } from 'next'
import BGImage from '@/assets/view/christmas/1.jpg'
import BGWebM from '@/assets/view/christmas/largetall.webm'
const Christmas: NextPage = () => {
  return (
    <>
      <div style={ { width:'100%',position:'relative'} } >
        <img style={ { width:'100%',position:'absolute' } } src={ BGImage.src }></img>
        <video
          style={ { position: 'absolute',width:'100%',zIndex:'2' } }
          src={ BGWebM } autoPlay muted loop></video>
      </div>
    </>
  )
}
export default Christmas
