import Home from '~/pages/Home';

import config from '~/configs';
import Movies from '~/pages/Movies';
import TvSeries from '~/pages/TvSeries';
import Plans from '~/pages/Plans';
import Login from '~/pages/Login';
import Watch from '~/pages/Watch';
import { Fragment } from 'react';
import Search from '~/pages/Search';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.movies,
        component: Movies,
    },
    {
        path: config.routes.tvSeries,
        component: TvSeries,
    },
    {
        path: config.routes.plans,
        component: Plans,
    },
    {
        path: config.routes.watch,
        component: Watch,
        layout: Fragment,
    },
    {
        path: config.routes.login,
        component: Login,
    },
    {
        path: config.routes.search,
        component: Search,
    },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
