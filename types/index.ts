import { ComponentPropsWithoutRef } from 'react';
import { DayPicker } from 'react-day-picker';

// types/global.d.ts or a similar global declarations file
export interface Window {
    fbq: (...args: any[]) => void;
  }


export type Lift = {
    name: string;
    image: string;
    description: string;
    features: string[];
    type: string;
    moreInfo: string
  };

  export interface TemplateProps {
    children: React.ReactNode;
  }

  export interface ButtonProps {
  id?: string;
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClass?: string;
  onClick?: () => void;
}

export interface AnimatedTextProps {
  phrase: string;
  className?: string;
}

export interface BentoTiltProps {
  children: React.ReactNode;
  className?: string;
}

export interface BentoCardProps {
    src: string;
    title: React.ReactNode; // Accept React elements or strings for the title
    description?: string;
  }

  export interface CardProps {
  i: number;
  title: string;
  description: string;
  keyUsp: string[];
  src: string;
  url: string;
  color: string;
  progress: any; // Adjust type as needed if the `progress` object has a specific type
  range: [number, number];
  targetScale: number;
  textColor: string;
}

export interface MagneticWrapperProps {
  children: React.ReactElement;
}

export interface AnimatedButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  backgroundColor?: string;
}

export interface MouseEvent {
    movementY: number;
    clientX: number;
  }

 export type lineProps = {
      gap?: string
  }

  export interface ProductDetailsProps {
    heroHeading: string,
    heroImage: string,
    productTitle: string;
    productSubHeading: string,
    productMiniHeading: string
    productDescription: string;
    carouselImages: string[];
    productFeatures: string[];
    productSpecialFeature: string;
    sections: {image: string, subHeading: string, description: string}[],
    ogImage: string,
    ogImageAltText?: string
    type?: string
}

export interface usp {
    link: string;
    title: string;
    description: string;
    src: string;
    color: string;
    text: string;
    keyUSPs: string[]
  }



          export type ScrollBasedMarqueeProps = {
            logos?: string[];
            text?: string | string[];
            gap?: number; // Gap between elements
            direction?: "left" | "right"; // New parameter for scroll direction
            componentClass: string;
          };

          export type Dimension = {
            width: number;
            height: number;
          };

          export type ColumnProps = {
            images: string[];
            y: any; // The `useTransform` return type is `MotionValue<any>`
          };

          export type CalendarProps = React.ComponentProps<typeof DayPicker>

          export interface BoundedProps extends ComponentPropsWithoutRef<"section"> {
            as?: React.ElementType  ,
        }
