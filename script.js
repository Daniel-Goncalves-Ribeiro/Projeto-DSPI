document.addEventListener('DOMContentLoaded', function() {
    const dotMenu = document.querySelector('.dot-menu');
    const configMenu = document.querySelector('.config-menu');
  
    dotMenu.addEventListener('mouseover', function() {
      configMenu.style.display = 'block';
    });
  
    dotMenu.addEventListener('mouseout', function() {
      configMenu.style.display = 'none';
    });
  
    configMenu.addEventListener('mouseover', function() {
      configMenu.style.display = 'block';
    });
  
    configMenu.addEventListener('mouseout', function() {
      configMenu.style.display = 'none';
    });
  });