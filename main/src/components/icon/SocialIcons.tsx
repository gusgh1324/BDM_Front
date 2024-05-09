import React from "react";

interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export const GoogleIcon: React.FC<IconProps> = (props) => {
  return (
    <img
      {...props}
      src="https://www.svgrepo.com/show/355037/google.svg"
      alt="GoogleIcon"
    />
  );
};

export const FacebookIcon: React.FC<IconProps> = (props) => {
  return (
    <img
      {...props}
      src="https://www.svgrepo.com/show/475647/facebook-color.svg"
      alt="FacebookIcon"
    />
  );
};

export const TwitterIcon: React.FC<IconProps> = (props) => {
  return (
    <img
      {...props}
      src="https://www.svgrepo.com/show/475689/twitter-color.svg"
      alt="TwitterIcon"
    />
  );
};

export const KakaotalkIcon: React.FC<IconProps> = (props) => {
  return (
    <img
      {...props}
      src="https://www.svgrepo.com/show/303176/kakaotalk-logo.svg"
      alt="KakaotalkIcon"
    />
  );
};

export const LinkShareIcon: React.FC<IconProps> = (props) => {
  return (
    <img
      {...props}
      src="https://www.svgrepo.com/show/528356/link.svg"
      alt="LinkShareIcon"
    />
  );
};
