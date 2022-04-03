"use strict";

const domainName = function (url) {
  const httpsRegex = new RegExp("https");
  const httpRegex = new RegExp("http");
  const wwwRegex = new RegExp("www");
  const httpwwwRegex = new RegExp("http://www.");
  const httpswwwRegex = new RegExp("https://www.");

  if (httpsRegex.test(url))
    return httpswwwRegex.test(url)
      ? url.slice(12).split(".")[0]
      : url.slice(8).split(".")[0];

  if (httpRegex.test(url))
    return httpwwwRegex.test(url)
      ? url.slice(11).split(".")[0]
      : url.slice(7).split(".")[0];

  if (wwwRegex.test(url)) return url.slice(4).split(".")[0];

  return url.split(".")[0];
};

console.log(domainName("4coghu.pro/index.php"));
