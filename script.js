 const loadMoreBtn = document.querySelector(".load-more");
    const hiddenSections = document.querySelectorAll(".cards");

    loadMoreBtn.addEventListener("click", () => {
      hiddenSections.forEach(section => section.style.display = "block");
      loadMoreBtn.style.display = "none";
    });




