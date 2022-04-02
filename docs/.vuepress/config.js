module.exports = {
    title: 'Maprouting optimization',
    description: 'System for building the optimal route on the map',
    base: '/-system-of-optimization-of-maprouting/',
    sidebar: 'auto',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' }],
        ['link', {href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel :'stylesheet'}],
      ],
    port: 7070,
    themeConfig: {
        sidebar: [
            {
                title: 'Introduction',
                path:"/intro/"
            },
            {
                title: 'System modules',
                path:"/modules/",
            },
            {
                title: 'Websocket API',
                path:"/websocket/",
            },
            {
                title: 'Webhook settings',
                path:"/webhooks/",
            },
            {
              title: 'REST API',
              path:"/rest/"
            },
            {
                title: 'Database',
                path:"/database/"
            },
            {
                title: 'System testing',
                path:"/test/"
            }
        ],
        nav: [
            { text: 'start', link: '/' },
        ],
        sidebarDepth: 0,
        displayAllHeaders: true,
        lastUpdated: 'Last update',
        repo: 'https://github.com/BohdanShmalko/-system-of-optimization-of-maprouting',
        repoLabel: 'Github',
        docsDir: 'docs',
        docsBranch: 'master',
        markdown: {
            extendMarkdown: md => {
              md.set({ html: true });
            },
        }
    },
}