module.exports = {
  language: "ja",
  theme: "theme_print.css",
  entry: [
    "example/title.md",
    "example/toc.md",
    "example/illust-01.md",
    "example/illust-02.md",
    "example/text-01.md",
    "example/colophon.md",
  ],
  output: [
    {
      path: "./book",
      format: "pdf",
    },
  ],
};
