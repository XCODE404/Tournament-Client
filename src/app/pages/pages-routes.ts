export const pagesRoutes = [
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
        data: { icon: 'dashboard', text: 'Dashboard' }
    },
    {
        path: 'tournament',
        loadChildren: () => import('./tournament/tournament.module').then((m) => m.TournamentModule),
        data: { icon: 'gamepad', text: 'Tournament' }
    }
];