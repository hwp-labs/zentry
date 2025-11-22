"use client";

import { PropsWithChildren } from "react";
import { AppAvatar } from "@/components/atoms/app-avatar";

interface ContainerProps extends PropsWithChildren {
  onClick?: VoidFunction;
}

const Container: React.FC<ContainerProps> = ({ children, onClick }) => (
  <div className="flex h-[72px] items-center gap-4" onClick={onClick}>
    {children}
  </div>
);

const Content: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="flex-1">{children}</div>
);

interface AvatarProps {
  src?: string | null;
  alt?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt }) => (
  <AppAvatar src={src} alt={alt} size={40} />
);

interface HeadlineProps {
  text: string;
  subtext?: string;
}

const Headline: React.FC<HeadlineProps> = ({ text, subtext }) => (
  <div className="flex-center-between">
    <h4 className="text-body-lg">{text}</h4>
    {subtext ? (
      <p className="text-label-sm text-muted-foreground">{subtext}</p>
    ) : null}
  </div>
);

const Baseline: React.FC<PropsWithChildren> = ({ children }) => (
  <p className="text-body-md text-muted-foreground flex items-center gap-2.5">
    {children}
  </p>
);


export const ListBuilder = {
  Container,
  Content,
  Avatar,
  Headline,
  Baseline,
};
