import Home from '~/pages/Home';

import config from '~/configs';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
