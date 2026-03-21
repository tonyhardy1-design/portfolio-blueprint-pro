import firstLight  from "@/assets/daily/15-DSCF2527.jpg";
import still       from "@/assets/daily/DSC01286.JPG";
import afternoon   from "@/assets/daily/DSC02666.JPG";
import passage     from "@/assets/daily/DSC02764.JPG";
import sisters     from "@/assets/daily/Sisters.jpg";
import sunflowers  from "@/assets/daily/Sunflowers.jpg";

export const dailyImages = [
  { src: firstLight, alt: "Newborn baby sleeping with a small bow",   title: "Bow"         },
  { src: still,      alt: "A quiet moment from daily life",           title: "Hiding"      },
  { src: afternoon,  alt: "An afternoon observation",                 title: "Woodland"    },
  { src: passage,    alt: "A window onto ordinary life",              title: "Nature"      },
  { src: sisters,    alt: "Two sisters together",                     title: "Sisters"     },
  { src: sunflowers, alt: "Sunflowers in bloom",                      title: "Sunflowers"  },
];

// Used as the thumbnail on the Portfolio index page
export const dailyThumbnail = firstLight;
