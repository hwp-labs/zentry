"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { startCase } from "lodash";
import clsx from "clsx";
//
import { Button } from "../shadcn/ui/button";
import { getStatusText } from "@/constants/HTTP_STATUS_CODE";

interface Props {
  message?: string | object;
  statusCode?: number;
  onReload?: VoidFunction;
}

export const AppError: React.FC<Props> = ({
  message,
  statusCode = 404,
  onReload,
}) => {
  const messageIsObject = message && typeof message !== "string";
  const statusText = getStatusText(statusCode);
  //
  const router = useRouter();
  const pathname = usePathname();
  const handleReload = () => onReload ? onReload() : router.refresh();
  const handleBack = () => router.back();
  //
  return (
    <div className="container-fluid">
      <figure
        className={clsx(
          "px-6",
          messageIsObject ? "mt-10 mb-5" : "mt-[100px] mb-[50px]",
        )}
      >
        <Image
          src="/logo.png"
          alt=""
          width={60}
          height={60}
          className="border"
          priority
        />
      </figure>
      {/*  */}
      <main className="grid gap-6 px-6">
        <h1 className="text-xl font-medium">
          {startCase(statusText.toLowerCase())}
        </h1>
        {/*  */}
        {message ? (
          <pre className="text-code scroll-view max-h-[260px]">
            {JSON.stringify(message, null, 2)}
          </pre>
        ) : (
          <p>
            It appears the requested resource URL at{" "}
            <strong className="text-kbd">{pathname}</strong> does not exist or
            has been moved temporarily.
          </p>
        )}
        {/*  */}
        <article className="grid gap-0 text-[14px]">
          <p>Hint :</p>
          <ul className="ml-4 list-inside list-disc leading-[24px]">
            <li>Confirm you have typed the correct URL.</li>
            <li>Troubleshoot your Internet connection.</li>
            <li>Contact Webmaster or Tech Support.</li>
          </ul>
        </article>
        {/*  */}
        <h3 className="text-contrast text-sm">
          ERR_{statusCode}_{statusText}
        </h3>
      </main>
      {/*  */}
      <footer className="fixed bottom-6 w-full px-6">
        <div className="grid gap-4">
          <Button onClick={handleReload} variant="default" className="h-[48px]">
            Reload
          </Button>
          <Button
            onClick={handleBack}
            variant="link"
            className="mx-auto h-[48px]"
          >
            Go back
          </Button>
        </div>
      </footer>
    </div>
  );
};
