document.addEventListener("DOMContentLoaded", () => {
  const siteHeader = document.querySelector(".site-header");
  const navbar = document.querySelector(".navbar");
  const premiumCards = Array.from(document.querySelectorAll(".premium-card")).slice(0, 3);

  const caseStudies = [
    {
      title: "Falcons Championship Visual System",
      eyebrow: "Premium Case Study 01",
      summary:
        "A competitive esports identity built for Saudi Falcons match-day energy, fan momentum, and high-pressure tournament moments.",
      phases: {
        sketch:
          "Mapped a sharper visual direction around Falcons speed, player confidence, aggressive framing, and bold match-day hierarchy.",
        process:
          "Built modular layouts, neon overlays, kinetic typography, and social-ready compositions for rapid campaign execution.",
        final:
          "Delivered a championship-ready visual system with posters, reveal graphics, stream assets, and launch-ready campaign templates."
      }
    },
    {
      title: "PUBG Tactical Content Direction",
      eyebrow: "Premium Case Study 02",
      summary:
        "A cinematic gaming content direction inspired by tactical battle royale tension, squad identity, and final-circle pressure.",
      phases: {
        sketch:
          "Explored dark tactical references, gear silhouettes, blue-zone glow, weapon angles, and PUBG-inspired environmental contrast.",
        process:
          "Composed dramatic social frames with layered smoke, sharp lighting, textured overlays, and battle-focused focal points.",
        final:
          "Produced a premium content direction system for hero posts, event beats, announcement artwork, and campaign rollouts."
      }
    },
    {
      title: "Creator Brand Identity: Morsyeto",
      eyebrow: "Premium Case Study 03",
      summary:
        "A personal brand identity system shaped around precision, cyberpunk luxury, gaming culture, and senior-level creative authority.",
      phases: {
        sketch:
          "Defined the Morsyeto tone: dark, fast, technical, confident, and built around a memorable esports-agency presence.",
        process:
          "Refined the identity through logo lockups, color behavior, editorial layouts, badge systems, and content rules.",
        final:
          "Launched a flexible identity kit for portfolio sections, social visuals, project case studies, and high-end client outreach."
      }
    }
  ];

  const applyAosAttributes = () => {
    const animatedGroups = [
      [".hero-section .badge, .hero-section h1, .hero-section .lead, .hero-section .btn", "fade-up"],
      [".hero-media", "zoom-in"],
      [".metric-item", "fade-up"],
      [".section-kicker, .section-padding h2, .section-padding .lead", "fade-up"],
      [".timeline-card", "fade-up"],
      [".project-card", "fade-up"],
      [".contact-form", "fade-left"]
    ];

    animatedGroups.forEach(([selector, animation]) => {
      document.querySelectorAll(selector).forEach((element, index) => {
        element.setAttribute("data-aos", animation);
        element.setAttribute("data-aos-delay", String(Math.min(index * 80, 320)));
      });
    });
  };

  const initAos = () => {
    if (window.AOS && typeof window.AOS.init === "function") {
      window.AOS.init({
        duration: 1000,
        once: true
      });
    }
  };

  const updateNavbarGlass = () => {
    const isScrolled = window.scrollY > 8;

    if (siteHeader) {
      siteHeader.classList.toggle("is-scrolled", isScrolled);
      siteHeader.classList.toggle("nav-hidden", isScrolled);
    }

    if (navbar) {
      navbar.style.background = isScrolled ? "rgba(8, 9, 10, 0.82)" : "";
      navbar.style.backdropFilter = isScrolled ? "blur(10px)" : "";
      navbar.style.webkitBackdropFilter = isScrolled ? "blur(10px)" : "";
      navbar.style.borderBottom = isScrolled ? "1px solid rgba(255, 255, 255, 0.16)" : "";
      navbar.style.boxShadow = isScrolled
        ? "0 18px 60px rgba(0, 0, 0, 0.42), 0 0 28px rgba(0, 242, 254, 0.08)"
        : "";
    }
  };

  const createCaseStudyModal = () => {
    if (document.getElementById("caseStudyModal")) {
      return;
    }

    const modal = document.createElement("div");
    modal.className = "modal fade";
    modal.id = "caseStudyModal";
    modal.tabIndex = -1;
    modal.setAttribute("aria-labelledby", "caseStudyModalTitle");
    modal.setAttribute("aria-hidden", "true");

    modal.innerHTML = `
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div class="modal-content bg-dark text-light border border-secondary-subtle">
          <div class="modal-header border-secondary-subtle">
            <div>
              <span class="case-study-eyebrow badge rounded-pill text-bg-light mb-2"></span>
              <h2 class="modal-title h3 fw-bold" id="caseStudyModalTitle"></h2>
            </div>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-4 p-lg-5">
            <p class="case-study-summary lead mb-4"></p>

            <ul class="nav nav-pills gap-2 mb-4" id="caseStudyTabs" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="sketch-tab" data-bs-toggle="pill" data-bs-target="#sketch-pane" type="button" role="tab" aria-controls="sketch-pane" aria-selected="true">Sketch</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="process-tab" data-bs-toggle="pill" data-bs-target="#process-pane" type="button" role="tab" aria-controls="process-pane" aria-selected="false">Process</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="final-tab" data-bs-toggle="pill" data-bs-target="#final-pane" type="button" role="tab" aria-controls="final-pane" aria-selected="false">Final</button>
              </li>
            </ul>

            <div class="tab-content">
              <div class="tab-pane fade show active" id="sketch-pane" role="tabpanel" aria-labelledby="sketch-tab" tabindex="0">
                <article class="case-study-phase">
                  <span class="project-number">01</span>
                  <h3 class="h4 fw-bold">Sketch</h3>
                  <p class="mb-0" data-phase="sketch"></p>
                </article>
              </div>
              <div class="tab-pane fade" id="process-pane" role="tabpanel" aria-labelledby="process-tab" tabindex="0">
                <article class="case-study-phase">
                  <span class="project-number">02</span>
                  <h3 class="h4 fw-bold">Process</h3>
                  <p class="mb-0" data-phase="process"></p>
                </article>
              </div>
              <div class="tab-pane fade" id="final-pane" role="tabpanel" aria-labelledby="final-tab" tabindex="0">
                <article class="case-study-phase">
                  <span class="project-number">03</span>
                  <h3 class="h4 fw-bold">Final</h3>
                  <p class="mb-0" data-phase="final"></p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
  };

  const openCaseStudy = (index) => {
    const data = caseStudies[index];
    const modalElement = document.getElementById("caseStudyModal");

    if (!data || !modalElement || !window.bootstrap) {
      return;
    }

    modalElement.querySelector(".case-study-eyebrow").textContent = data.eyebrow;
    modalElement.querySelector("#caseStudyModalTitle").textContent = data.title;
    modalElement.querySelector(".case-study-summary").textContent = data.summary;
    modalElement.querySelector('[data-phase="sketch"]').textContent = data.phases.sketch;
    modalElement.querySelector('[data-phase="process"]').textContent = data.phases.process;
    modalElement.querySelector('[data-phase="final"]').textContent = data.phases.final;

    const firstTab = modalElement.querySelector("#sketch-tab");
    if (firstTab && window.bootstrap.Tab) {
      window.bootstrap.Tab.getOrCreateInstance(firstTab).show();
    }

    window.bootstrap.Modal.getOrCreateInstance(modalElement).show();
  };

  const initCaseStudyCards = () => {
    createCaseStudyModal();

    premiumCards.forEach((card, index) => {
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      card.setAttribute("aria-label", `Open ${caseStudies[index].title} case study`);

      card.addEventListener("click", () => openCaseStudy(index));
      card.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openCaseStudy(index);
        }
      });
    });
  };

  applyAosAttributes();
  initAos();
  initCaseStudyCards();
  updateNavbarGlass();

  window.addEventListener("scroll", updateNavbarGlass, { passive: true });
});
