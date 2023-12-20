import { Icon } from '@iconify/react';

import { SideNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'All', path: '/projects' },
      { title: 'Web Design', path: '/projects/web-design' },
      { title: 'Graphic Design', path: '/projects/graphic-design' },
    ],
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <Icon icon="lucide:settings" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Account', path: '/settings/account' },
      { title: 'Privacy', path: '/settings/privacy' },
    ],
  },
  {
    title: 'Help',
    path: '/help',
    icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  },
];

export const taskData = [
  {
    username: 'Thor Odinson',
    taskName: 'Defeat Loki',
    time: '2:00 PM',
    status: 'In Progress',
    workType: 'Combat',
    note: 'Use Mjolnir for extra power',
    lastModified: '1 hour ago',
  },
  {
    username: 'Hulk',
    taskName: 'Smash through walls',
    time: '4:30 PM',
    status: 'Pending',
    workType: 'Destruction',
    note: 'Avoid civilians',
    lastModified: '2 hours ago',
  },
  {
    username: 'Captain America',
    taskName: 'Training Session',
    time: '9:00 AM',
    status: 'Completed',
    workType: 'Training',
    note: 'Focus on shield techniques',
    lastModified: '30 minutes ago',
  },
  {
    username: 'Scarlet Witch',
    taskName: 'Practice Chaos Magic',
    time: '6:15 PM',
    status: 'In Progress',
    workType: 'Magic',
    note: 'Be cautious of reality warping',
    lastModified: '1 day ago',
  },
  {
    username: 'Black Panther',
    taskName: 'Protect Wakanda',
    time: 'All day',
    status: 'Ongoing',
    workType: 'Security',
    note: 'Monitor the borders',
    lastModified: '1 week ago',
  },
  {
    username: 'Hercules',
    taskName: 'Complete Twelve Labors',
    time: 'Varies',
    status: 'In Progress',
    workType: 'Mythical Quests',
    note: 'Beware of mythical creatures',
    lastModified: '3 days ago',
  },
];

export default taskData;
