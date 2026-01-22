import * as path from "node:path";
import { defineConfig } from "rspress/config";

export default defineConfig({
    root: path.join(__dirname, "docs"),
    base: "/",
    title: "NikDevIsFun",
    description: "Code · Life · Design",
    icon: "/rspress-icon.png",
    logo: {
        light: "/rspress-light-logo.png",
        dark: "/rspress-dark-logo.png",
    },
    themeConfig: {
        nav: [
            { text: "Blog", link: "/posts" },
            { text: "Tags", link: "/tags" },
            { text: "Category", link: "/category" },
        ],

        socialLinks: [
            {
                icon: "github",
                mode: "link",
                content: "https://github.com/nikdevisfun/nikdevisfun.github.io",
            },
        ],
    },
    // globalUIComponents: [
    //     [ path.join(__dirname, 'components', 'Comment.tsx'), {} ]
    // ],
    globalStyles: path.join(__dirname, "styles/index.css"),
});
