fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const grid = document.getElementById('profileGrid');
    data.forEach(profile => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${profile.image}" alt="${profile.name}">
        <p><b>${profile.name}</b>, ${profile.age}<br>${profile.address}</p>
      `;

      card.addEventListener('click', e => {
        // If ctrl/cmd or middle click, prevent default new tab behavior
        if (e.ctrlKey || e.metaKey || e.button === 1) {
          e.preventDefault();
        }
        window.location.href = `details.html?id=${profile.id}`;
      });

      grid.appendChild(card);
    });
  });