// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: 'All Account',
    path: '/dashboard/all-account',
    icon: getIcon('material-symbols:switch-account-rounded'),
  },
  {
    title: 'Track Account',
    path: '/account/track',
    icon: getIcon('gg:track'),
  },
  {
    title: 'Agents',
    path: '/dashboard/agents',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Skins',
    path: '/dashboard/skins',
    icon: getIcon('mdi:pistol'),
  },
  {
    title: 'Log Out',
    path: '/dashboard/logout',
    icon: getIcon('humbleicons:logout'),
  },

  // {
  //   title: 'blog',
  //   path: '/dashboard/blog',
  //   icon: getIcon('eva:file-text-fill'),
  // }
];

export default navConfig;
