// Mobile Menu Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const closeMenuButton = document.getElementById('close-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!mobileMenuButton || !closeMenuButton || !mobileMenu) return;

  // Open Menu
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  });

  // Close Menu
  closeMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    document.body.style.overflow = 'auto';
  });

  // Close when any link inside menu is clicked
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = '';
    });
  });
});
