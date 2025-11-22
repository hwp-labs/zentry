export type PathType = keyof typeof PATH;

export const PATH = {
  home: "/",
  // auth
  login: "/login",
  register: "/register",
  forgotPassword: "/forgot-password",
  createPassword: "/create-password",
  verifyEmail: "/verify-email",
  // members
  members: '/members',
  createMember: '/members/create',
  MemberDetails: (id: unknown) => `/members/${id}`,
  EditMember: (id: unknown) => `/members/${id}/edit`,
  MemberSurvey: (id: unknown) => `/members/${id}/survey`,
  // dashboard
  dashboard: '/dashboard'
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