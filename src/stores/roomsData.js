export default [
  {
    id: 1,
    slug: "palm-house",
    name: "Palm House",
    targetScale: {x: 4, y: 4.5, z: 10.5},
    targetPos: {x: 3.45, y: 0, z:0.2},
    description: "At 65 ft high and 90 ft wide, this is the largest room in the Conservatory. It is designed as an idealized tropical landscape, featuring more than 70 graceful palms, as well as other plants from warm habitats all around the world.",
    photo: "/images/palm-house-2.jpg",
    cameraShift: {x:11, y:20, z: 40},
    pano: "/images/panos/palm-house.jpg",
    stats: [
      {
        title: "Temp",
        stat: "80˚ F"
      },
      {
        title: "Humidity",
        stat: "90%"
      }
    ]

  },
  {
    id: 2,
    slug: "fern-room",
    name: "Fern Room",
    targetScale: {x: 5.5, y: 4.5, z: 5},
    targetPos: {x: -1.25, y: 0, z:0.2},
    description: "Jens Jensen, who designed the Conservatory in 1906, wanted to give visitors a glimpse of what Illinois might have looked like millions of years ago. Lush ferns, rocky outcroppings and an indoor lagoon evoke the swampy landscape of prehistoric Chicago.",
    photo: "/images/fern-room.jpg",
    cameraShift: {x:34, y:14, z: 12},
    pano: "/images/panos/fern-room.jpg",
    stats: [
      {
        title: "Temp",
        stat: "73˚ F"
      },
      {
        title: "Humidity",
        stat: "60%"
      }
    ]
  },
  {
    slug: "event-room",
    name: "Event Room",
    targetScale: {x: 5.5, y: 4.5, z: 2.6},
    targetPos: {x: -1, y: 0, z: -3.3},
    description: "Lorem Ipsum",
    photo: "",
    cameraShift: {x:34, y:14, z: 12}
  },
  {
    slug:"desert-room",
    name: "Desert Room",
    targetScale: {x: 5.5, y: 4.5, z: 2.6},
    targetPos: {x: -1, y: 0, z:3.45},
    description: "The Desert House holds one of the region’s most varied collections of cacti and succulents. These plants owe their popularity to their spectacular and unique forms, the promise of brilliant, short-lived flowers and their ability to withstand harsh, dry conditions. The size of the plants in this room varies from the tiny living stone plant to the large century plants.",
    photo: "",
    cameraShift: {x:34, y:14, z: 12}
  },
  {
    slug: "info",
    name: "Information",
    targetScale: {x: 2.5, y: 2.5, z: 7},
    targetPos: {x: 6.5, y: 0, z:0.2},
    description: `HOURS: <br><br>Wednesday 10am-8pm; <br>Thursday – Sunday 10am-5pm; <br>Closed Monday and Tuesday
    <br><br>ADMISSION: FREE (suggested donation)
    <br><br>LOCATION: 300 N. Central Park Ave, Chicago, IL 60624
    <br><br>PHONE: 773-638-1766`,
    photo: "",
    cameraShift: {x:34, y:14, z: 12}
  }
]