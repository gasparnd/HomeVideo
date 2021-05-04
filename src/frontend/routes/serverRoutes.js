import Home from '../containers/Home'
import Reproductor from '../containers/Reproductor'
import Login from '../containers/Login'
import SignUp from '../containers/SignUp'
import NotFound from '../components/NotFound'

const routes = [
	{
		exact: true,
		path: '/',
		component: Home
	},
	{
		exact: true,
		path: '/login',
		component: Login
	},
	{
		exact: true,
		path: '/sign-up',
		component: SignUp
	},
	{
		exact: true,
		path: '/player/:id',
		component: Reproductor
	},
	{
		name: 'NotFound',
		component: NotFound
	}
]

export default routes