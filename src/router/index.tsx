import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router'
import App from '@/App';
const Auth = lazy(() => import('@/pages/auth'))
const SignUp = lazy(() => import('@/pages/signup'))
import Loading from '@/pages/loading';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/auth',
        element: (
            <Suspense fallback={<Loading />}>
                <Auth />
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
]);

export default router