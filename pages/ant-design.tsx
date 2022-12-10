import type { NextPage } from 'next'
import Layouts from '../layouts/index'
const style = {
  main:{
    paddingTop:'100px'
  }
}
const Other: NextPage = () => {
  return (
    <>
      <Layouts>
        <div style={style.main}>
          我是一个表单
        </div>
      </Layouts>
    </>
  )
}

export default Other
