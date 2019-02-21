var ToC =
  "<nav role='navigation' class='table-of-contents'>" +
    "<ul>";
var newLine, el, title, link, tagname;
$(".content h2, .content h3").each(function() {
  el = $(this);
  title = el.text();
  link = "#" + el.attr("id");
  if(el[0].tagName == "H3") {
  newLine =
    "<li><span class='toc2'>" +
      "<a href='" + link + "'>" +
        title +
      "</a>" +
    "</span></li>";
  ToC += newLine; }
  else {
  newLine =
    "<li><span class='toc1'>" +
      "<a href='" + link + "'>" +
        title +
      "</a>" +
    "</span></li>";
  ToC += newLine; }
});
ToC +=
   "</ul>" +
  "</nav>";
$(".toc").append(ToC);