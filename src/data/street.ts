import southbank  from "@/assets/street/bw-portrait-1.jpg";
import piccadilly from "@/assets/street/bw-arch-1.jpg";
import transit    from "@/assets/street/3-DSC02082.jpg";
import lisbon     from "@/assets/street/4-DSC00283.jpg";
import frequency  from "@/assets/street/13-DSC02594.jpg";
import theCity    from "@/assets/street/14-DSC00891.jpg";

export const streetImages = [
  { src: southbank,  alt: "Skateboarder at the Southbank undercroft",                           title: "Southbank"  },
  { src: piccadilly, alt: "Crowd moving past red phone boxes, Piccadilly",                       title: "Piccadilly" },
  { src: transit,    alt: "Figures seen through a passing train window",                         title: "Transit"    },
  { src: lisbon,     alt: "Man in yellow jacket, building reflected in a van",                   title: "Reflection" },
  { src: frequency,  alt: "Woman with headphones facing a large billboard",                      title: "Frequency"  },
  { src: theCity,    alt: "Man walking through the City of London, reflected in glass panels",   title: "The City"   },
];

// Used as the thumbnail on the Portfolio index page
export const streetThumbnail = southbank;
