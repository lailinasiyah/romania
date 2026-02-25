const BASE = process.env.BASE_URL || '/';
export const IMAGES = {
  hero: `${BASE}/assets/bag.jpg`,
  bgMenu: `${BASE}/assets/bg.jpg`, 
  bgChef: `${BASE}/assets/chef.webp`,
  bgfnb : `${BASE}/assets/fnb.webp`,
  bgrestaurant : `${BASE}/assets/restaurant.webp`,
  bgbiaya : `${BASE}/assets/skemabiaya.webp`, 
  bgcontact : `${BASE}/assets/contact.webp`,
  iconcook : `${BASE}/assets/waiter.png`,
  iconwaiter : `${BASE}/assets/cooking.png`,
  iconteam: `${BASE}/assets/team-lead.png`,
  bgheadchef: `${BASE}/assets/headchef.webp`,
  bgservice: `${BASE}/assets/service.webp`,  
  bgmanajer: `${BASE}/assets/manajer.webp`,
  iconweb : `${BASE}/assets/favicon.png`,
  trust: "https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=800&auto=format&fit=crop",
  directorOffice: `${BASE}/assets/wesleyfix.jpeg`,
  viceDirector: `${BASE}/assets/victorfix.JPG`,
  fbService: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
  partners: [
    `${BASE}/assets/TCGI.webp`,
    `${BASE}/assets/Jeonji.webp`,
    `${BASE}/assets/kao.webp`
  ],
  avatars: [
    "https://i.pravatar.cc/150?u=a1",
    "https://i.pravatar.cc/150?u=a2",
    "https://i.pravatar.cc/150?u=a3",
    "https://i.pravatar.cc/150?u=a4"
  ]
};

export const CONTACT_INFO = {
  wa: "62811314300",
  rani: "+62 822 7167 4145",
  victor: "+62 822 3018 4888",
  email: "info@mitragroup.id",
  hq: "Jl. Mayjen Sungkono No.77, Malang",
  marketing: "Jl. Dukuh Kupang Barat I, Surabaya"
};

interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Fernando',
    role: 'Cook',
    quote: 'Bimbingan dokumen sangat rapi, mentornya suportif banget sampai aku dapat visa tepat waktu.',
    image: `${BASE}/assets/fernando-cook.jpg`
  },
  {
    id: '2',
    name: 'Yogi Indra',
    role: 'Waiter',
    quote: 'Prosesnya dibimbing dan diarahkan dan dibantu',
    image: `${BASE}/assets/yogi-waiter.jpg`
  },
  {
    id: '3',
    name: 'Michael',
    role: 'Waiter',
    quote: 'Terimakasih sudah membantu bekerja di Luar Negeri',
    image: `${BASE}/assets/michael-waitress.jpg`
  },
  {
    id: '4',
    name: 'Gregorius',
    role: 'Waiter',
    quote: 'Mimpi gak ada batasannya yang penting mulai dulu aja dari sekarang',
    image: `${BASE}/assets/gregorius-waitrer.jpg`
  },
  {
    id: '5',
    name: 'Faldo Hanockh',
    role: 'Waiter',
    quote: 'Terimakasih PT. MSS',
    image: `${BASE}/assets/faldo-waiter.jpg`
  }
];
