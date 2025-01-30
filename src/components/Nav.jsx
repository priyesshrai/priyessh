
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandX,
    IconHome,
    IconMessageChatbot,
} from "@tabler/icons-react";

export default function Nav() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/",
        },
        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/priyesh-rai/",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/priyesshrai",
        },
        {
            title: "Contact",
            icon: (
                <IconMessageChatbot className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#contact",
        },
    ];
    return (
        (<div className=" fixed bottom-5 left-0 flex items-center justify-center w-full">
            <FloatingDock
                items={links} />
        </div>)
    );
}
