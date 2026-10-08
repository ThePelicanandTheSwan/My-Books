// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Dropdown toggle for Books menu
  var dropdownToggle = document.querySelector('.dropdown-toggle');
  var dropdownMenu = document.querySelector('.dropdown-menu');
  var dropdown = document.querySelector('.dropdown');
  
  if (dropdownToggle && dropdownMenu && dropdown) {
    dropdownToggle.addEventListener('click', function () {
      var isOpen = dropdownToggle.getAttribute('aria-expanded') === 'true';
      dropdownToggle.setAttribute('aria-expanded', String(!isOpen));
      dropdown.classList.toggle('open', !isOpen);
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (event) {
      if (!dropdown.contains(event.target)) {
        dropdownToggle.setAttribute('aria-expanded', 'false');
        dropdown.classList.remove('open');
      }
    });

    // Close dropdown when a link is clicked
    var links = dropdownMenu.querySelectorAll('a');
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        dropdownToggle.setAttribute('aria-expanded', 'false');
        dropdown.classList.remove('open');
      });
    });
  }

  // Dropdown toggle on mobile (tap to open "More Books")
  var dropdownParent = document.querySelector('.has-dropdown');
  if (dropdownParent) {
    var dropdownLink = dropdownParent.querySelector('a');
    dropdownLink.addEventListener('click', function (e) {
      if (window.innerWidth <= 860) {
        e.preventDefault();
        dropdownParent.classList.toggle('open');
      }
    });
  }

  // Cookie banner
  var banner = document.getElementById('cookie-banner');
  if (banner) {
    var stored = null;
    try { stored = localStorage.getItem('cookieChoice'); } catch (e) { /* storage unavailable */ }
    if (stored) {
      banner.classList.add('hidden');
    }
    var accept = document.getElementById('cookie-accept');
    var decline = document.getElementById('cookie-decline');
    if (accept) accept.addEventListener('click', function () {
      try { localStorage.setItem('cookieChoice', 'accepted'); } catch (e) {}
      banner.classList.add('hidden');
    });
    if (decline) decline.addEventListener('click', function () {
      try { localStorage.setItem('cookieChoice', 'declined'); } catch (e) {}
      banner.classList.add('hidden');
    });
  }

  // Countdown timer (Book Two page) - set a placeholder target date
  var daysEl = document.getElementById('cd-days');
  if (daysEl) {
    var target = new Date();
    target.setDate(target.getDate() + 45); // placeholder: 45 days out, edit as needed
    function tick() {
      var now = new Date();
      var diff = Math.max(0, target - now);
      var d = Math.floor(diff / (1000 * 60 * 60 * 24));
      var h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      var m = Math.floor((diff / (1000 * 60)) % 60);
      var s = Math.floor((diff / 1000) % 60);
      document.getElementById('cd-days').textContent = String(d).padStart(2, '0');
      document.getElementById('cd-hours').textContent = String(h).padStart(2, '0');
      document.getElementById('cd-mins').textContent = String(m).padStart(2, '0');
      document.getElementById('cd-secs').textContent = String(s).padStart(2, '0');
    }
    tick();
    setInterval(tick, 1000);
  }
});
