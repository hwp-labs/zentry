"use client";

import { AppError } from "@/components/atoms/app-error";
import { APP, META } from "@/constants/APP";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <head>
        {Object.entries(META).map(([name, content]) => (
          <meta key={name} name={name} content={content} />
        ))}
        <title>Internal Server Error - {APP.name}</title>
      </head>
      <body>
        <AppError message={error} statusCode={500} onReload={reset} />
      </body>
    </html>
  );
}
