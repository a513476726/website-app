// import style from '@/styles/index/index.module.scss'
import type { NextPage } from 'next'
const style = {
  list:{
    display:'flex',
  },
  listItem:{
    width:'25%',
    background:'#ddd',
    borderRight:'1px solid #fff',
    minHeight:'400px',
    textAlign:'center',
  },
}

const PhoneList: NextPage = () => {
  return (
    <div style={style.list}>
      {[1,2,3,4].map(item =>
          <div style={style.listItem}>
            {item},一条数据
          </div>
      )}
    </div>
  )
}
export default PhoneList
