/* ----- Contact Form via Google Apps Script ----- */
const WEB_APP_URL =
   "https://script.google.com/macros/s/AKfycbwq_NWDcL8mh6APs8RRkdmC4Lxqe6FQWB3xQWSdLSrR8af9LOqYzD7JBgq4T_kenJH5Rg/exec";

document.addEventListener("DOMContentLoaded", function () {
   const quoteForm = document.getElementById("quoteForm");

   quoteForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const btn = e.target.querySelector("button");
      if (!btn) {
         console.error("Submit button not found.");
         return;
      }

      const lbl = btn.querySelector("span");
      const spin = btn.querySelector("span.spinner-border");

      if (!lbl || !spin) {
         console.error("Button span or spinner not found.");
         return;
      }

      spin.classList.remove("d-none");
      btn.disabled = true;

      const params = new URLSearchParams(new FormData(e.target)).toString();

      // Make the fetch request
      fetch(`${WEB_APP_URL}?${params}`, { mode: "no-cors" })
         .then(function () {
            e.target.reset();
            lbl.textContent = "Sent";
            spin.classList.add("d-none");
            btn.disabled = true;
            const thanksMsg = document.getElementById("thanksMsg");
            if (thanksMsg) thanksMsg.style.display = "block";
         })
         .catch(function () {
            alert("Failed to send. Please try again later.");
            spin.classList.add("d-none");
            btn.disabled = false;
         });
   });
});

// /* ----- contact form via Google Apps Script ----- */
// const WEB_APP_URL =
//    "https://script.google.com/macros/s/AKfycbwq_NWDcL8mh6APs8RRkdmC4Lxqe6FQWB3xQWSdLSrR8af9LOqYzD7JBgq4T_kenJH5Rg/exec";
// document.getElementById("quoteForm").addEventListener("submit", (e) => {
//    e.preventDefault();
//    const btn = e.target.querySelector("button");
//    const lbl = btn.querySelector("span");
//    const spin = btn.querySelector("span.spinner-border");

//    spin.classList.remove("d-none");

//    btn.appendChild(spin);
//    btn.disabled = true;
//    const params = new URLSearchParams(new FormData(e.target)).toString();
//    fetch(`${WEB_APP_URL}?${params}`, { mode: "no-cors" })
//       .then(() => {
//          e.target.reset();
//          lbl.textContent = "Sent";
//          spin.remove();
//          btn.disabled = true;
//          document.getElementById("thanksMsg").style.display = "block";
//       })
//       .catch(() => {
//          alert("Failed to send. Please try again later.");
//          spin.remove();
//          btn.disabled = false;
//       });
// });

document.addEventListener("DOMContentLoaded", () => {
   const backToTop = document.getElementById("back-to-top");

   window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
         backToTop.classList.remove("d-none");
      } else {
         backToTop.classList.add("d-none");
      }
   });

   backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   });
});

window.addEventListener("DOMContentLoaded", function () {
   const loader = document.getElementById("page-loader");

   setTimeout(() => {
      loader.classList.add("fade-out");

      setTimeout(() => loader.remove(), 100);
   }, 1000);
});
