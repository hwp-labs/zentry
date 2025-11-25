export type PathType = keyof typeof PATH;

export const PATH = {
  home: "/",
  // auth
  login: "/login",
  register: "/register",
  CreatePassword: (token: string) => `/create-password/${token}`,
  CreatePasswordOtp: (token: string) => `/create-password-otp/${token}`,
  forgotPassword: "/forgot-password",
  ForgotPasswordOtp: (token: string) => `/forgot-password-otp/${token}`,
  ResetPassword: (token: string) => `/reset-password/${token}`,
  // members
  members: "/members",
  createMember: "/members/create",
  MemberDetails: (id: string | number) => `/members/${id}`,
  EditMember: (id: string | number) => `/members/${id}/edit`,
  MemberSurvey: (id: string | number) => `/members/${id}/survey`,
  // dashboard
  dashboard: "/dashboard",
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
