import { Avatar, AvatarFallback, AvatarImage } from "../shadcn/ui/avatar";
import { Typography } from "../atoms/typography";
import { Clickable } from "../atoms/clickable";

export const AppBar = () => {
  return (
    <header className="border-b px-4">
      <div className="flex-center-between h-[60px]">
        <Typography.H2>Aladdin</Typography.H2>
        <Clickable>
          <Avatar className="dim-32">
            <AvatarImage src="https://github.com/2gbeh.png" alt="" />
            <AvatarFallback>E</AvatarFallback>
          </Avatar>
        </Clickable>
      </div>
    </header>
  );
};
