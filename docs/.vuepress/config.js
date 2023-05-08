// .vuepress/config.js
module.exports = {
    // base: "/global_home/share/ted/codebase/dep-doc/dist",
    base: "/",
    themeConfig: {
        lastUpdated: 'Last Updated', // string | boolean
        search: true,
        searchMaxSuggestions: 10,
    },
    // markdown: {
    //     lineNumbers: true // 给代码块加上行号
    // },
    // extendMarkdown(md) {
    //     md.set({ html: true });
    //     md.use(require("markdown-it-katex"));
    // },
    head: [
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css' }],
        ['link', { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css" }]
    ],
}