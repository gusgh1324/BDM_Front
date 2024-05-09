import React from "react";

interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

<<<<<<< HEAD
export const GoogleIcon = (props: IconProps) => {
=======
export const GoogleIcon: React.FC<IconProps> = (props) => {
>>>>>>> main
  return (
    <img
      {...props}
      src="https://www.svgrepo.com/show/355037/google.svg"
      alt="GoogleIcon"
    />
  );
};

<<<<<<< HEAD
export const FacebookIcon = (props: IconProps) => {
=======
export const FacebookIcon: React.FC<IconProps> = (props) => {
>>>>>>> main
  return (
    <img
      {...props}
      src="https://www.svgrepo.com/show/475647/facebook-color.svg"
      alt="FacebookIcon"
    />
  );
};

<<<<<<< HEAD
export const TwitterIcon = (props: IconProps) => {
=======
export const TwitterIcon: React.FC<IconProps> = (props) => {
>>>>>>> main
  return (
    <img
      {...props}
      src="https://www.svgrepo.com/show/475689/twitter-color.svg"
      alt="TwitterIcon"
    />
  );
};

<<<<<<< HEAD
export const KakaotalkIcon = (props: IconProps) => {
=======
export const KakaotalkIcon: React.FC<IconProps> = (props) => {
>>>>>>> main
  return (
    <img
      {...props}
      src="https://www.svgrepo.com/show/303176/kakaotalk-logo.svg"
      alt="KakaotalkIcon"
    />
  );
};

<<<<<<< HEAD
export const LinkShareIcon = (props: IconProps) => {
=======
export const LinkShareIcon: React.FC<IconProps> = (props) => {
>>>>>>> main
  return (
    <img
      {...props}
      src="https://www.svgrepo.com/show/528356/link.svg"
      alt="LinkShareIcon"
    />
  );
};
