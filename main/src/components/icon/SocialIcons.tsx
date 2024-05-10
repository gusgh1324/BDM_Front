import React from "react";

interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

export const GoogleIcon = (props: IconProps) => {
  return (
    <img
      {...props}
      src="https://www.svgrepo.com/show/355037/google.svg"
      alt="GoogleIcon"
    />
  );
};

export const FacebookIcon = (props: IconProps) => {
  return (
    <img
      {...props}
      src="https://www.svgrepo.com/show/475647/facebook-color.svg"
      alt="FacebookIcon"
    />
  );
};

export const TwitterIcon = (props: IconProps) => {
  return (
    <img
      {...props}
      src="https://www.svgrepo.com/show/475689/twitter-color.svg"
      alt="TwitterIcon"
    />
  );
};

export const KakaotalkIcon = (props: IconProps) => {
  return (
    <img
      {...props}
      src="https://www.svgrepo.com/show/303176/kakaotalk-logo.svg"
      alt="KakaotalkIcon"
    />
  );
};

export const LinkShareIcon = (props: IconProps) => {
  return (
    <img
      {...props}
      src="https://www.svgrepo.com/show/528356/link.svg"
      alt="LinkShareIcon"
    />
  );
};
