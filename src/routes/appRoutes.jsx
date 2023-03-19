import DependentQueries from '../components/pages/DependentQueries'
import DynamicParallel from '../components/pages/DynamicParallel'
import Home from '../components/pages/Home'
import ParallelQueries from '../components/pages/ParallelQueries'
import RQSuperHeroes from '../components/pages/RQSuperHeroes'
import SuperHero from '../components/pages/SuperHero'
import SuperHeroes from '../components/pages/SuperHeroes'

const appRoutes = [
  {
    path: '/',
    component: <Home />,
    title: 'Home',
  },
  {
    path: '/super-heroes',
    component: <SuperHeroes />,
    title: 'Traditional Super Heroes',
  },
  {
    path: '/rq-super-heroes',
    component: <RQSuperHeroes />,
    title: 'RQ Super Heroes',
  },
  {
    path: '/rq-super-heroes/:heroId',
    component: <SuperHero />,
  },
  {
    path: '/rq-parallel',
    component: <ParallelQueries />,
    title: 'Parallel Queries',
  },
  {
    path: '/rq-dynamic-parallel',
    component: <DynamicParallel heroIds={[1, 3]} />,
    title: 'Dynamic Parallel',
  },
  {
    path: '/rq-dependent',
    component: <DependentQueries email='cristian@example.com' />,
    title: 'Dependent Queries',
  },
]

export default appRoutes
