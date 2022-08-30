import { MenuItem } from './menu.model';
export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'home',
        link: '/',
    },
    // {
    //     id: 156,
    //     label: 'MENUITEMS.AUTHENTICATION.TEXT',
    //     icon: 'users',
    //     subItems: [
    //         {
    //             id: 17,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
    //             link: '/account/login1',
    //             parentId: 16
    //         },
    //         {
    //             id: 18,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
    //             link: '/account/register1',
    //             parentId: 16
    //         },

    //         {
    //             id: 19,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
    //             link: '/account/recoverpw',
    //             parentId: 16
    //         },
    //         {
    //             id: 20,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
    //             link: '/account/lock-screen',
    //             parentId: 16
    //         },
    //         {
    //             id: 21,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.LOGOUT',
    //             link: '/account/logout',
    //             parentId: 16
    //         },
    //         {
    //             id: 22,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.CONFIRMMAIL',
    //             link: '/account/confirm-mail',
    //             parentId: 16
    //         },
    //         {
    //             id: 23,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION',
    //             link: '/account/email-verification',
    //             parentId: 16
    //         },
    //         {
    //             id: 24,
    //             label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION',
    //             link: '/account/two-step-verification',
    //             parentId: 16
    //         }
    //     ]
    // },

];