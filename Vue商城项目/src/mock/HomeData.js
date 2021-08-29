import Mock from 'mockjs'

const Random = Mock.Random;

function getData(){
  let datalist= [];
  for (let i = 0; i < 3; i++) {
    let newData = {
      url: Random.url(),
      img: Random.dataImage('300x250', 'mock的图片'),
      date: Random.date() + ' ' + Random.time() 
    }
    datalist.push(newData)
  }
  return {
    data: datalist
  }
}
const data = Mock.mock('/api/getlunbo',getData)
export default {data};