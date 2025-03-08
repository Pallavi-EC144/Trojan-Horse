function loadPage(page) {
  const contentDiv = document.getElementById('content');
  let htmlContent = '';

  switch (page) {
    case 'home':
      htmlContent = `
        <section class="hero">
          <h2>Welcome to SurroCare</h2>
          <p>Your trusted platform for surrogacy solutions. Explore our services to find the right fertility solution for you.</p>
          <div class="cta-buttons">
            <a href="#">Find a Surrogate</a>
            <a href="#">Become a Surrogate</a>
          </div>
        </section>
      `;
      break;

    case 'surrogacy':
      htmlContent = `
        <section class="hero">
          <h2>Surrogacy Services</h2>
          <p>We provide safe and ethical surrogacy matchmaking for intended parents and surrogates.</p>
        </section>
      `;
      break;

    case 'legal-support':
      htmlContent = `
        <section class="hero">
          <h2>Legal Support</h2>
          <p>Get expert legal guidance for surrogacy agreements and contracts.</p>
        </section>
      `;
      break;

    case 'contact':
      htmlContent = `
        <section class="hero">
          <h2>Contact Us</h2>
          <p>Reach out to us for any queries or support.</p>
        </section>
      `;
      break;

    default:
      htmlContent = `
        <section class="hero">
          <h2>Welcome to SurroCare</h2>
          <p>Your trusted platform for surrogacy solutions. Explore our services to find the right fertility solution for you.</p>
        </section>
      `;
  }

  contentDiv.innerHTML = htmlContent;
}

// Load home page by default
loadPage('home');
