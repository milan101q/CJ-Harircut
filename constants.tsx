
import { Service } from './types';

export const BUSINESS_INFO = {
  name: "CJ Hair Cuts",
  branch: "Aldie",
  address: "24820 Community Corner Plz #125, Chantilly, VA 20152",
  location: "Community Corner Plz",
  phone: "(703) 857-0678",
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=24820+Community+Corner+Plz+125+Chantilly+VA+20152",
  reviewUrl: "https://www.google.com/maps/place/CJ+Hair+Cuts+-+Aldie/@38.9308213,-77.5394047,18z/data=!4m8!3m7!1s0x89b641753ed7cc1b:0xa66829cd689c286b!8m2!3d38.9308213!4d-77.5394047!9m1!1b1!16s%2Fg%2F11j6s7m63d",
  hours: {
    monFri: "09:00 — 19:00",
    satSun: "09:00 — 18:00"
  },
  facilities: [
    { label: "Community Corner location", icon: "📍" },
    { label: "Ample Parking", icon: "🚗" },
    { label: "Open 7 Days", icon: "🗓️" },
    { label: "Walk-ins & Appointments", icon: "🚶" },
    { label: "Professional Styling", icon: "✂️" }
  ]
};

export const SERVICES: Service[] = [
  {
    id: 'cj1',
    name: "Master Craft Cut",
    description: "Expertly styled precision cut including cleanup and styling.",
    duration: "30 min",
    category: 'Barber'
  },
  {
    id: 'cj2',
    name: "Urban Fade",
    description: "High-definition skin fade or taper with razor finish.",
    duration: "45 min",
    category: 'Barber'
  },
  {
    id: 'cj3',
    name: "Beard Sculpture",
    description: "Shaping and trimming for the modern beard with oil treatment.",
    duration: "20 min",
    category: 'Barber'
  },
  {
    id: 'cj4',
    name: "Aldie Junior Cut",
    description: "Professional cuts for children under 12.",
    duration: "30 min",
    category: 'Barber'
  },
  {
    id: 'cj5',
    name: "Refresh Package",
    description: "The works: Haircut, Wash, Scalp massage, and finish.",
    duration: "50 min",
    category: 'Treatment'
  }
];
