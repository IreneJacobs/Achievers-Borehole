/**
 * CENTRAL SITE CONFIGURATION
 * -------------------------------------------------------------
 * When the custom domain goes live, change `productionUrl` only.
 * Everything else (canonical URLs, sitemap, structured data) follows.
 */

export const siteConfig = {
  name: "Achievers Geotechnical Services Ltd",
  shortName: "Achievers Geotechnical",
  legalName: "Achievers Geotechnical Services Ltd",

  /** Future production domain (not live yet — safe to change later). */
  productionUrl: "https://achieversborehole.com.ng",
  /** Set to true once the custom domain is connected and serving. */
  domainIsLive: false,

  tagline: "Professional borehole drilling and water solutions in Ogun State",
  description:
    "Achievers Geotechnical Services Ltd provides professional borehole drilling, water surveys, pump installation, casing, borehole maintenance and irrigation solutions across Abeokuta and Ogun State.",

  contact: {
    phones: ["+234 705 555 4407", "+234 701 159 3569", "+234 810 002 9295"],
    email: "achieversgeotec@gmail.com",
    whatsapp: "2348033036185",
    whatsappDisplay: "+234 803 303 6185",
    location: "Abeokuta, Ogun State, Nigeria",
    serviceArea: "Abeokuta and most towns across Ogun State",
    hours: [
      { days: "Monday – Saturday", time: "8:00 AM – 6:00 PM" },
      { days: "Sunday", time: "Closed" },
    ],
    coordinates: { lat: 7.15793941, lng: 3.36817288 },
  },

  whatsappMessage:
    "Hello Achievers Geotechnical Services, I would like to make an enquiry about your water/borehole services. I would like to discuss my project and get more information. Thank you.",

  social: {
    instagram: "https://www.instagram.com/achieversgeotechnical",
    facebook: "https://web.facebook.com/profile.php?id=61572481917976",
    youtube: "https://youtube.com/@achieversgeotechnicalservices",
    tiktok: "https://www.tiktok.com/@achievers.borehol",
    x: "https://x.com/MrSpiral07/status/2101193060793143417",
  },

  /**
   * Web3Forms access key. This is a public (non-secret) key by design.
   * Replace with the key from web3forms.com registered to achieversgeotec@gmail.com.
   */
  web3formsAccessKey: "REPLACE_WITH_WEB3FORMS_ACCESS_KEY",
} as const;

export const whatsappLink = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
  siteConfig.whatsappMessage,
)}`;

export const telLink = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;

export const mapsEmbedSrc = `https://www.google.com/maps?q=${siteConfig.contact.coordinates.lat},${siteConfig.contact.coordinates.lng}&z=14&output=embed`;

export const mapsDirectionsLink = `https://www.google.com/maps/dir/?api=1&destination=${siteConfig.contact.coordinates.lat},${siteConfig.contact.coordinates.lng}`;
