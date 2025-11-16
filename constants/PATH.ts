export const PATH = {
  home: "/",
  // auth
  login: "/login",
  register: "/register",
  forgotPassword: "/forgot-password",
  createPassword: "/create-password",
  verifyEmail: "/verify-email",
};

export const ADMIN_PATH = {
  home: "/admin",
  // auth
  login: "/admin",
};

export const PUBLIC_PATHS: string[] = [];

interface IRedirectPath {
  source: string;
  destination: string;
  permanent: boolean;
}

export const REDIRECT_PATHS: IRedirectPath[] = [
  {
    source: "/admin/login",
    destination: "/admin",
    permanent: false,
  },
];
