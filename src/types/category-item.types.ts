export type SvgMetadata = {
  size?: number;
  width?: number;
  height?: number;
};

export type SvgImage = {
  alt?: string;
  original?: {
    metadata?: SvgMetadata;
    src?: string;
  };
};

export type AnimatedSvg = {
  desktop?: SvgImage;
  mobile?: SvgImage;
};

export type CategoryItem = {
  id?: string;
  name?: string;
  animatedSvg?: AnimatedSvg;
  path?: string;
  links?: {
    getPage: string;
  };
};
