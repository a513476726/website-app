import type { NextPage } from 'next'
import Layouts from '../layouts/index'
import PhoneList from './view/PhoneList'

const Home: NextPage = () => {
  return (
    <>
      <Layouts>
        <div style={{ paddingTop:'100px',maxWidth:'1200px',margin:'0 auto'}}>
          <PhoneList></PhoneList>
        </div>
      </Layouts>
    </>
  )
}

export default Home
