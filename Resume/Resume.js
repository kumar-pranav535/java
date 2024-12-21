 const sections = document.querySelectorAll('section');
 sections.forEach((section) => {
  section.addEventListener('click', () => {
    section.classList.toggle('active');
  });
 });
 const printButton = document.getElementById('print-button');
 printButton.addEventListener('click', () => {
  window.print ();
 });