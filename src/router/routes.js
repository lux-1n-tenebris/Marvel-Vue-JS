import Welcome from '@/components/Welcome'
import Bookmarks from '@/components/bookmarks/Bookmarks'

export default [
  {
    path: '/',
    name: 'Home',
    component: Welcome,
  },
  {
    path: '/bookmarks',
    name: 'Bookmarks',
    component: Bookmarks
  }
]