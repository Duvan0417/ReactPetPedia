export const vetClinics = [
  {
    name: 'PetCare Centro Veterinario',
    image: 'https://tse1.mm.bing.net/th/id/OIP.CjJXuzT1vxUJmPnFXL654gHaGD?rs=1&pid=ImgDetMain',
    location: 'Centro, 1.2 km',
    badges: [
      { type: 'urgent', text: 'Urgencias 24h' },
      { type: 'top', text: 'Top rated' },
    ],
    rating: 4.5,
    services: [
      { icon: 'fas fa-syringe', name: 'Vacunación' },
      { icon: 'fas fa-heartbeat', name: 'Cardiología' },
      { icon: 'fas fa-cut', name: 'Peluquería' },
      { icon: 'fas fa-pills', name: 'Farmacia' },
    ],
    description:
      'Centro veterinario de última generación con especialistas en medicina preventiva, diagnóstico avanzado y cuidados intensivos para todas las especies.',
    openNow: true,
    schedule: 'Lunes a Viernes: 8:00 - 20:00\nSábados: 9:00 - 14:00',
  },
  {
    name: 'VetLife Clínica Veterinaria',
    image: 'https://img.freepik.com/vector-gratis/veterinaria-perro_1196-293.jpg?w=360',
    location: 'Norte, 2.5 km',
    badges: [
      { type: 'eco', text: 'Eco-friendly' },
    ],
    rating: 4.8,
    services: [
      { icon: 'fas fa-stethoscope', name: 'Consulta general' },
      { icon: 'fas fa-dog', name: 'Exóticos' },
      { icon: 'fas fa-allergies', name: 'Dermatología' },
    ],
    description:
      'Clínica especializada en el cuidado de mascotas exóticas y dermatología avanzada.',
    openNow: false,
    schedule: 'Lunes a Viernes: 9:00 - 18:00\nSábados: 10:00 - 14:00',
  },
  {
    name: 'AnimalCare Veterinaria',
    image: 'https://media.istockphoto.com/id/1423830925/es/foto/joven-veterinaria-usando-tablet-pc-en-su-trabajo.jpg?s=612x612&w=0&k=20&c=Yv6Cq7kXXhGOsSOlTqYxyHl0DtceaQkhw8QHvQ0n4CA=',
    location: 'Sur, 3.0 km',
    badges: [
      { type: 'urgent', text: 'Urgencias 24h' },
    ],
    rating: 4.2,
    services: [
      { icon: 'fas fa-syringe', name: 'Vacunación' },
      { icon: 'fas fa-heartbeat', name: 'Cardiología' },
      { icon: 'fas fa-user-md', name: 'Cirugía' },
    ],
    description:
      'Veterinaria con atención 24 horas y especialistas en cirugía avanzada.',
    openNow: true,
    schedule: 'Lunes a Domingo: 24 horas',
  },
  {
    name: 'HealthyPets Clínica Veterinaria',
    image: 'https://mundovets.com/wp-content/uploads/2024/02/eficiencia-eficacia-veterinaria.jpg',
    location: 'Este, 1.8 km',
    badges: [
      { type: 'top', text: 'Top rated' },
    ],
    rating: 4.9,
    services: [
      { icon: 'fas fa-pills', name: 'Farmacia' },
      { icon: 'fas fa-cut', name: 'Peluquería' },
      { icon: 'fas fa-stethoscope', name: 'Consulta general' },
    ],
    description:
      'Clínica con servicios integrales para el cuidado de tu mascota, desde peluquería hasta farmacia.',
    openNow: true,
    schedule: 'Lunes a Viernes: 8:00 - 20:00\nSábados: 9:00 - 14:00',
  },
  {
    name: 'VetPlus Centro Veterinario',
    image: 'https://facultades.unab.cl/cienciasdelavida/wp-content/uploads/2022/02/Medicina-Veterinaria.webp',
    location: 'Oeste, 2.0 km',
    badges: [
      { type: 'eco', text: 'Eco-friendly' },
      { type: 'urgent', text: 'Urgencias 24h' },
    ],
    rating: 4.7,
    services: [
      { icon: 'fas fa-syringe', name: 'Vacunación' },
      { icon: 'fas fa-heartbeat', name: 'Cardiología' },
      { icon: 'fas fa-user-md', name: 'Cirugía' },
      { icon: 'fas fa-dog', name: 'Exóticos' },
    ],
    description:
      'Centro veterinario con enfoque ecológico y atención especializada en mascotas exóticas.',
    openNow: false,
    schedule: 'Lunes a Viernes: 9:00 - 18:00\nSábados: 10:00 - 14:00',
  },
  {
    name: 'CareVet Clínica Integral',
    image: 'data:image/jpeg;base64,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',
    location: 'Centro, 1.5 km',
    badges: [
      { type: 'urgent', text: 'Urgencias 24h' },
      { type: 'top', text: 'Top rated' },
    ],
    rating: 4.6,
    services: [
      { icon: 'fas fa-syringe', name: 'Vacunación' },
      { icon: 'fas fa-heartbeat', name: 'Cardiología' },
      { icon: 'fas fa-user-md', name: 'Cirugía' },
      { icon: 'fas fa-pills', name: 'Farmacia' },
    ],
    description:
      'Clínica integral con servicios de urgencias, cirugía avanzada y atención personalizada para todas las mascotas.',
    openNow: true,
    schedule: 'Lunes a Viernes: 8:00 - 20:00\nSábados: 9:00 - 14:00',
  },
];