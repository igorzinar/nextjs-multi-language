"use client";

import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useTranslation} from "@/lib/useTranslation";
import LoadingPage from "@/app/loading";


const navLinks = [{name: "Home", href: "/home"}, {name: "About", href: "/about"}];

type HeaderProps = {
    initialLanguage?: string;
};


const TheHeader = ({initialLanguage}: HeaderProps) => {
    const pathname = usePathname();
    const {language, changeLanguage, t} = useTranslation()

    return (
        <header>
            {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return <Link href={link.href} key={link.href} className={isActive ? "active" : ""}>{link.name}</Link>
            })}
            <div className="language-selector">
                <select value={language} onChange={(e) => changeLanguage(e.target.value)} className="language-select">
                    <option value="en">🇬🇧 English</option>
                    <option value="ro">🇷🇴 Romanian</option>
                </select>
            </div>
        </header>
    );
};

export {TheHeader};
