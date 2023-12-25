import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostDetail from '../views/PostDetail'
import CreatePost from '../views/CreatePost'
import Tag from "../views/Tag"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts/:id',
    name: 'Detail',
    component: PostDetail,
    props: true
  },
  {
    path: "/post/create",
    name: 'Create',
    component: CreatePost,
  },
  {
    path: "/tags/:tag",
    name: "Tag",
    component: Tag,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
