import Giscus from "@giscus/react";

export default function Comments() {
    return (
        <Giscus
            repo="nikdevisfun/nikdevisfun.github.io"
            repoId="R_kgDOQ-rwSw"
            category="General"
            categoryId="DIC_kwDOQ-rwS84C1Sjb"
            mapping="pathname"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="preferred_color_scheme"
            lang="en"
            loading="lazy"
        />
    );
}
