/**
 * G-TEC Ottapalam - Interactive Application Controller
 * Handles Course Explorer, Live Search, Category/Level Filters, Modals & WhatsApp Lead Gen
 */

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    selectedCategory: 'all',
    selectedLevel: 'all',
    searchQuery: '',
    visibleCount: 18,
    pageSize: 12,
    activeCourse: null
  };

  // DOM Elements
  const coursesGrid = document.getElementById('courses-grid');
  const courseCountBadge = document.getElementById('course-count-badge');
  const emptyState = document.getElementById('empty-state');
  const loadMoreBtn = document.getElementById('load-more-btn');
  const searchInput = document.getElementById('course-search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');
  const heroSearchInput = document.getElementById('hero-search-input');
  const heroSearchBtn = document.getElementById('hero-search-btn');
  const categoryTabs = document.querySelectorAll('.category-tab-btn');
  const levelChips = document.querySelectorAll('.level-chip-btn');

  // Modals
  const courseModal = document.getElementById('course-detail-modal');
  const courseModalClose = document.getElementById('course-modal-close');
  const courseModalBody = document.getElementById('course-modal-body');
  
  const enquiryModal = document.getElementById('enquiry-modal');
  const enquiryModalClose = document.getElementById('enquiry-modal-close');
  const enquiryForm = document.getElementById('enquiry-form');
  const enquiryCourseSelect = document.getElementById('enquiry-course-select');

  // Mobile Menu
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const mobileMenuClose = document.getElementById('mobile-menu-close');

  // Prepopulate Course Select in Enquiry Modal
  function populateEnquiryOptions() {
    if (!enquiryCourseSelect || typeof GTEC_COURSES === 'undefined') return;
    
    // Group courses by category
    const categoriesMap = {};
    GTEC_COURSES.forEach(c => {
      if (!categoriesMap[c.categoryName]) {
        categoriesMap[c.categoryName] = [];
      }
      categoriesMap[c.categoryName].push(c);
    });

    let html = '<option value="">-- Choose a Course / Domain --</option>';
    for (const [catName, list] of Object.entries(categoriesMap)) {
      html += `<optgroup label="${catName}">`;
      // take top popular or first 12 in each category for the select dropdown
      list.slice(0, 15).forEach(c => {
        html += `<option value="${c.title}">${c.title} (${c.level})</option>`;
      });
      html += `</optgroup>`;
    }
    html += '<option value="Other / General Career Counselling">Other / Career Counselling Guidance</option>';
    enquiryCourseSelect.innerHTML = html;
  }

  // Filter & Search Logic
  function getFilteredCourses() {
    if (typeof GTEC_COURSES === 'undefined') return [];

    return GTEC_COURSES.filter(course => {
      // Category match
      const matchCat = state.selectedCategory === 'all' || course.categoryKey === state.selectedCategory;
      
      // Level match
      const matchLevel = state.selectedLevel === 'all' || 
        (state.selectedLevel === 'Certificate' && course.level === 'Certificate') ||
        (state.selectedLevel === 'Diploma' && course.level === 'Diploma') ||
        (state.selectedLevel === 'Master' && course.level === 'Master') ||
        (state.selectedLevel === 'SAP Global' && course.level === 'SAP Global');

      // Search match
      const query = state.searchQuery.trim().toLowerCase();
      const matchSearch = !query || 
        course.title.toLowerCase().includes(query) ||
        course.categoryName.toLowerCase().includes(query) ||
        course.subCategory.toLowerCase().includes(query) ||
        (course.tags && course.tags.some(t => t.toLowerCase().includes(query)));

      return matchCat && matchLevel && matchSearch;
    });
  }

  // Render Course Cards
  function renderCourses() {
    const filtered = getFilteredCourses();
    const toShow = filtered.slice(0, state.visibleCount);

    if (courseCountBadge) {
      courseCountBadge.textContent = `${filtered.length} Courses Found`;
    }

    if (filtered.length === 0) {
      coursesGrid.innerHTML = '';
      emptyState.classList.remove('hidden');
      if (loadMoreBtn) loadMoreBtn.classList.add('hidden');
      return;
    }

    emptyState.classList.add('hidden');

    const html = toShow.map((c, index) => {
      // category color styling
      let catBadgeClass = 'bg-blue-100 text-blue-700';
      if (c.categoryKey === 'finance-and-business-management') catBadgeClass = 'bg-emerald-100 text-emerald-800';
      if (c.categoryKey === 'multimedia') catBadgeClass = 'bg-amber-100 text-amber-800';
      if (c.categoryKey === 'robotics') catBadgeClass = 'bg-purple-100 text-purple-800';
      if (c.categoryKey === 'hardware-and-networking') catBadgeClass = 'bg-cyan-100 text-cyan-800';
      if (c.categoryKey === 'cad') catBadgeClass = 'bg-rose-100 text-rose-800';

      let levelBadgeClass = 'badge-level-certificate';
      if (c.level === 'Diploma') levelBadgeClass = 'badge-level-diploma';
      if (c.level === 'Master') levelBadgeClass = 'badge-level-master';
      if (c.level === 'SAP Global') levelBadgeClass = 'badge-level-sap';

      return `
        <div class="course-card group p-6 flex flex-col justify-between" data-course-id="${c.id}">
          <div>
            <!-- Top Badges -->
            <div class="flex items-center justify-between gap-2 mb-4">
              <span class="text-xs font-semibold px-2.5 py-1 rounded-full ${catBadgeClass}">
                ${c.badge}
              </span>
              <span class="badge-level ${levelBadgeClass}">
                ${c.level}
              </span>
            </div>

            <!-- Course Title -->
            <h3 class="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-3">
              ${c.title}
            </h3>

            <!-- Sub category & Duration -->
            <div class="space-y-2 text-sm text-slate-600 mb-4">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Duration: <strong>${c.duration}</strong></span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Mode: ${c.mode}</span>
              </div>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-1.5 mb-6">
              ${(c.tags || []).slice(0, 3).map(t => `
                <span class="text-[11px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">#${t}</span>
              `).join('')}
            </div>
          </div>

          <!-- Bottom Actions -->
          <div class="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
            <button 
              type="button" 
              class="view-details-btn text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1.5"
              data-id="${c.id}"
            >
              <span>View Details</span>
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>

            <button 
              type="button"
              class="quick-apply-btn text-xs font-bold bg-amber-400 hover:bg-amber-500 text-slate-900 px-3.5 py-1.5 rounded-full shadow-sm transition-all"
              data-title="${c.title}"
            >
              Apply ↗
            </button>
          </div>
        </div>
      `;
    }).join('');

    coursesGrid.innerHTML = html;
    if (window.lucide) {
      lucide.createIcons();
    }

    // Load More Visibility
    if (loadMoreBtn) {
      if (toShow.length >= filtered.length) {
        loadMoreBtn.classList.add('hidden');
      } else {
        loadMoreBtn.classList.remove('hidden');
      }
    }

    // Attach Event Listeners to rendered cards
    attachCardListeners();
  }

  // Attach card click handlers
  function attachCardListeners() {
    document.querySelectorAll('.view-details-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openCourseDetailModal(id);
      });
    });

    document.querySelectorAll('.quick-apply-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const title = e.currentTarget.getAttribute('data-title');
        openEnquiryModal(title);
      });
    });
  }

  // Course Detail Modal
  function openCourseDetailModal(courseId) {
    if (typeof GTEC_COURSES === 'undefined') return;
    const course = GTEC_COURSES.find(c => c.id === courseId);
    if (!course) return;

    state.activeCourse = course;

    courseModalBody.innerHTML = `
      <div class="p-6 md:p-8">
        <div class="flex items-start justify-between gap-4 mb-4">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs font-bold px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                ${course.categoryName}
              </span>
              <span class="text-xs font-bold px-3 py-1 bg-amber-100 text-amber-900 rounded-full">
                ${course.level} Level
              </span>
            </div>
            <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
              ${course.title}
            </h2>
          </div>
        </div>

        <!-- Course Quick Stats Grid -->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-3 my-6 p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <div>
            <span class="text-xs text-slate-500 font-medium block">Duration</span>
            <span class="text-sm font-bold text-slate-900">${course.duration}</span>
          </div>
          <div>
            <span class="text-xs text-slate-500 font-medium block">Training Mode</span>
            <span class="text-sm font-bold text-slate-900">${course.mode}</span>
          </div>
          <div>
            <span class="text-xs text-slate-500 font-medium block">Certification</span>
            <span class="text-sm font-bold text-slate-900">${course.certified}</span>
          </div>
        </div>

        <!-- Highlights & What You Will Learn -->
        <div class="space-y-4 text-slate-700 text-sm leading-relaxed mb-6">
          <h4 class="font-bold text-slate-900 text-base">Key Program Highlights:</h4>
          <ul class="space-y-2.5">
            <li class="flex items-start gap-2.5">
              <svg class="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              <span><strong>100% Practical Hands-on Labs:</strong> Individual system allocation with industry standard software and real-time guidance.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <svg class="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              <span><strong>Certified Expert Trainers:</strong> Learn from industry experienced mentors dedicated to G-TEC Ottapalam students.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <svg class="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              <span><strong>Placement & Interview Training:</strong> Resume building, mock interviews, and direct placement opportunities across Kerala & Gulf.</span>
            </li>
            <li class="flex items-start gap-2.5">
              <svg class="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              <span><strong>Globally Validated Certificate:</strong> Verifiable online via QR code & G-TEC Central Portal.</span>
            </li>
          </ul>
        </div>

        <!-- Action Buttons in Modal -->
        <div class="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
          <button 
            type="button" 
            class="modal-enquire-btn flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md text-center"
            data-title="${course.title}"
          >
            Enquire for Admission
          </button>
          <a 
            href="https://wa.me/919995955501?text=${encodeURIComponent(`Hi G-TEC Ottapalam, I am interested in the "${course.title}" course. Please share fee structure and batch timings.`)}"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md text-center"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.2.662.591 1.221.774 1.394.86.174.086.275.073.376-.044.101-.116.433-.506.549-.68.116-.173.231-.144.39-.086s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"/></svg>
            <span>Ask via WhatsApp</span>
          </a>
        </div>
      </div>
    `;

    courseModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Hook up internal modal enquire button
    const modalEnquireBtn = courseModalBody.querySelector('.modal-enquire-btn');
    if (modalEnquireBtn) {
      modalEnquireBtn.addEventListener('click', () => {
        closeCourseDetailModal();
        openEnquiryModal(course.title);
      });
    }
  }

  function closeCourseDetailModal() {
    courseModal.classList.remove('active');
    document.body.style.overflow = '';
    state.activeCourse = null;
  }

  // Enquiry Modal
  function openEnquiryModal(preselectedCourse = '') {
    if (enquiryCourseSelect && preselectedCourse) {
      // Find if course exists in options or add it temporarily
      let found = false;
      for (let i = 0; i < enquiryCourseSelect.options.length; i++) {
        if (enquiryCourseSelect.options[i].value.toLowerCase().includes(preselectedCourse.toLowerCase())) {
          enquiryCourseSelect.selectedIndex = i;
          found = true;
          break;
        }
      }
      if (!found) {
        const opt = new Option(preselectedCourse, preselectedCourse, true, true);
        enquiryCourseSelect.add(opt);
      }
    }

    enquiryModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeEnquiryModal() {
    enquiryModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Enquiry Form Submit (WhatsApp + Notification)
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('enquiry-name').value.trim();
      const phone = document.getElementById('enquiry-phone').value.trim();
      const email = document.getElementById('enquiry-email').value.trim();
      const course = enquiryCourseSelect.value || 'General Enquiry';
      const batch = document.getElementById('enquiry-batch').value;
      const message = document.getElementById('enquiry-message').value.trim();

      // Format WhatsApp Message
      const waText = `*🎓 G-TEC Ottapalam Admission Enquiry*\n\n` +
        `👤 *Name:* ${name}\n` +
        `📞 *Phone:* ${phone}\n` +
        `✉️ *Email:* ${email || 'Not provided'}\n` +
        `📚 *Course:* ${course}\n` +
        `⏰ *Preferred Batch:* ${batch}\n` +
        `💬 *Message:* ${message || 'Please send course details and admission criteria.'}\n\n` +
        `_Source: G-TEC Ottapalam Website_`;

      const waUrl = `https://wa.me/919995955501?text=${encodeURIComponent(waText)}`;

      // Fire festive celebration confetti (armor-bd style micro-interaction)
      if (typeof confetti !== 'undefined') {
        confetti({
          particleCount: 85,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#2563EB', '#FBBF24', '#F59E0B', '#3B82F6', '#10B981']
        });
      }

      // Show feedback & open WhatsApp
      setTimeout(() => {
        window.open(waUrl, '_blank');
        closeEnquiryModal();
        enquiryForm.reset();
      }, 500);
    });
  }

  // Event Listeners for Filters
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      categoryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.selectedCategory = tab.getAttribute('data-category');
      state.visibleCount = 18;
      renderCourses();
    });
  });

  levelChips.forEach(chip => {
    chip.addEventListener('click', () => {
      levelChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.selectedLevel = chip.getAttribute('data-level');
      state.visibleCount = 18;
      renderCourses();
    });
  });

  // Search Input Handlers
  if (searchInput) {
    let debounceTimer;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        state.searchQuery = e.target.value;
        state.visibleCount = 18;
        renderCourses();

        if (clearSearchBtn) {
          if (e.target.value.length > 0) {
            clearSearchBtn.classList.remove('hidden');
          } else {
            clearSearchBtn.classList.add('hidden');
          }
        }
      }, 250);
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      state.searchQuery = '';
      clearSearchBtn.classList.add('hidden');
      renderCourses();
      searchInput.focus();
    });
  }

  // Hero Search Bar Handlers
  if (heroSearchBtn && heroSearchInput) {
    const handleHeroSearch = () => {
      const q = heroSearchInput.value.trim();
      if (q) {
        state.searchQuery = q;
        if (searchInput) searchInput.value = q;
        if (clearSearchBtn) clearSearchBtn.classList.remove('hidden');
        renderCourses();

        // Smooth scroll to courses section
        const coursesSec = document.getElementById('courses-section');
        if (coursesSec) {
          coursesSec.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    heroSearchBtn.addEventListener('click', handleHeroSearch);
    heroSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleHeroSearch();
    });
  }

  // Quick Tags in Hero (clicking "Python", "Tally Prime", etc.)
  document.querySelectorAll('.hero-quick-tag').forEach(tag => {
    tag.addEventListener('click', (e) => {
      const val = e.currentTarget.getAttribute('data-query');
      if (heroSearchInput) heroSearchInput.value = val;
      if (searchInput) searchInput.value = val;
      state.searchQuery = val;
      renderCourses();
      const coursesSec = document.getElementById('courses-section');
      if (coursesSec) {
        coursesSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Load More Button
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      state.visibleCount += state.pageSize;
      renderCourses();
    });
  }

  // Modal Closures
  if (courseModalClose) courseModalClose.addEventListener('click', closeCourseDetailModal);
  if (enquiryModalClose) enquiryModalClose.addEventListener('click', closeEnquiryModal);

  [courseModal, enquiryModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeCourseDetailModal();
          closeEnquiryModal();
        }
      });
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCourseDetailModal();
      closeEnquiryModal();
    }
  });

  // Open Enquiry buttons globally
  document.querySelectorAll('.trigger-enquiry-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      openEnquiryModal();
    });
  });

  // Mobile Menu Drawer Handlers
  if (mobileMenuToggle && mobileMenuDrawer) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenuDrawer.classList.toggle('translate-x-full');
    });
  }

  if (mobileMenuClose && mobileMenuDrawer) {
    mobileMenuClose.addEventListener('click', () => {
      mobileMenuDrawer.classList.add('translate-x-full');
    });
  }

  // Animated Numbers Counter on Scroll
  const statNumbers = document.querySelectorAll('.counter-number');
  let animatedStats = false;

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animatedStats) {
        animatedStats = true;
        statNumbers.forEach(counter => {
          const target = parseFloat(counter.getAttribute('data-target'));
          const isDecimal = target % 1 !== 0;
          const duration = 2000;
          const start = 0;
          const startTime = performance.now();

          const updateNumber = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = start + (target - start) * easeOut;

            counter.textContent = isDecimal ? current.toFixed(1) : Math.floor(current);

            if (progress < 1) {
              requestAnimationFrame(updateNumber);
            } else {
              counter.textContent = target;
            }
          };

          requestAnimationFrame(updateNumber);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('stats-section');
  if (statsSection) {
    countObserver.observe(statsSection);
  }

  // ==========================================================================
  // SCROLLYTELLING ENGINE (Inspired by armor-bd.com)
  // Lenis Smooth Scroll + GSAP ScrollTrigger Pinned Scrubbing + Cursor Follower
  // ==========================================================================

  function initScrollytelling() {
    // 1. Lenis Smooth Scroll Setup
    let lenis = null;
    if (typeof Lenis !== 'undefined') {
      try {
        lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1.0
        });

        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
          gsap.registerPlugin(ScrollTrigger);
          lenis.on('scroll', ScrollTrigger.update);
          gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
          });
          gsap.ticker.lagSmoothing(0);
        } else {
          function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
          }
          requestAnimationFrame(raf);
        }
      } catch (err) {
        console.warn('Lenis initialization notice:', err);
      }
    }

    // 2. Interactive Top Scroll Progress Bar
    const progressBar = document.getElementById('scroll-progress-bar');
    const updateProgressBar = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (progressBar) progressBar.style.width = `${progress}%`;
    };
    window.addEventListener('scroll', updateProgressBar, { passive: true });
    updateProgressBar();

    // 3. Ambient Cursor Glow Follower
    const cursorGlow = document.getElementById('cursor-glow');
    if (cursorGlow && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      let mouseX = window.innerWidth / 2;
      let mouseY = window.innerHeight / 2;
      let curX = mouseX;
      let curY = mouseY;

      window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      }, { passive: true });

      const animateCursor = () => {
        curX += (mouseX - curX) * 0.15;
        curY += (mouseY - curY) * 0.15;
        cursorGlow.style.transform = `translate(${curX}px, ${curY}px) translate(-50%, -50%)`;
        requestAnimationFrame(animateCursor);
      };
      requestAnimationFrame(animateCursor);
    }

    // 4. Act 1: Hero Device Scale on Scroll
    const laptopFrame = document.querySelector('.laptop-frame');
    const heroBackdrop = document.querySelector('.hero-backdrop-typography');
    
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && laptopFrame) {
      gsap.timeline({
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2
        }
      })
      .to(laptopFrame, {
        scale: 1.05,
        y: 40,
        ease: 'none'
      })
      .to(heroBackdrop, {
        letterSpacing: '0.22em',
        opacity: 0,
        y: -60,
        ease: 'none'
      }, '<');
    }

    // 5. Act 2: Pinned 3-Step Student Transformation Scrub
    const journeySection = document.getElementById('story-journey-section');
    const stepCards = [
      document.getElementById('story-step-1'),
      document.getElementById('story-step-2'),
      document.getElementById('story-step-3')
    ];
    const photoSlides = [
      document.getElementById('story-photo-1'),
      document.getElementById('story-photo-2'),
      document.getElementById('story-photo-3')
    ];
    const dots = [
      document.getElementById('dot-1'),
      document.getElementById('dot-2'),
      document.getElementById('dot-3')
    ];
    const stepIndicator = document.getElementById('story-step-indicator');

    function setJourneyStep(stepIndex) {
      stepCards.forEach((card, idx) => {
        if (card) {
          if (idx === stepIndex) card.classList.add('active');
          else card.classList.remove('active');
        }
      });

      photoSlides.forEach((slide, idx) => {
        if (slide) {
          if (idx === stepIndex) slide.classList.add('active');
          else slide.classList.remove('active');
        }
      });

      dots.forEach((dot, idx) => {
        if (dot) {
          if (idx === stepIndex) {
            dot.className = 'w-8 h-2 rounded-full bg-amber-400 transition-all duration-300';
          } else {
            dot.className = 'w-2.5 h-2 rounded-full bg-slate-700 transition-all duration-300';
          }
        }
      });

      if (stepIndicator) {
        stepIndicator.textContent = `0${stepIndex + 1}`;
      }
    }

    if (journeySection) {
      const handleJourneyScroll = () => {
        const rect = journeySection.getBoundingClientRect();
        const totalScrollable = journeySection.offsetHeight - window.innerHeight;
        if (totalScrollable <= 0) return;

        const progress = Math.max(0, Math.min(1, -rect.top / totalScrollable));

        if (progress < 0.33) {
          setJourneyStep(0);
        } else if (progress < 0.66) {
          setJourneyStep(1);
        } else {
          setJourneyStep(2);
        }
      };

      window.addEventListener('scroll', handleJourneyScroll, { passive: true });
      handleJourneyScroll();
    }

    // 6. Act 3: Horizontal Pinned Discipline Track (Vertical-to-Horizontal Scroll)
    const horizontalSection = document.getElementById('categories-section');
    const horizontalTrack = document.getElementById('horizontal-scroll-track');

    if (horizontalSection && horizontalTrack) {
      const handleHorizontalScroll = () => {
        const rect = horizontalSection.getBoundingClientRect();
        const totalScrollable = horizontalSection.offsetHeight - window.innerHeight;
        if (totalScrollable <= 0) return;

        const progress = Math.max(0, Math.min(1, -rect.top / totalScrollable));
        const maxTranslate = horizontalTrack.scrollWidth - window.innerWidth + (window.innerWidth * 0.12);

        if (maxTranslate > 0) {
          horizontalTrack.style.transform = `translateX(-${progress * maxTranslate}px)`;
        }
      };

      window.addEventListener('scroll', handleHorizontalScroll, { passive: true });
      window.addEventListener('resize', handleHorizontalScroll);
      handleHorizontalScroll();

      // Hook up "Explore Stream ↗" buttons on cards to auto-filter and smooth-scroll
      document.querySelectorAll('.explore-stream-trigger').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const catKey = btn.getAttribute('data-category');
          if (catKey) {
            const targetTab = document.querySelector(`.category-tab-btn[data-category="${catKey}"]`);
            if (targetTab) {
              targetTab.click();
            }
            const coursesSec = document.getElementById('courses-section');
            if (coursesSec) {
              coursesSec.scrollIntoView({ behavior: 'smooth' });
            }
          }
        });
      });
    }
  }

  // Initialize all controllers
  populateEnquiryOptions();
  renderCourses();
  initScrollytelling();
});
