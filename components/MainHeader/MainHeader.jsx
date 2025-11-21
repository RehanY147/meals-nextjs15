import classes from './MainHeader.module.css';

import NavLink from '@/components/NavLink/NavLink';
import logoImg from '@/assets/logo.png';
import Image from "next/image";
import MainHeaderBackground from "../MainHeaderBackground/MainHeaderBackground";
import { usePathname } from "next/navigation";
import Link from 'next/link';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground></MainHeaderBackground>
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with some food on it" priority />NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}