import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

const H1: React.FC<Props> = ({ children }) => {
  return (
    <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
      {children}
    </h1>
  );
};

const H2: React.FC<Props> = ({ children }) => {
  return (
    <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
};

const H3: React.FC<Props> = ({ children }) => {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
};

const H4: React.FC<Props> = ({ children }) => {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
};

const P: React.FC<Props> = ({ children }) => {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
};

const Blockquote: React.FC<Props> = ({ children }) => {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
};

const InlineCode: React.FC<Props> = ({ children }) => {
  return (
    <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  );
};

const Lead: React.FC<Props> = ({ children }) => {
  return <p className="text-muted-foreground text-xl">{children}</p>;
};

const Large: React.FC<Props> = ({ children }) => {
  return <p className="text-lg font-semibold">{children}</p>;
};

const Small: React.FC<Props> = ({ children }) => {
  return <small className="text-sm leading-none font-medium">{children}</small>;
};

const Muted: React.FC<Props> = ({ children }) => {
  return <p className="text-muted-foreground text-sm">{children}</p>;
};

export const Typography = {
  H1,
  H2,
  H3,
  H4,
  P,
  Blockquote,
  InlineCode,
  Lead,
  Large,
  Small,
  Muted,
};
