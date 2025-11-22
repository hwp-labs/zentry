"use client";

import { AppAvatar } from "@/components/atoms/app-avatar";

interface Props {
  avatarSrc?: string | null;
  avatarText?: string;
  text: string;
  rightText?: string;
  description: React.ReactNode;
  onClick?: VoidFunction;
}

export const ListItem: React.FC<Props> = ({
  avatarSrc,
  avatarText,
  text,
  description,
  rightText,
  onClick = () => undefined,
}) => {
  return (
    <div className="flex h-[72px] items-center gap-4" onClick={onClick}>
      <AppAvatar src={avatarSrc} text={avatarText} size={40} />
      <div className="flex-1">
        <div className="flex-center-between">
          <p className="text-body-lg">{text}</p>
          {rightText ? (
            <p className="text-label-sm text-muted-foreground">{rightText}</p>
          ) : null}
        </div>
        <p className="text-body-md text-muted-foreground flex items-center gap-2.5">
          {description}
        </p>
      </div>
    </div>
  );
};
