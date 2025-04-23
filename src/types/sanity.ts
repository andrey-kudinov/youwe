import type { TypedObject } from '@portabletext/types';

export interface ICase {
  slider: string;
  title: string;
  slug: {
    current: string;
  };
  tags: string[];
  text: TypedObject;
  client: {
    name: string;
    url: string;
  };
  sector: string[];
  scope: string[];
  logos: ILogo[];
  publishedAt: string;

  videoContent: IVideoContent;
  imageText: IImageText;
  textOnly: ITextOnly;
  imageOnly: IImageOnly;
  quote: IQuote;
  pageBuilder: SectionComponentProps[];
}

export type SectionComponentProps =
  | Partial<ISliderProps & IVideoContent & IImageText & ITextOnly & IImageOnly & IQuote> & {
      _type: SectionType;
    };

export interface ISliderProps {
  _type: SectionType;
  slider: ISlider[];
}

export type SectionType = 'slider' | 'videoWithText' | 'textOnly' | 'imageText' | 'imageOnly' | 'quote';

export interface ILogo {
  stackLogo: string;
  stackName: string;
}

export interface ISlider {
  image: string;
  name: string;
}

export interface IVideoContent {
  _type: SectionType;
  videoFile: string;
  videoUrl: string;
  videoText: string;
}

export interface IImageText {
  _type: SectionType;
  isImageOnRight: boolean;
  image: string;
  title: string;
  text: string;
}

export interface ITextOnly {
  _type: SectionType;
  title: string;
  text: string;
}

export interface IImageOnly {
  _type: SectionType;
  image: string;
  imageName: string;
}

export interface IQuote {
  authorName: string;
  _type: SectionType;
  text: string;
}

export default ICase;
