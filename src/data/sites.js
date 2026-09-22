// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to add or update portfolio projects.
// screenshot: path to an image in /public/images/ (drop files there)
// url:        live site, opened via the "View live" button
// hex:        accent chip color — pick from the site's own palette
// ─────────────────────────────────────────────────────────────

export const SITES = [
  {
    slug: "eeheo",
    name: "EEHEO",
    org: "Ekwash Elgon HIV Empowerment Organization",
    type: "Community health nonprofit",
    location: "Uganda",
    url: "https://eeheo.org", // ← replace with the real URL
    screenshot: "/images/eeheo.png",
    hex: "#2a7f7a",
    description:
      "A full identity and site for a community health organization on the slopes of Mount Elgon — topographic contour motifs, a masonry gallery with lightbox, and scroll-reveal storytelling. Optimized to load in under a second on 3G.",
    stack: ["Netlify", "Cloudflare DNS", "FormSubmit", "GA4"],
    outcome: "First big website presence for the organization; used in grant applications.",
  },
  {
    slug: "MercyTrips",
    name: "MercyTrips Uganda",
    org: "MercyTrips",
    type: "Medical mission nonprofit",
    location: "USA x Uganda",
    url: "https://mercytrips.net", // ← replace with the real URL
    screenshot: "/images/mercytrips.png",
    hex: "#143728",
    description:
      "A site for a medical mission nonprofit — program pages, volunteer signups, and a donation flow. Designed to be easy to update as programs grow, and optimized for low-bandwidth visitors.",
    stack: ["Netlify", "GoDaddy"],
    outcome: "Completed and delivered.",
  },
  {
    slug: "fembi",
    name: "FEMBI Agri Support",
    org: "FEMBI Agri Support",
    type: "Agricultural NGO",
    location: "Uganda",
    url: "https://fembiltd.netlify.app/",
    screenshot: "/images/fembi.png",
    hex: "#b8862b",
    description:
      "A site for a farmer-centered agricultural NGO in the Mount Elgon region — nine interlocking program pages (climate-smart agriculture, agribusiness development, market linkages, value addition, agri-financing) laid out around an eight-step 'how we work' methodology, plus impact stats with count-up animation and a streamlined contact flow. Designed so content is easy to update as programs grow.",
    stack: ["Netlify", "FormSubmit", "GA4"],
    outcome: "Completed and delivered.",
  },
  {
    slug: "peneza",
    name: "Peneza Hospital",
    org: "Peneza Hospital",
    type: "Healthcare provider",
    location: "Kenya",
    url: "https://penezahospital.org",
    screenshot: "/images/peneza.png",
    hex: "#3462a8",
    description:
      "A hospital site built for clarity under pressure: a Level 4 private hospital in Rongo, Migori County, with service cards spanning 24/7 emergency care, 12 inpatient wards, theatre, laboratory, pharmacy, and maternity and mental wellness programs — all reachable in two taps. Accessible color contrast throughout and aggressive image optimization for low-bandwidth visitors.",
    stack: ["Netlify", "Cloudflare DNS"],
    outcome: "Live and serving patients seeking care information.",
  },
  {
    slug: "ngero",
    name: "NGERO",
    org: "Nyanza Gulf Ecosystem Restoration Organization",
    type: "Conservation nonprofit",
    location: "Kenya",
    url: "https://ngero.netlify.app/",
    screenshot: "/images/ngero.png",
    hex: "#1f7a6c",
    description:
      "A site for a Lake Victoria Basin conservation nonprofit restoring the Nyanza Gulf ecosystem — sections built around three pillars (ecosystem restoration, community empowerment, climate resilience), a 2024–2032 strategic roadmap, and action-oriented photography of fieldwork with fisherfolk and farmers. A dedicated 'Get Involved' path drives community and donor engagement.",
    stack: ["Netlify", "FormSubmit", "GA4"],
    outcome: "Completed and delivered.",
  },
  {
    slug: "kalavaibhav",
    name: "Kalavaibhav Sevabhavi Sanstha",
    org: "Kalavaibhav Sevabhavi Sanstha",
    type: "Disability arts school",
    location: "India",
    url: "https://funcraftltd.netlify.app/",
    screenshot: "/images/funcraft.png",
    hex: "#d1495b",
    description:
      "A site for a Pune-based charitable trust running creative arts classes for differently-abled individuals — eight art-form sections (dance, drama, singing, painting, handicrafts, physical activities, yoga, music therapy), each with its own photography, plus 80G tax-exempt donation messaging and clear 'Get involved' calls-to-action.",
    stack: ["Netlify", "FormSubmit"],
    outcome: "Completed and delivered",
  },
  {
    slug: "communitycare",
    name: "Community Care Foundation",
    org: "Community Care Foundation",
    type: "HIV/AIDS awareness nonprofit",
    location: "South Africa",
    url: "https://communitycarecapetown.org/",
    screenshot: "/images/communitycare.png",
    hex: "#c0392b",
    description:
      "A site for a Cape Town foundation working on HIV/AIDS awareness, prevention, and education, with a focus on protecting adolescent girls. A warm photo-led hero, clear program, impact, and gallery pages, and prominent donation and 'Support Our Work' calls-to-action.",
    stack: ["Netlify"],
    outcome: "Completed and delivered.",
  },
  {
    slug: "chantalcoaching",
    name: "Chantal Ferbrache Coaching",
    org: "Chantal Ferbrache Coaching",
    type: "Women's coaching practice",
    location: "Netherlands",
    url: "https://chantalcoaching.netlify.app/",
    screenshot: "/images/chantalcoaching.png",
    hex: "#3b1f3f",
    description:
      "A site for a coaching practice built around women's transformation — an editorial serif headline over a community photo, with pages for programs, community, and support, and a persistent 'Book a Session' call-to-action.",
    stack: ["Netlify"],
    outcome: "Completed and delivered.",
  },
];

export const STATS = [
  { value: 8, suffix: "+", label: "Organizations served" },
  { value: 6, suffix: "", label: "Countries" },
  { value: 100, suffix: "%", label: "Sustainable" },
  { value: 1, suffix: "s", label: "Median load time", prefix: "<" },
];
