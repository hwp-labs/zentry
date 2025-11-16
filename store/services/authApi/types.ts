export interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface LoginResponse {
  access_token?: string;
  refresh_token?: string;
  message?: string; // Login successful
  user?: {
    email: string;
    role: string //admin
  }
}

export interface RegisterRequest {
  email: string,
  phone: string,
  password: string,
  country: string,
  state: string,
  referral_code?: string,
}

export interface RegisterBuyerRequest extends RegisterRequest {
  name: string,
}

export interface RegisterVendorRequest extends RegisterRequest {
  firstname: string,
  lastname: string,
  business_name: string,
  business_type: string,
}

