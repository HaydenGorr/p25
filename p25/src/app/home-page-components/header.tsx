'use client'
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react'

interface Props {
    className?: string;
    onNavigate?: () => void;
}

const Header = ({ className, onNavigate }: Props) => {
    const pathname = usePathname();
    const router = useRouter();
    
    const isOnPage = (path: string) => pathname?.includes(path);
    const isHome = pathname === '/';
    
    const handleNavigate = (href: string) => {
        // Trigger the exit animation in the parent
        if (onNavigate) {
            onNavigate();
        }
        
        // Delay navigation
        setTimeout(() => {
            router.push(href);
        }, 0); // Match this with your animation duration
    };
    
    const NavigationButton = ({ path, label }: { path: string; label: string }) => {
        if (isOnPage(path)) {
            return (
                <button 
                    onClick={() => handleNavigate("/")}
                    className="p-2 hover:bg-home_page-primary/80 duration-300 transition-colors rounded-lg bg-black text-white group flex items-center gap-2"
                >
                    <ArrowLeft className="w-4 h-4 transform transition-transform duration-300 group-hover:-translate-x-1" />
                    Home
                </button>
            );
        }
        
        return (
            <button 
                onClick={() => handleNavigate(path)}
                className="bg-home_page-bg-dark p-2 hover:bg-home_page-primary/30 duration-300 transition-colors rounded-lg"
            >
                {label}
            </button>
        );
    };
    
    return (
        <div className={`${className} w-full p-4 flex justify-between items-center text-black font-light max-w-[90rem] mx-auto`} style={{backgroundColor: "#efeee7"}}>
            <p className="font-bold">HG</p>
            <div className="flex space-x-4 items-center text-sm">
                <NavigationButton path="/game-writing" label="Game Writing" />
                <NavigationButton path="/game-design" label="Game Design" />
                <NavigationButton path="/engineering" label="Engineering" />
                <NavigationButton path="/creative-writing" label="Creative Writing" />
                <button 
                    onClick={() => handleNavigate("/contact")}
                    className="bg-black text-white/90 p-3 hover:bg-home_page-primary/80 duration-300 transition-colors rounded-lg"
                >
                    Contact
                </button>
            </div>
        </div>
    );
};

export default Header;