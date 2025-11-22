export type PathType = keyof typeof PATH;

type Params = string | number

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
  MemberDetails: (id: Params) => `/members/${id}`,
  EditMember: (id: Params) => `/members/${id}/edit`,
  MemberSurvey: (id: Params) => `/members/${id}/survey`,
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