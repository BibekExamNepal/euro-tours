'use client';

import Link from 'next/link';
import {ChevronDown, Menu, Moon, Search, Sun, X} from 'lucide-react';
import {useCallback, useEffect, useRef, useState} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import Image from 'next/image';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,} from '@/components/ui/sheet';
import {Collapsible, CollapsibleContent, CollapsibleTrigger,} from '@/components/ui/collapsible';
import {cn} from '@/lib/utils';
import {useTheme} from 'next-themes';
import {navItems} from '@/data';

export default function Navbar() {
    const {theme, setTheme, systemTheme} = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [mounted, setMounted] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const searchInputRef = useRef<HTMLInputElement>(null);

    const currentTheme = theme === 'system' ? systemTheme : theme;

    useEffect(() => {
        const timer = setTimeout(() => setMounted(true), 0);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isSearchOpen) {
            searchInputRef.current?.focus();
        }
    }, [isSearchOpen]);

    const toggleDropdown = useCallback((label: string) => {
        setActiveDropdown((prev) => (prev === label ? null : label));
    }, []);

    const handleSearchToggle = useCallback(() => {
        setIsSearchOpen((prev) => !prev);
        setIsMobileMenuOpen(false);
        setSearchQuery('');
    }, []);

    const handleSearchSubmit = useCallback(
        (e: React.FormEvent) => {
            e.preventDefault();
            if (searchQuery.trim()) {
                window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
            }
        },
        [searchQuery]
    );

    const closeMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
    }, []);

    const closeSearch = useCallback(() => {
        setIsSearchOpen(false);
        setSearchQuery('');
    }, []);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeSearch();
                closeMobileMenu();
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [closeSearch, closeMobileMenu]);

    const handleThemeToggle = useCallback(() => {
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    }, [currentTheme, setTheme]);

    if (!mounted) {
        return (
            <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-transparent">
                <nav className="flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="h-10 sm:h-12 w-28 sm:w-32 bg-white/10 rounded animate-pulse"/>
                </nav>
            </header>
        );
    }

    return (
        <header
            className={cn(
                'fixed top-0 z-50 w-full backdrop-blur-md transition-colors duration-300',
                isScrolled ? 'bg-black/90 dark:bg-black/95' : 'bg-transparent'
            )}
        >
            <nav
                className="flex h-16 sm:h-20 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
                role="navigation"
                aria-label="Main navigation"
            >
                <Link
                    href="/"
                    className="flex items-center gap-2 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-md transition-all"
                    aria-label="Euro Tours Travel - Home"
                >
                    <Image
                        src="/logo.png"
                        alt="Euro Tours Travel"
                        width={140}
                        height={56}
                        className="h-10 sm:h-12 w-auto"
                        priority
                    />
                </Link>

                <div className="flex items-center gap-1 sm:gap-2">
                    <NavigationMenu className="hidden lg:flex">
                        <NavigationMenuList className="flex items-center gap-1">
                            {navItems.map((item) =>
                                item.children ? (
                                    <NavigationMenuItem key={item.label}>
                                        <NavigationMenuTrigger
                                            className="gap-1 bg-transparent text-white hover:bg-white/10 focus-visible:bg-white/10 data-[state=open]:bg-white/10 transition-all">
                                            {item.label}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <div
                                                className="w-[480px] sm:w-[560px] p-4 sm:p-6 bg-white dark:bg-gray-900 backdrop-blur-md shadow-xl rounded-lg border border-gray-200 dark:border-gray-800">
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                                    {item.children.map((group) => (
                                                        <div key={group.group} className="space-y-3">
                                                            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 tracking-wider uppercase">
                                                                {group.group}
                                                            </h3>
                                                            <ul className="space-y-1" role="list">
                                                                {group.items.map((child) => (
                                                                    <li key={child.label}>
                                                                        <NavigationMenuLink asChild>
                                                                            <Link
                                                                                href={child.href}
                                                                                className="block rounded-lg p-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white"
                                                                            >
                                                                                <div
                                                                                    className="font-semibold text-sm mb-1 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                                                    {child.label}
                                                                                </div>
                                                                                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                                                                                    {child.description}
                                                                                </p>
                                                                            </Link>
                                                                        </NavigationMenuLink>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                ) : (
                                    <NavigationMenuItem key={item.label}>
                                        <Link
                                            href={item.href}
                                            className="inline-flex items-center px-3 sm:px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-md"
                                        >
                                            {item.label}
                                        </Link>
                                    </NavigationMenuItem>
                                )
                            )}
                        </NavigationMenuList>
                    </NavigationMenu>

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleSearchToggle}
                        aria-label="Open search"
                        aria-expanded={isSearchOpen}
                        className="hidden lg:flex text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent transition-all"
                    >
                        <Search className="h-5 w-5" aria-hidden="true"/>
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label={currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                        onClick={handleThemeToggle}
                        className="text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent transition-all"
                    >
                        {currentTheme === 'dark' ? (
                            <Sun className="h-5 w-5" aria-hidden="true"/>
                        ) : (
                            <Moon className="h-5 w-5" aria-hidden="true"/>
                        )}
                    </Button>

                    <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="lg:hidden text-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent transition-all"
                                aria-label="Open menu"
                            >
                                <Menu className="h-6 w-6" aria-hidden="true"/>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full sm:w-96 overflow-y-auto">
                            <SheetHeader>
                                <SheetTitle>Menu</SheetTitle>
                            </SheetHeader>
                            <nav className="flex flex-col gap-1 mt-6" aria-label="Mobile menu">
                                {navItems.map((item) =>
                                    item.children ? (
                                        <Collapsible
                                            key={item.label}
                                            open={activeDropdown === item.label}
                                            onOpenChange={() => toggleDropdown(item.label)}
                                            className="border-b border-gray-200 dark:border-gray-800 pb-2 mb-2"
                                        >
                                            <CollapsibleTrigger
                                                className="flex items-center justify-between w-full py-3 px-4 text-base font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white">
                                                {item.label}
                                                <ChevronDown
                                                    className={cn(
                                                        'h-4 w-4 transition-transform duration-200',
                                                        activeDropdown === item.label && 'rotate-180'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </CollapsibleTrigger>
                                            <CollapsibleContent className="mt-2 pl-2 sm:pl-4 space-y-4">
                                                {item.children.map((group) => (
                                                    <div key={group.group} className="space-y-2">
                                                        <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 tracking-wider px-4 uppercase">
                                                            {group.group}
                                                        </h3>
                                                        <ul className="space-y-1" role="list">
                                                            {group.items.map((child) => (
                                                                <li key={child.label}>
                                                                    <Link
                                                                        href={child.href}
                                                                        className="block px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white"
                                                                        onClick={closeMobileMenu}
                                                                    >
                                                                        <div
                                                                            className="font-semibold text-sm mb-1 text-gray-900 dark:text-white">
                                                                            {child.label}
                                                                        </div>
                                                                        <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                                                                            {child.description}
                                                                        </p>
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </CollapsibleContent>
                                        </Collapsible>
                                    ) : (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            className="py-3 px-4 text-base font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white"
                                            onClick={closeMobileMenu}
                                        >
                                            {item.label}
                                        </Link>
                                    )
                                )}
                                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start gap-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:ring-2 focus-visible:ring-gray-900 dark:focus-visible:ring-white"
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            setIsSearchOpen(true);
                                        }}
                                        aria-label="Open search"
                                    >
                                        <Search className="h-4 w-4" aria-hidden="true"/>
                                        Search
                                    </Button>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>

            {isSearchOpen && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center pt-20 sm:pt-28 md:pt-32 px-4"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Search dialog"
                    onClick={closeSearch}
                >
                    <div
                        className="w-full max-w-2xl animate-in fade-in slide-in-from-top-4 duration-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <form onSubmit={handleSearchSubmit} className="relative">
                            <Input
                                ref={searchInputRef}
                                type="search"
                                placeholder="Search destinations, tours, services..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full h-12 sm:h-14 pl-4 sm:pl-5 pr-20 sm:pr-24 text-sm sm:text-base shadow-2xl border-2 focus-visible:ring-4 focus-visible:ring-white/20 bg-white dark:bg-gray-900 rounded-lg"
                                aria-label="Search destinations and tours"
                                autoComplete="off"
                            />
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                                <Button
                                    type="submit"
                                    size="icon"
                                    variant="ghost"
                                    className="h-8 w-8 sm:h-10 sm:w-10 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                                    aria-label="Submit search"
                                    disabled={!searchQuery.trim()}
                                >
                                    <Search className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true"/>
                                </Button>
                                <Button
                                    type="button"
                                    size="icon"
                                    variant="ghost"
                                    onClick={closeSearch}
                                    className="h-8 w-8 sm:h-10 sm:w-10 hover:bg-gray-100 dark:hover:bg-gray-800"
                                    aria-label="Close search"
                                >
                                    <X className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true"/>
                                </Button>
                            </div>
                        </form>
                        <p className="text-xs sm:text-sm text-gray-400 mt-3 text-center">
                            Press{' '}
                            <kbd className="px-2 py-1 bg-gray-800 text-white rounded text-xs font-semibold">
                                ESC
                            </kbd>{' '}
                            to close
                        </p>
                    </div>
                </div>
            )}
        </header>
    );
}