import page01 from './components/page01'
import page02 from './components/page02'
import page03 from './components/page03'
import page04 from './components/page04'
import page05 from './components/page05'

import child01 from './components/childs/child01'
import child02 from './components/childs/child02'

const User = {
	template:'<div>User {{$route.params}}</div>'
}

//动态路由
// 这里是id还是userid都是在route这里定义的
export default [
   { path: '/', component: page01 },
  { path: '/02/:id', component: page02 },
  { path: '/01/:userid', component: User }, 
  { name: '', path: '/03/:userid', age:'', height:'' , component: page03 },

  { path: '/04', component: page04,
  		children:[
        { name:'child01', path: '/', component: child01 },
        { name:'child02', path: '/c02', component: child02 },        
  		]
  },
  { path: '/05', component: page05 }

]