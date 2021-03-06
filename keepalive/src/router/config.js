const routes=[
    {
      path:'/',
      redirect:{
          name:'Home'
      }
    },
    {
        path:'/home',
        name:'Home',
        component:()=>import('./../components/home/home.vue')
    },
    {
        path:'/search',
        name:'Search',
        component:()=>import('./../components/search/search.vue'),
        meta:{
            keepAlive:true
        }

    },
    {
        path:'/detail',
        name:'Detail',
        component:()=>import('./../components/detail/detail.vue')
    },
];

export default routes;
