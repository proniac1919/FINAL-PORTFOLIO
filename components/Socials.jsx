'use client'

import {
  RiLinkedinFill,
  RiGithubFill,
  RiStackOverflowFill
} from "react-icons/ri"
import { SiHackerrank, SiCodechef } from "react-icons/si"

import Link from "next/link";

const icons = [
  {
    path: 'https://github.com/theAbhishekDas/',
    name: <RiGithubFill />,
    label: 'Visit my GitHub profile'
  },
  {
    path: 'https://www.linkedin.com/in/abhishekdas09/ ',
    name: <RiLinkedinFill />,
    label: 'Connect with me on LinkedIn'
  },
  {
    path: 'https://stackoverflow.com/users/32096329/abhishek-das',
    name: <RiStackOverflowFill />,
    label: 'View my Stack Overflow profile'
  },
  {
    path: 'https://www.hackerrank.com/profile/abhishekdas5319',
    name: <SiHackerrank />,
    label: 'Check my HackerRank profile'
  },
  {
    path: 'https://www.codechef.com/users/proniac',
    name: <SiCodechef />,
    label: 'See my CodeChef profile'
  },
]
const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target="_blank" rel="noopener noreferrer" aria-label={`${icon.label} (opens in new tab)`}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials