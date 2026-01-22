import * as path from "node:path";
import { defineConfig } from "rspress/config";

export default defineConfig({
    root: path.join(__dirname, "docs"),
    base: "/nikdevisfun-blog",
    title: "NikDevIsFun",
    description: "Code · Life · Design",
    icon: "/rspress-icon.png",
    logo: {
        light: "/rspress-light-logo.png",
        dark: "/rspress-dark-logo.png",
    },
    themeConfig: {
        nav: [
            { text: "Blog", link: "/blog" },
            { text: "Tags", link: "/tags" },
            { text: "Category", link: "/category" },
        ],

        socialLinks: [
            {
                icon: "github",
                mode: "link",
                content: "https://github.com/nikdevisfun/nikdevisfun-blog",
            },
        ],
    },
    // globalUIComponents: [
    //     [
    //         path.join(__dirname, 'components', 'HelloWorld.tsx'),
    //         {
    //             foo: 'bar'
    //         }
    //     ]
    // ]
    globalStyles: path.join(__dirname, "styles/index.css"),
});
