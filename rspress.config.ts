import * as path from "node:path";
import { defineConfig } from "rspress/config";

export default defineConfig({
    root: path.join(__dirname, "docs"),
    base: "/nikdevisfun-blog",
    title: "NikDevIsFun",
    description: "tech & life",
    icon: "/rspress-icon.png",
    logo: {
        light: "/rspress-light-logo.png",
        dark: "/rspress-dark-logo.png",
    },
    themeConfig: {
        nav: [
            { text: "Blog", link: "/" },
            { text: "Github", link: "http://github.com/nikdevisfun" },
        ],

        socialLinks: [
            {
                icon: "github",
                mode: "link",
                content: "https://github.com/web-infra-dev/rspress",
            },
        ],
    },
});
