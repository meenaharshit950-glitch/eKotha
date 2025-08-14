const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

fetch('data.json')
  .then(res => res.json())
  .then(data => {
    const profile = data.find(p => p.id == id);
    if (!profile) {
      document.getElementById('profileDetails').innerHTML = "<h2>Profile not found</h2>";
      return;
    }
    document.getElementById('profileDetails').innerHTML = `
      <img src="${profile.image}" alt="${profile.name}">
      <h2>${profile.name}</h2>
      <p>Age: ${profile.age}</p>
      <p>Address: ${profile.address}</p>
      <p>${profile.article}</p>
      <a class="book-btn" href="payment.html?name=${encodeURIComponent(profile.name)}&price=${profile.price}">
        Book This One - $${profile.price}
      </a>
    `;
  });