import heroDrilling from "@/assets/hero-drilling.jpg";
import waterSurvey from "@/assets/water-survey.jpg";
import pumpInstallation from "@/assets/pump-installation.jpg";
import casingInstallation from "@/assets/casing-installation.jpg";
import irrigationFarm from "@/assets/irrigation-farm.jpg";
import crewFieldwork from "@/assets/crew-fieldwork.jpg";

export type ServiceCategory = "Drilling & Investigation" | "Water Systems" | "Maintenance & Upgrades";

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategory;
  icon:
    | "drill"
    | "waves"
    | "radar"
    | "gauge"
    | "layers"
    | "wrench"
    | "arrowDown"
    | "cylinder"
    | "sprout";
  short: string;
  /** Replaceable image. Swap the import above for a real Achievers photo. */
  image: string;
  imageAlt: string;
  intro: string[];
  who: string[];
  process: { title: string; detail: string }[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "borehole-drilling",
    name: "Borehole Drilling",
    category: "Drilling & Investigation",
    icon: "drill",
    short:
      "Complete borehole construction from site assessment and drilling through to a tested, developed well.",
    image: heroDrilling,
    imageAlt: "Borehole drilling rig at work on a site in Abeokuta",
    intro: [
      "Achievers Geotechnical Services Ltd drills boreholes for homes, estates, schools, farms, businesses, industries and development projects across Abeokuta and Ogun State.",
      "Every borehole starts with an assessment of the site and the groundwater conditions beneath it. Drilling depth, casing and screening are then selected to suit what the formation actually presents, rather than a fixed template.",
      "The result is a borehole built to deliver water dependably over the long term, with the well properly developed and flushed before handover.",
    ],
    who: [
      "Homeowners who need a dependable private water supply",
      "Estate developers serving multiple units from one source",
      "Schools, churches and institutions with high daily demand",
      "Farms, factories and block-making industries",
    ],
    process: [
      { title: "Site assessment", detail: "We inspect the site, discuss demand and identify access for the rig." },
      { title: "Survey", detail: "Geological and geophysical survey work guides the drilling point and expected depth." },
      { title: "Drilling", detail: "Rotary or Odex drilling is selected to suit the formation encountered." },
      { title: "Casing and screening", detail: "PVC or steel casing is installed with screens set against the water-bearing zone." },
      { title: "Development and testing", detail: "The borehole is flushed, developed and tested for yield before handover." },
    ],
    faqs: [
      {
        question: "How long does it take to drill a borehole?",
        answer:
          "Most domestic boreholes are drilled within a few days once the survey is complete, though hard rock formations and deeper wells take longer. We confirm a realistic timeline after the site assessment.",
      },
      {
        question: "Do you handle the survey as well?",
        answer:
          "Yes. Geological and geophysical survey work is part of our service and we strongly recommend it before any drilling begins.",
      },
    ],
  },
  {
    slug: "water-survey-soil-testing",
    name: "Water Survey & Soil Testing",
    category: "Drilling & Investigation",
    icon: "radar",
    short:
      "Geological and geophysical survey work that identifies where water is, how deep it sits and whether the site can support a productive well.",
    image: waterSurvey,
    imageAlt: "Technician taking geophysical resistivity readings on a survey site",
    intro: [
      "A survey is the single most valuable step before drilling. It reduces the risk of a dry or low-yielding borehole and informs how deep the well needs to go.",
      "Our survey work examines the subsurface conditions of the site and identifies the most promising drilling point, along with the likely depth of the water-bearing formation.",
      "Survey findings are explained in plain terms so you can make an informed decision before committing to a drilling programme.",
    ],
    who: [
      "Anyone planning a borehole on a new or difficult site",
      "Developers assessing land before purchase or layout design",
      "Clients who have previously experienced a failed borehole",
      "Farms and industries planning high-volume abstraction",
    ],
    process: [
      { title: "Site walkover", detail: "We review the terrain, existing structures and nearby boreholes." },
      { title: "Geophysical measurement", detail: "Readings are taken across the site to profile the subsurface." },
      { title: "Interpretation", detail: "Data is interpreted to locate the most promising drilling point." },
      { title: "Recommendation", detail: "You receive a recommended point, expected depth range and drilling approach." },
    ],
    faqs: [
      {
        question: "Can you guarantee water at a surveyed point?",
        answer:
          "No survey can guarantee groundwater, but a properly conducted survey substantially improves the chance of a productive borehole and guides the drilling depth.",
      },
    ],
  },
  {
    slug: "odex-rotary-drilling",
    name: "Odex & Rotary Drilling",
    category: "Drilling & Investigation",
    icon: "layers",
    short:
      "Drilling methods matched to the ground: rotary for softer formations, Odex where collapsing overburden must be cased as you drill.",
    image: crewFieldwork,
    imageAlt: "Drilling crew handling drill rods beside a truck-mounted rig",
    intro: [
      "Not every site can be drilled the same way. Loose overburden, collapsing sands and hard rock each call for a different method.",
      "We use rotary drilling where the formation is stable and Odex drilling where casing has to advance with the drill bit to hold the hole open.",
      "Selecting the right method protects the hole, avoids wasted work and results in a borehole that stands up over time.",
    ],
    who: [
      "Sites with collapsing sand or deep loose overburden",
      "Hard rock locations and hillside sites",
      "Projects where a previous borehole collapsed",
      "Industrial and high-yield installations",
    ],
    process: [
      { title: "Formation review", detail: "Survey data and local experience indicate what the ground will present." },
      { title: "Method selection", detail: "Rotary or Odex drilling is chosen for the conditions expected." },
      { title: "Drilling", detail: "The hole is advanced with casing support where the formation requires it." },
      { title: "Completion", detail: "The borehole is cased, screened, developed and tested." },
    ],
    faqs: [
      {
        question: "What is Odex drilling?",
        answer:
          "Odex drilling advances a casing at the same time as the drill bit, which keeps unstable ground from collapsing into the hole. It is particularly useful in loose overburden.",
      },
    ],
  },
  {
    slug: "pump-installation",
    name: "Pump Installation & Recovery",
    category: "Water Systems",
    icon: "gauge",
    short:
      "Pump sizing, installation and pipework, plus recovery of pumps that have dropped into the borehole.",
    image: pumpInstallation,
    imageAlt: "Completed borehole wellhead with pump pipework delivering clear water",
    intro: [
      "A borehole only performs as well as the pump inside it. We size and install submersible pumps to match the yield of the well and the demand of the property.",
      "Installation covers the riser pipework, cabling, control and the wellhead so the system is safe and serviceable.",
      "Where a pump has dropped into a borehole, we carry out recovery work to retrieve it and restore the well to service.",
    ],
    who: [
      "New boreholes awaiting a pump",
      "Properties with an underperforming or failed pump",
      "Boreholes where a pump or pipe has fallen into the hole",
      "Estates and institutions upgrading capacity",
    ],
    process: [
      { title: "Yield and demand review", detail: "We match pump capacity to the borehole's tested yield." },
      { title: "Pump selection", detail: "Head, flow and power requirements are specified for the site." },
      { title: "Installation", detail: "Pump, riser, cabling and controls are installed and commissioned." },
      { title: "Testing", detail: "The system is run and checked for pressure, delivery and safe operation." },
    ],
    faqs: [
      {
        question: "Can you recover a pump that fell into my borehole?",
        answer:
          "In most cases, yes. Recovery depends on the depth, the borehole condition and how the pump is lodged. We assess the well before quoting recovery work.",
      },
    ],
  },
  {
    slug: "casing-installation",
    name: "PVC & Steel Casing Installation",
    category: "Water Systems",
    icon: "cylinder",
    short:
      "Casing and screening that keeps the borehole open, protects water quality and supports long-term yield.",
    image: casingInstallation,
    imageAlt: "PVC and steel borehole casing pipes at a drilling site",
    intro: [
      "Casing is what holds a borehole together. It keeps the hole from collapsing, seals off unwanted layers and positions screens against the water-bearing formation.",
      "We install PVC and steel casing, selecting material and wall thickness to suit depth, formation and expected pumping duty.",
      "Poorly specified casing is a common reason boreholes fail early, so this stage is treated as structural work rather than a fitting.",
    ],
    who: [
      "New boreholes at the completion stage",
      "Boreholes suffering sand intrusion or collapse",
      "Deep or high-duty industrial wells",
      "Rehabilitation of older boreholes",
    ],
    process: [
      { title: "Specification", detail: "Casing material and diameter are matched to depth and formation." },
      { title: "Screen setting", detail: "Screens are positioned against the water-bearing zone." },
      { title: "Installation", detail: "Casing is run into the hole and sealed where required." },
      { title: "Gravel pack and development", detail: "The annulus is packed and the well developed to run clear." },
    ],
    faqs: [
      {
        question: "Is PVC or steel casing better?",
        answer:
          "Both are appropriate in the right situation. PVC resists corrosion and suits many domestic boreholes, while steel is used where greater strength is required. The choice follows the depth and formation.",
      },
    ],
  },
  {
    slug: "borehole-maintenance",
    name: "Borehole Maintenance",
    category: "Maintenance & Upgrades",
    icon: "wrench",
    short:
      "Diagnosis and servicing for boreholes producing less water, running dirty or failing intermittently.",
    image: crewFieldwork,
    imageAlt: "Crew servicing borehole equipment on site",
    intro: [
      "A borehole that has stopped performing is not always a lost borehole. Declining yield, sand in the water or intermittent supply often have a specific, fixable cause.",
      "We inspect the well, the pump and the installation to identify what has changed, then carry out cleaning, flushing, repairs or component replacement as required.",
      "Where a borehole is beyond economic repair we say so plainly rather than continuing with work that will not hold.",
    ],
    who: [
      "Properties with falling water pressure or yield",
      "Boreholes producing sandy or cloudy water",
      "Estates and institutions with ageing installations",
      "Anyone who has inherited a borehole of unknown condition",
    ],
    process: [
      { title: "Inspection", detail: "The wellhead, pump and delivery system are checked for faults." },
      { title: "Diagnosis", detail: "We establish whether the issue is the pump, the casing or the aquifer." },
      { title: "Servicing", detail: "Cleaning, flushing, repair or replacement is carried out as needed." },
      { title: "Re-testing", detail: "Performance is re-checked before the borehole returns to service." },
    ],
    faqs: [
      {
        question: "Why do boreholes fail?",
        answer:
          "Common causes include inadequate survey work before drilling, poor casing and screening, incorrect pump sizing, silting and a lack of routine servicing. Most are avoidable with sound construction and periodic maintenance.",
      },
    ],
  },
  {
    slug: "borehole-extension",
    name: "Borehole Extension",
    category: "Maintenance & Upgrades",
    icon: "arrowDown",
    short:
      "Deepening an existing borehole to reach a stronger water-bearing zone and restore reliable supply.",
    image: heroDrilling,
    imageAlt: "Drilling rig extending an existing borehole",
    intro: [
      "Where a borehole was drilled too shallow, or the water level has dropped, extending the existing hole can be more practical than starting again.",
      "We assess whether the current borehole is structurally sound enough to deepen, then extend it to reach a more productive zone.",
      "Extension is followed by re-casing where required, development and testing so the well returns to dependable service.",
    ],
    who: [
      "Boreholes that run dry during the dry season",
      "Shallow wells with insufficient yield for current demand",
      "Properties that have increased water demand since drilling",
      "Farms and industries needing higher abstraction",
    ],
    process: [
      { title: "Condition assessment", detail: "We confirm the existing hole can be safely deepened." },
      { title: "Extension drilling", detail: "The borehole is advanced towards a stronger zone." },
      { title: "Casing adjustment", detail: "Additional casing and screening are set as required." },
      { title: "Development and testing", detail: "The well is flushed, developed and tested for improved yield." },
    ],
    faqs: [
      {
        question: "Can every borehole be extended?",
        answer:
          "Not always. If the existing hole has collapsed or was poorly cased, a new borehole may be the sounder option. We assess the well first and advise accordingly.",
      },
    ],
  },
  {
    slug: "tank-installation",
    name: "Tank Installation",
    category: "Water Systems",
    icon: "waves",
    short:
      "Storage tanks, stands and connecting pipework sized to keep water available between pumping cycles.",
    image: irrigationFarm,
    imageAlt: "Overhead water storage tanks on a steel stand beside a borehole",
    intro: [
      "Storage turns a working borehole into a reliable daily supply. We install overhead and ground tanks with the stands, fittings and pipework to match.",
      "Tank capacity is planned around household or site demand so water remains available when the pump is off or power is out.",
      "Installations are set out for safe access and straightforward cleaning and servicing later on.",
    ],
    who: [
      "Homes and estates needing buffered storage",
      "Schools, churches and institutions with peak-time demand",
      "Businesses that cannot tolerate supply interruptions",
      "Farms and industrial sites",
    ],
    process: [
      { title: "Demand sizing", detail: "Daily usage determines the storage capacity required." },
      { title: "Stand and base", detail: "A suitable stand or base is prepared for the tank load." },
      { title: "Installation", detail: "Tanks, fittings and pipework are installed and connected." },
      { title: "Commissioning", detail: "The system is filled, checked for leaks and handed over." },
    ],
    faqs: [
      {
        question: "What tank size do I need?",
        answer:
          "It depends on how much water the property uses each day and how long you need to run without pumping. We size storage after discussing your usage pattern.",
      },
    ],
  },
  {
    slug: "irrigation-systems",
    name: "Irrigation System Design & Installation",
    category: "Water Systems",
    icon: "sprout",
    short:
      "Irrigation layouts fed from your borehole, designed around crop, plot size and available pressure.",
    image: irrigationFarm,
    imageAlt: "Drip irrigation lines running across a farm plot fed by a borehole",
    intro: [
      "Groundwater is only useful to a farm when it reaches the crop efficiently. We design and install irrigation systems supplied directly from the borehole.",
      "Layouts are planned around plot size, crop requirement, terrain and the pressure the pump can deliver, so water is distributed evenly without waste.",
      "Installations cover mainlines, laterals, emitters, filtration and control, with storage added where pumping and irrigation schedules differ.",
    ],
    who: [
      "Commercial and smallholder farms",
      "Greenhouses and nurseries",
      "Estates and institutions with landscaped grounds",
      "Agricultural development projects",
    ],
    process: [
      { title: "Site and crop review", detail: "Plot layout, crop type and water requirement are established." },
      { title: "System design", detail: "Drip or sprinkler layout is designed for even, efficient coverage." },
      { title: "Installation", detail: "Mainlines, laterals, filtration and controls are installed." },
      { title: "Commissioning", detail: "The system is pressure-tested and the schedule set with you." },
    ],
    faqs: [
      {
        question: "Can my existing borehole feed an irrigation system?",
        answer:
          "Often yes, provided the yield and pump capacity are adequate. We check the borehole's output before designing the system so the layout matches what the well can sustain.",
      },
    ],
  },
];

export const serviceCategories: ServiceCategory[] = [
  "Drilling & Investigation",
  "Water Systems",
  "Maintenance & Upgrades",
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);

/** Options used by the quote form. */
export const quoteServiceOptions = [
  "Borehole Drilling",
  "Water Survey",
  "Odex & Rotary Drilling",
  "Pump Installation",
  "Pump Recovery",
  "Casing Installation",
  "Borehole Maintenance",
  "Borehole Extension",
  "Tank Installation",
  "Irrigation System",
  "Other",
];

export const propertyTypeOptions = [
  "Residential",
  "Estate",
  "Farm",
  "School/Institution",
  "Business",
  "Industrial",
  "Government",
  "Other",
];
