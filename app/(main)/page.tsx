import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/ui/avatar";

export default function HomePage() {
  return (
    <div className="">
      <header className="border-b px-4">
        <div className="flex h-[60px] items-center justify-between">
          <h1 className="text-2xl font-medium">Aladdin</h1>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>ET</AvatarFallback>
          </Avatar>
          {/* <figure className="overflow-clip rounded-full border">
            <Image
              src="/images/my-avatar.png"
              width={48}
              height={48}
              alt="My Avatar"
              className="object-contain"
            />
          </figure> */}
        </div>
      </header>
    </div>
  );
}
