document.addEventListener('DOMContentLoaded', function() {
    const serviceGroups = document.querySelectorAll('.service-group');
    serviceGroups.forEach((group, index) => {
      group.style.setProperty('--index', index);
    });
  
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
      });
      
      item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = 'transparent';
      });
    });
  
    function createLoader() {
      const loader = document.createElement('div');
      loader.id = 'loading-animation';
      
      const spinner = document.createElement('div');
      spinner.className = 'spinner';
      
      const text = document.createElement('p');
      text.textContent = 'Loading status information...';
      
      loader.appendChild(spinner);
      loader.appendChild(text);
      document.body.appendChild(loader);
      
      setTimeout(() => {
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
          loader.remove();
        }, 500);
      }, 1200);
    }
    
    const overallStatus = document.getElementById('overall-status');
    if (overallStatus) {
      const statusText = overallStatus.textContent.toLowerCase();
      if (statusText.includes('operational')) {
        overallStatus.classList.add('overall-operational');
      } else if (statusText.includes('degraded') || statusText.includes('partial')) {
        overallStatus.classList.add('overall-degraded');
      } else if (statusText.includes('outage') || statusText.includes('issue')) {
        overallStatus.classList.add('overall-issue');
      }
    }
    
    createLoader();
  });