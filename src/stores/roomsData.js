export default [
  {
    slug: "palm-house",
    name: "Palm House",
    targetScale: {x: 4, y: 4.5, z: 10.5},
    targetPos: {x: 3.45, y: 0, z:0.2},
    description: "At 65 ft high and 90 ft wide, this is the largest room in the Conservatory. It is designed as an idealized tropical landscape, featuring more than 70 graceful palms, as well as other plants from warm habitats all around the world.",
    photo: "/images/palm-house-2.jpg",
    cameraShift: {x:20, y:20, z: 20},
    focusRotation: {x:0, y: -Math.PI / 1.5, z: 0},
    focusPosition: {x:0, y: 22, z: 45},
    pano: "/images/panos/palm-house.jpg",
    stats: [
      {
        title: "Temp",
        stat: "80˚ F"
      },
      {
        title: "Humidity",
        stat: "90%"
      },
      {
        title: "Square Feet",
        stat: "5K+"
      },
      {
        title: "Palm Species",
        stat: "70+"
      }
    ]

  },
  {
    slug: "fern-room",
    name: "Fern Room",
    targetScale: {x: 5.5, y: 4.5, z: 5},
    targetPos: {x: -1.25, y: 0, z:0.2},
    description: "Jens Jensen, who designed the Conservatory in 1906, wanted to give visitors a glimpse of what Illinois might have looked like millions of years ago. Lush ferns, rocky outcroppings and an indoor lagoon evoke the swampy landscape of prehistoric Chicago.",
    photo: "/images/fern-room.jpg",
    cameraShift: {x:34, y:14, z: 12},
    focusRotation: {x:0.8, y: -1, z: 0},
    focusPosition: {x:0, y: 20, z: 40},
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
    slug: "show-house",
    name: "Show House",
    targetScale: {x: 5.5, y: 4.5, z: 2.6},
    targetPos: {x: -1, y: 0, z: -3.3},
    description: "This room is the site of spectacular flower shows each year. Much of the plant material displayed in the shows is grown at the Conservatory. The original 1908 layout of the room was restored following the 2011 hailstorm, and includes the large central ellipse that was designed as the feature display for flower shows.",
    photo: "/images/showroom.png",
    pano: "/images/panos/show-room.jpg",
    cameraShift: {x:34, y:14, z: 12},
    focusRotation: {x:0, y: -2.75, z: 0},
    focusPosition: {x:0, y: 22, z: 45},
    stats: [
      {
        title: "Seasonal Shows",
        stat: "5/yr"
      },
      {
        title: "Square Feet",
        stat: "5K+"
      }
    ]
  },
  {
    slug:"sugar-from-the-sun",
    name: "Sugar from the Sun",
    targetScale: {x: 5.5, y: 4.5, z: 2.6},
    targetPos: {x: -1, y: 0, z:3.45},
    description: "Four themed botanical environments – water, air, sunlight, and sugar – help visitors discover how right now, inside every leaf, plants are capturing sunlight and using it to change small parts of air and water into sugar – the energy that sustains life on Earth.",
    photo: "/images/sugar-from-the-sun.png",
    pano: "/images/panos/sugar-from-the-sun.jpg",
    cameraShift: {x:-30, y:25, z: -10},
    focusRotation: {x:0, y: 0.6, z: 0},
    focusPosition: {x:0, y: 22, z: 45},
    stats: [
      {
        title: "Distinct Biomes",
        stat: "4"
      },
      {
        title: "Species",
        stat: "200+"
      }
    ]
  },
  {
    slug:"desert-house",
    name: "Desert House",
    targetScale: {x: 2.5, y: 4.5, z: 5},
    targetPos: {x: -5.5, y: 0, z:0},
    description: "The Desert House holds one of the region’s most varied collections of cacti and succulents. These plants owe their popularity to their spectacular and unique forms, the promise of brilliant, short-lived flowers and their ability to withstand harsh, dry conditions. The size of the plants in this room varies from the tiny living stone plant to the large century plants.",
    photo: "/images/desert-room.png",
    pano: "/images/panos/desert-room.jpg",
    cameraShift: {x:0, y:25, z: -40},
    focusRotation: {x:0, y: Math.PI / 1.5, z: 0},
    focusPosition: {x:0, y: 22, z: 45},
    stats: [
      {
        title: "Temp",
        stat: "68˚ F"
      },
      {
        title: "Humidity",
        stat: "10%"
      }
    ]
  },
  {
    slug: "info",
    name: "Information",
    targetScale: {x: 2.5, y: 2.5, z: 7},
    targetPos: {x: 6.5, y: 0, z:0.2},
    description: `
    <span class="font-bold">HOURS:</span>
    <hr />
    <br>
    Wednesday 10am-8pm; 
    <br>Thursday – Sunday 10am-5pm; 
    <br>Closed Monday and Tuesday
    <br><br>
    <span class="font-bold">ADMISSION:</span>
    <hr /> 
    <br>FREE (suggested donation)
    <br><br>
    <span class="font-bold">LOCATION: </span>
    <hr />
    <br>300 N. Central Park Ave, Chicago, IL 60624
    <br><br>
    <span class="font-bold">PHONE: </span>
    <hr />
    <br>773-638-1766
    `,
    photo: false,
    focusRotation: {x: 0, y: -Math.PI / 2, z: 0},
    focusPosition: {x:0, y: 22, z: 42},
  }
]