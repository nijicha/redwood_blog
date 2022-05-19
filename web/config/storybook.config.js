module.exports = {
  previewHead: (head) => `
    ${head}
    <link href="https://fonts.googleapis.com" rel="preconnect" />
    <link crossorigin href="https://fonts.gstatic.com" rel="preconnect" />
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans+Thai:wght@100;200;300;400;500;600;700;800;900&family=Noto+Serif+Display:wght@100;200;300;400;500;600;700;800;900&family=Noto+Serif+Thai:wght@100;200;300;400;500;600;700;800;900&family=Sarabun:wght@100;200;300;400;500;600;700;800&display=swap"
      rel="stylesheet"
    />
  `,
}
