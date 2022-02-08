const nav_btn = document.querySelectorAll("#button>li>a");
const nav_content = document.querySelectorAll(".content");
const about_content = nav_content[0].offsetTop;
const movie_content = nav_content[1].offsetTop;
const live_content = nav_content[2].offsetTop;
const exhibition_content = nav_content[3].offsetTop;
const sales_content = nav_content[4].offsetTop;
const gallery_content = nav_content[5].offsetTop;

nav_btn[0].onclick = function () {
  window.scroll({ top: about_content, behavior: "smooth" });
};

nav_btn[1].onclick = function () {
  window.scroll({ top: movie_content, behavior: "smooth" });
};

nav_btn[2].onclick = function () {
  window.scroll({ top: live_content, behavior: "smooth" });
};

nav_btn[3].onclick = function () {
  window.scroll({ top: exhibition_content, behavior: "smooth" });
};

nav_btn[4].onclick = function () {
  window.scroll({ top: sales_content, behavior: "smooth" });
};

nav_btn[5].onclick = function () {
  window.scroll({ top: gallery_content, behavior: "smooth" });
};
