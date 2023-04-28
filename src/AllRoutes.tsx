import { Login, CreateSMSCommunication } from './pages'
import Welcome from './pages/dashboard/welcome'

const AllRoutes = [
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/create-sms-communication',
    element: <CreateSMSCommunication />,
  },
]

export default AllRoutes
