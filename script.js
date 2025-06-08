const loadMoreBtn = document.querySelector(".load-more");
const hiddenSections = document.querySelectorAll(".cards");

loadMoreBtn.addEventListener("click", () => {
  hiddenSections.forEach(section => section.style.display = "block");
  loadMoreBtn.style.display = "none";
});



document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

   
    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;

   
    alert(`Thanks ${name}! Your message has been received.`);

     
    this.reset();
});