const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
});
document.addEventListener("DOMContentLoaded", () => {
  const contentArea = document.getElementById("dashboard-content");
  const navLinks = document.querySelectorAll(".nav-list a");

  const sectionContents = {
    Pemasukan: `
     <iframe src="./agrocoin_dashboard copy.html" style="width:100%; height:100%; border:none;"></iframe>
    `,
    Produksi: `
      <iframe src="./agrocoin_dashboard.html" style="width:100%; height:100%; border:none;"></iframe>
    `,
    Profile: `
      <iframe src="./account-profile.html" style="width:100%; height:700px; border:none;"></iframe>
    `
  };

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault(); // Hindari reload halaman
      const section = link.getAttribute("data-section");
      if (sectionContents[section]) {
        contentArea.innerHTML = sectionContents[section];
      }
    });
  });
});