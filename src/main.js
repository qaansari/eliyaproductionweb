import {
  createIcons,
  PhoneCall,
  Phone,
  MessageCircle,
  Menu,
  X,
  Video,
  Sparkles,
  PlayCircle,
  Award,
  CheckCircle,
  Volume2,
  Ticket,
  ArrowRight,
  Music,
  Flame,
  Smile,
  Briefcase,
  Layers,
  Camera,
  Check,
  ChevronRight,
  MapPin,
  Calendar,
  Users,
  Maximize2,
  MessageSquare,
  Headset,
  Clock,
  Copy,
  Tag,
  ArrowUp
} from 'lucide';

// Initialize only the needed Lucide Icons (Ultra-optimized tree-shaking)
function initIcons() {
  createIcons({
    icons: {
      PhoneCall,
      Phone,
      MessageCircle,
      Menu,
      X,
      Video,
      Sparkles,
      PlayCircle,
      Award,
      CheckCircle,
      Volume2,
      Ticket,
      ArrowRight,
      Music,
      Flame,
      Smile,
      Briefcase,
      Layers,
      Camera,
      Check,
      ChevronRight,
      MapPin,
      Calendar,
      Users,
      Maximize2,
      MessageSquare,
      Headset,
      Clock,
      Copy,
      Tag,
      ArrowUp
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initIcons();
  initNavigation();
  initPortfolioFilter();
  initLightbox();
  initWhatsAppBooking();
  initBackToTop();
  initCurrentYear();
});

// Dynamic year in footer
function initCurrentYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// Navigation handling (Sticky & Mobile)
function initNavigation() {
  const header = document.getElementById('main-header');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const navLinks = document.querySelectorAll('.desktop-nav-link');

  // Sticky header scroll styling
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('bg-cinema-950/95', 'shadow-lg', 'border-b', 'border-white/10');
      header?.classList.remove('bg-transparent');
    } else {
      header?.classList.remove('bg-cinema-950/95', 'shadow-lg', 'border-b', 'border-white/10');
      header?.classList.add('bg-transparent');
    }
  });

  // Mobile menu toggle
  const toggleMobileMenu = (open) => {
    if (!mobileMenu) return;
    if (open) {
      mobileMenu.classList.remove('hidden');
      setTimeout(() => {
        mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
        mobileMenu.querySelector('.mobile-menu-panel')?.classList.remove('translate-x-full');
      }, 10);
      document.body.style.overflow = 'hidden';
    } else {
      mobileMenu.querySelector('.mobile-menu-panel')?.classList.add('translate-x-full');
      mobileMenu.classList.add('opacity-0', 'pointer-events-none');
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300);
      document.body.style.overflow = '';
    }
  };

  mobileMenuBtn?.addEventListener('click', () => toggleMobileMenu(true));
  mobileMenuClose?.addEventListener('click', () => toggleMobileMenu(false));
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => toggleMobileMenu(false));
  });

  // Scroll spy active link
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id') || '';
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-crimson-500', 'font-semibold');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-crimson-500', 'font-semibold');
      }
    });
  });
}

// Portfolio Category Filter
function initPortfolioFilter() {
  const filterBtns = document.querySelectorAll('.portfolio-filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Set active button style
      filterBtns.forEach(b => {
        b.classList.remove('bg-crimson-600', 'text-white', 'shadow-glow-red');
        b.classList.add('bg-cinema-850', 'text-slate-300', 'hover:bg-cinema-700');
      });
      btn.classList.add('bg-crimson-600', 'text-white', 'shadow-glow-red');
      btn.classList.remove('bg-cinema-850', 'text-slate-300', 'hover:bg-cinema-700');

      const filter = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
}

// Lightbox Modal for Portfolio
function initLightbox() {
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxTag = document.getElementById('lightbox-tag');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxTriggers = document.querySelectorAll('.lightbox-trigger');

  if (!lightbox || !lightboxImg) return;

  const openLightbox = (imgSrc, title, desc, tag) => {
    lightboxImg.src = imgSrc;
    if (lightboxTitle) lightboxTitle.textContent = title || 'Eliya Production Showcase';
    if (lightboxDesc) lightboxDesc.textContent = desc || '';
    if (lightboxTag) lightboxTag.textContent = tag || 'Production';
    lightbox.classList.remove('hidden');
    setTimeout(() => {
      lightbox.classList.remove('opacity-0', 'pointer-events-none');
    }, 10);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => {
      lightbox.classList.add('hidden');
      lightboxImg.src = '';
    }, 250);
    document.body.style.overflow = '';
  };

  lightboxTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const card = trigger.closest('.portfolio-card');
      if (!card) return;
      const imgSrc = card.getAttribute('data-full-img') || trigger.querySelector('img')?.src || '';
      const title = card.getAttribute('data-title') || '';
      const desc = card.getAttribute('data-description') || '';
      const tag = card.getAttribute('data-tag') || '';
      openLightbox(imgSrc, title, desc, tag);
    });
  });

  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
      closeLightbox();
    }
  });
}

// WhatsApp Booking Engine
function initWhatsAppBooking() {
  const nameInput = document.getElementById('client-name');
  const phoneInput = document.getElementById('client-phone');
  const serviceSelect = document.getElementById('event-service');
  const dateInput = document.getElementById('event-date');
  const cityInput = document.getElementById('event-city');
  const messageInput = document.getElementById('event-message');

  const previewBox = document.getElementById('whatsapp-preview-text');
  const sendBtn = document.getElementById('whatsapp-send-btn');
  const copyBtn = document.getElementById('whatsapp-copy-btn');
  const copyFeedback = document.getElementById('copy-feedback');

  const WHATSAPP_NUMBER = '923243478503';

  function buildMessage() {
    const name = nameInput?.value.trim() || '[Your Name]';
    const phone = phoneInput?.value.trim() || '[Your Phone]';
    const service = serviceSelect?.value || 'Event Production & Management';
    const date = dateInput?.value.trim() || '[To Be Decided]';
    const city = cityInput?.value.trim() || 'Karachi / Venue TBD';
    const notes = messageInput?.value.trim() || 'None';

    return `*EVENT INQUIRY - ELIYA PRODUCTION*\n\n` +
      `*Name:* ${name}\n` +
      `*Contact:* ${phone}\n` +
      `*Service Required:* ${service}\n` +
      `*Estimated Date:* ${date}\n` +
      `*City / Location:* ${city}\n` +
      `*Additional Details:* ${notes}\n\n` +
      `_Inquiry initiated via Eliya Production official web portal._`;
  }

  function updatePreview() {
    const msg = buildMessage();
    if (previewBox) {
      previewBox.textContent = msg;
    }
    if (sendBtn) {
      const encodedMsg = encodeURIComponent(msg);
      sendBtn.setAttribute('href', `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`);
    }
  }

  // Live update on input
  [nameInput, phoneInput, serviceSelect, dateInput, cityInput, messageInput].forEach(el => {
    el?.addEventListener('input', updatePreview);
    el?.addEventListener('change', updatePreview);
  });

  // Initial preview sync
  updatePreview();

  // Copy button
  copyBtn?.addEventListener('click', async () => {
    const msg = buildMessage();
    try {
      await navigator.clipboard.writeText(msg);
      if (copyFeedback) {
        copyFeedback.classList.remove('hidden');
        setTimeout(() => copyFeedback.classList.add('hidden'), 3000);
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  });

  // Quick Service Preset selection from Service Cards
  document.querySelectorAll('.service-book-preset').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const preset = btn.getAttribute('data-service-preset');
      if (serviceSelect && preset) {
        serviceSelect.value = preset;
        updatePreview();
      }
      const bookingSec = document.getElementById('contact');
      if (bookingSec) {
        bookingSec.scrollIntoView({ behavior: 'smooth' });
        nameInput?.focus();
      }
    });
  });
}

// Back to Top Button
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
      btn.classList.add('opacity-100', 'translate-y-0');
    } else {
      btn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
      btn.classList.remove('opacity-100', 'translate-y-0');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
