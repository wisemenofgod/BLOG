const data = [
  {
    id: '1',
    name: '功能名称',
    icon: 'el-icon-s-home',
    children: [
      {
        id: 1,
        name: '用户管理',
        icon: 'el-icon-user',
        router: '/user'
      },
      {
        id: 2,
        name: '栏目管理',
        icon: 'el-icon-s-order',
        router: '/channel'
      },
      {
        id: 3,
        name: '标签管理',
        icon: 'el-icon-price-tag',
        router: '/tag'
      },
      {
        id: 4,
        name: '文章管理',
        icon: 'el-icon-notebook-2',
        router: '/article'
      },
      {
        id: 5,
        name: '评论管理',
        icon: 'el-icon-s-comment',
        router: '/comment'
      },
      {
        id: 6,
        name: '友情链接',
        icon: 'el-icon-paperclip',
        router: '/friend'
      }
    ]
  }
]

export default data
