import { Clickable } from "@/components/atoms/clickable";
import { Typography } from "@/components/atoms/typography";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/ui/avatar";

export default function HomePage() {
  return (
    <div className="">
      <header className="border-b px-4">
        <div className="h-[60px] flex-center-between">
          <Typography.H2>Aladdin</Typography.H2>
          <Clickable debug>
            <Avatar className="dim-32">
              <AvatarImage src="https://github.com/2gbeh.png" alt="" />
              <AvatarFallback>E</AvatarFallback>
            </Avatar>
          </Clickable>
        </div>
      </header>
    </div>
  );
}
