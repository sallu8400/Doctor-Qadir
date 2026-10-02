// Poori website ki SEO details ek jagah - title, keywords, address sab yahin se change karo
// Naam / address / phone Google Business Profile se match karna zaroori hai (local SEO ke liye)

// Live domain ka URL - sitemap, canonical aur share preview isi se bante hain
// Naya domain lo toh yahan change kar dena (ya NEXT_PUBLIC_SITE_URL env variable set kar dena)
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.neulifehomeo.in").replace(/\/$/, "");

export const SITE_NAME = "Neulife Homoeopathy Clinic - Dr. A. Qadir Shaikh (M.D.)";

export const SITE_TITLE =
  "Best Homeopathy Doctor in Jogeshwari, Mumbai | Neulife Clinic";

export const SITE_DESCRIPTION =
  "Dr. A. Qadir Shaikh (M.D.) at Neulife Homoeopathy Clinic, Jogeshwari West, Mumbai. Rated 4.9★ on Google. Safe, natural homeopathy for skin, hair, allergy & chronic diseases.";

export const SITE_KEYWORDS = [
  "Neulife Homoeopathy Clinic",
  "Neulife homeopathy Jogeshwari",
  "Dr. A. Qadir Shaikh",
  "Dr Qadir Shaikh homeopathy",
  "homeopathy doctor in Jogeshwari",
  "homeopathy doctor in Jogeshwari West",
  "homeopath in Mumbai",
  "best homeopathic doctor in Mumbai",
  "homeopathic clinic in Mumbai",
  "homeopathy clinic near me",
  "homeopath near Kajupada",
  "homeopath near Behram Baug",
  "homeopathy doctor Andheri West",
  "M.D. homeopathy doctor Mumbai",
  "homeopathy treatment",
  "homeopathic medicine",
  "natural treatment without side effects",
  "root cause treatment",
  "homeopathy for skin problems",
  "homeopathy for eczema",
  "homeopathy for hair fall",
  "homeopathy for allergy",
  "homeopathy for migraine",
  "homeopathy for child immunity",
  "homeopathy for cold and cough",
  "homeopathy for joint pain",
  "homeopathy for chronic diseases",
  "online homeopathy consultation",
  "video consultation homeopathy doctor",
];

export const CLINIC = {
  name: "Neulife Homoeopathy Clinic",
  doctor: "Dr. A. Qadir Shaikh (M.D.)",
  phone: "+91-80824-08887",
  email: "qadir1197@gmail.com",
  streetAddress: "Range Height Tower, 102, New Link Rd, opp. Kajupada, Behram Baug",
  locality: "Jogeshwari West, Mumbai",
  region: "Maharashtra",
  postalCode: "400102",
  country: "IN",
  // Google listing ka naam + address - isse map par seedha clinic ka pin dikhega
  mapQuery:
    "Neulife homoeopathy clinic - Dr.A.Qadir shaikh(M.D), Range height tower, Kajupada, Jogeshwari West, Mumbai, Maharashtra 400102",
  openingHours: { days: "Mo-Sa", opens: "10:00", closes: "21:00" },
};
