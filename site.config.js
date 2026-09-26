/* ============================================================
   POWERHOUSE FITNESS — SITE CONFIG (owner-editable)
   Every value the owner can change without code lives here.
   All data below is the club's real, published information.
   Full slot list: OWNER_CONTENT_CHECKLIST.md
   ============================================================ */
window.POWERHOUSE_SITE_CONFIG = {
  brandName: "PowerHouse Fitness",
  publicSlug: "powerhouse-hyd",
  locationLabel: "GACHIBOWLI · HYDERABAD",
  tagline: "PowerHouse",
  description: "Premium gym in Gachibowli, Hyderabad. Expert trainers, 50+ weekly classes, member app, diet plans.",

  /* --- Contact (real values from the club) --- */
  whatsapp: "917737077479",
  whatsappName: "PowerHouse",
  whatsappPreFill: "Hi PowerHouse Fitness! I'd like to start my free trial.",
  instagram: "https://instagram.com/powerhousefitnesshyd",
  email: "",
  address: "2nd Floor, DLF Cyber City, Gachibowli, Hyderabad 500032",
  phone: "+91 77370 77479",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=PowerHouse+Fitness+DLF+Cyber+City+Gachibowli+Hyderabad+500032",

  /* --- Google reviews (real: from the club's published profile) --- */
  googleRating: 0,
  googleReviewCount: 0,

  /* --- Trial pass --- */
  upiId: "",
  trialPass: {"label": "Free Trial", "price": 0, "note": "Book via WhatsApp"},

  /* --- Membership plans (real, from the club's published pricing) --- */
  plans: [
    { kicker: "STARTER", name: "Starter", price: "₹2,999", period: "/month", popular: false,
      desc: "Full access to start your transformation.",
      features: ["Full gym access", "2 group classes/week", "QR check-in & member app", "Locker facility"] },
    { kicker: "STANDARD", name: "Standard", price: "₹4,999", period: "/month", popular: true,
      desc: "Everything in Starter, plus coaching depth.",
      features: ["Everything in Starter", "Unlimited group classes", "1 PT session/month", "Custom diet plan", "Body composition analysis", "Guest passes (2/month)"] },
    { kicker: "PREMIUM", name: "Premium", price: "₹7,999", period: "/month", popular: false,
      desc: "Everything in Standard, plus full coaching.",
      features: ["Everything in Standard", "4 PT sessions", "Priority class booking", "Monthly progress review", "Unlimited guest passes", "Recovery & spa access"] }
  ],

  /* --- Coaches (real people from the club's published site — never invented) --- */
  trainers: [

  ],

  /* --- Training & services (real offerings — times via WhatsApp, none invented) --- */
  classes: [
    { category: "Group", name: "50+ Weekly Classes", time: "Daily 5am–11pm window", desc: "Group classes across strength, conditioning and cardio for every level." },
    { category: "Coaching", name: "Personal Training", time: "Flexible · book via WhatsApp", desc: "1-to-1 PT with expert trainers — from 1 session/month to unlimited." },
    { category: "Nutrition", name: "Custom Diet Plans", time: "Monthly review", desc: "Custom diet plans with body composition analysis." },
    { category: "Recovery", name: "Recovery & Spa", time: "Premium tier", desc: "Recovery and spa access for premium members." }
  ]
};
