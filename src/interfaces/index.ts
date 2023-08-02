export interface PortafolioImage {
    desktop: string;
    mobile: string;
    tablet: string;
  }
  
  export interface DetailsImages {
    hero: string[];
    preview: string[];
    previewTwo: string[];
  }
  
  export interface PortafolioItem {
    id: string;
    title: string;
    desc: string;
    portafolioImages: PortafolioImage;
    habilities: string;
    languages: string[];
    background: string;
    detailsImages: DetailsImages;
  }
  