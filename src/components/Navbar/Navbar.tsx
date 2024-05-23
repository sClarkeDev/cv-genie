'use client';

import { nav } from '@/data/nav';
import { cn } from '@/utils/cn';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { Sidebar } from '../Sidebar';
import { Button } from '../ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '../ui/navigation-menu';
import Logo from './Logo';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex items-center justify-between max-w-7xl mx-auto p-5"
    >
      <Logo />

      <Sidebar />

      <div className="hidden md:flex items-center space-x-8">
        <NavigationMenu>
          <NavigationMenuList>
            {nav.map((item) => (
              <NavigationMenuItem key={item.name}>
                <Link href={item.path} scroll legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.name}</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <ThemeToggle />

          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://github.com/sClarkeDev/cv-genie"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github Repository"
            >
              <GitHubLogoIcon className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';
