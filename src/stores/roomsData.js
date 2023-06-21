export default [
  {
    slug: "palm-house",
    name: "Palm House",
    targetScale: {x: 4, y: 4.5, z: 10.5},
    targetPos: {x: 3.45, y: 0, z:0.2},
    description: "At 65 ft high and 90 ft wide, this is the largest room in the Conservatory. It is designed as an idealized tropical landscape, featuring more than 70 graceful palms, as well as other plants from warm habitats all around the world.",
    photo: "/images/palm-house.jpeg",
    cameraShift: {x:11, y:20, z: 40},
    pano: "/images/palm-room.jpg",
    stats: [
      {
        title: "Temp",
        stat: "73˚"
      },
      {
        title: "Humidity",
        stat: "60%"
      }
    ]

  },
  {
    slug: "fern-room",
    name: "Fern Room",
    targetScale: {x: 5.5, y: 4.5, z: 5},
    targetPos: {x: -1.25, y: 0, z:0.2},
    description: "Lorem Ipsum",
    photo: "/images/palm-house.jpeg",
    cameraShift: {x:34, y:14, z: 12},
    pano: "/images/fern-room.jpg",

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
    id:"desert-room",
    name: "Desert Room",
    targetScale: {x: 5.5, y: 4.5, z: 2.6},
    targetPos: {x: -1, y: 0, z:3.45},
    description: "Lorem Ipsum",
    photo: "",
    cameraShift: {x:34, y:14, z: 12}
  },
  {
    id: "info",
    name: "Information",
    targetScale: {x: 2.5, y: 2.5, z: 7},
    targetPos: {x: 6.5, y: 0, z:0.2},
    description: "Lorem Ipsum",
    photo: "",
    cameraShift: {x:34, y:14, z: 12}
  }
]