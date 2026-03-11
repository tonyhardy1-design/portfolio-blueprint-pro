import eye      from "@/assets/architecture/2-DSC02159.jpg";
import passage  from "@/assets/architecture/9-DSCF7477.jpg";
import barbican from "@/assets/architecture/10-DSC06528.jpg";
import cathedral from "@/assets/architecture/11-DSC06524.jpg";
import fortress  from "@/assets/architecture/12-DSCF5230.jpg";

export const architectureImages = [
  { src: eye,      alt: "Top of the London Eye rising into a clear sky",         title: "Eye"      },
  { src: passage,  alt: "Dock cranes silhouetted with a plane overhead",         title: "Passage"  },
  { src: barbican, alt: "Barbican tower at dusk framed by trees",                title: "Barbican" },
  { src: cathedral, alt: "St Paul's Cathedral dome at golden hour",              title: "Cathedral" },
  { src: fortress,  alt: "Stone fortress on a cliff seen through a window frame", title: "Fortress" },
];

// Used as the thumbnail on the Portfolio index page
export const architectureThumbnail = eye;
