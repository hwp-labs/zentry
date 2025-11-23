import { AppSplash } from "@/components/atoms/app-splash";
import { AppError } from "@/components/atoms/app-error";

export const metadata = {
  title: "WIP",
};

export default function WipPage() {
  return (
    <AppError
      message={{
        success: false,
        error: {
          type: "InternalServerError",
          message: "An unexpected error occurred while processing your request",
          code: "ERR_INTERNAL_SERVER",
          status: 500,
          timestamp: "2024-11-23T14:30:45.123Z",
          path: "/api/v1/users/123",
          method: "POST",
          requestId: "req_7f8a9b2c3d4e5f6g",
          details: {
            exception: "NullPointerException",
            message: "Cannot read property 'id' of null",
            stackTrace: [
              "at UserService.getUser (UserService.java:45)",
              "at UserController.handleRequest (UserController.java:23)",
              "at DispatcherServlet.process (DispatcherServlet.java:892)",
            ],
            file: "/app/services/UserService.java",
            line: 45,
            column: 12,
          },
          metadata: {
            userId: "user_abc123",
            environment: "production",
            version: "1.2.3",
            server: "api-server-01",
          },
          suggestions: [
            "Check if the user ID exists in the database",
            "Verify request payload format",
            "Contact support if the issue persists",
          ],
        },
      }}
      statusCode={500}
    />
  );
}
