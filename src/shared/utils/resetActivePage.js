export default function resetActivePage()
{
  const currentIcon = document.querySelector(".icon-active");
  const currentPage = document.querySelector(".page-active");

  if (currentIcon) {
    currentIcon.classList.remove("icon-active");
  }

  if (currentPage) {
    currentPage.classList.remove("page-active");
  }
}