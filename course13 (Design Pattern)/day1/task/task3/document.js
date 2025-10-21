export function Document(header, footer, pages, text) {
  this.header = header;
  this.footer = footer;
  this.pages = pages;
  this.text = text;

  this.display = function () {
    console.log("Header:", this.header);
    console.log("Footer:", this.footer);
    console.log("Pages:", this.pages);
    console.log("Text:", this.text);
  };
}
