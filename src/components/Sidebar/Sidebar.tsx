import { Button } from '@/components/ui/button';
import { nav } from '@/data/nav';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { ArrowRight, Menu } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ThemeToggle } from '../Navbar/ThemeToggle';
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from '../ui/sheet';

const SidebarItem = ({ name, path, closeSidebar }: { name: string; path: string; closeSidebar: (e: any) => void }) => (
  <Link href={path} scroll onClick={closeSidebar}>
    <div className="flex items-center justify-between [&:not(first-of-type)]:mt-8">
      <p className="text-lg tracking-tight font-medium">{name}</p>
      <ArrowRight className="h-6 w-6" />
    </div>
  </Link>
);

export const Sidebar = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button className="md:hidden" variant="ghost" size="icon">
          <Menu className="h-7 w-7" />
          <span className="sr-only">Toggle Navigation Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <nav className="space-y-10 mt-10 flex-1">
          {nav.map((item) => (
            <SidebarItem
              key={item.name}
              {...item}
              closeSidebar={(e) => {
                e.preventDefault();
                setIsOpen(false);

                // Shadcn sheet bug
                setTimeout(() => {
                  router.push(item.path);
                }, 300);
              }}
            />
          ))}
        </nav>

        <SheetFooter className="ml-auto">
          <div className="flex items-center space-x-4">
            <ThemeToggle />

            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/sClarkeDev/cv-genie" target="_blank" rel="noopener noreferrer">
                <GitHubLogoIcon className="h-4 w-4" />
              </a>

              <span className="sr-only">Github Repository</span>
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
