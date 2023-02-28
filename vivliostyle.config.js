module.exports = {
  language: "ja",
  theme: "theme_print.css",
  entry: [
    "example/inside-cover_01.md",
    {
      path: "example/toc_01.md",
      rel: 'contents',
    },
    "example/illust_01.md",
    "example/illust_02.md",
    "example/illust_03.md",
    "example/text_01.md",
    "example/list-of-works_01.md",
    "example/colophon_01.md",
  ],
  output: [
    {
      path: "./book.pdf",
      format: "pdf",
    },
  ],
};
