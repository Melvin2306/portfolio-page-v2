import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
  SparklesIcon,
  PencilLineIcon,
  NavigationIcon,
  Wand2Icon,
  BookmarkIcon,
  ArmchairIcon,
  BookOpenText,
  Code2,
  Info,
  Home,
} from 'lucide-react';

export const PROFILES: object = {
  github: {
    title: 'GitHub',
    url: 'https://github.com/melvin2306',
    icon: <GithubIcon size={16} />,
  },
  linkedin: {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/melvin-rinkleff',
    icon: <LinkedinIcon size={16} />,
  },
  instagram: {
    title: 'Instagram',
    url: 'https://www.instagram.com/melvin_2306',
    icon: <InstagramIcon size={16} />,
  },
  youtube: {
    title: 'YouTube',
    url: 'https://www.youtube.com/@melvin23060',
    icon: <YoutubeIcon size={16} />,
  },
};

export const LINKS = [
  {
    href: '/',
    label: 'Home',
    icon: <Home size={16} />,
  },
  {
    href: '/cv',
    label: 'CV',
    icon: <BookOpenText size={16} />,
  },
  {
    href: '/projects',
    label: 'Projects',
    icon: <Code2 size={16} />,
  },
  {
    href: '/stack',
    label: 'Stack',
    icon: <Wand2Icon size={16} />,
  },
  {
    href: '/placeholder',
    label: 'Placeholder',
    icon: <ArmchairIcon size={16} />,
  },
  {
    href: '/imprint',
    label: 'Imprint',
    icon: <Info size={16} />,
  },
];

export const SCROLL_AREA_ID = 'scroll-area';
export const MOBILE_SCROLL_THRESHOLD = 20;
