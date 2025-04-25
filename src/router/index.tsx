import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router'
import App from '@/App';
import Loading from '@/pages/loading';
const SignIn = lazy(() => import('@/pages/signin'))
const SignUp = lazy(() => import('@/pages/signup'))
const Dashboard = lazy(() => import('@/pages/dashboard'))

const router = createBrowserRouter([
    {
        path: '/',
        index: true,
        element: <App />,
    },
    {
        path: '/signin',
        element: (
            <Suspense fallback={<Loading />}>
                <SignIn />
            </Suspense>
        ),
    },
    {
        path: '/signup',
        element: (
            <Suspense fallback={<Loading />}>
                <SignUp />
            </Suspense>
        )
    },
    {
        path: '/dashboard',
        element: (
            <Suspense fallback={<Loading />}>
                <Dashboard />
            </Suspense>
        )
    },    
    {
        path: '*',
        element: (<p>Not found</p>)
    }
]);

export default router