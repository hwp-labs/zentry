import { httpClient } from "@/lib/axios/config";
import { LoginRequest, LoginResponse, RegisterBuyerRequest, RegisterVendorRequest } from "./types";

export const authApiService = {
  async login(req: LoginRequest): Promise<LoginResponse> {
    const res = await httpClient.post("/auth/login", req);
    return res.data;
  },

  async registerBuyer(req: RegisterBuyerRequest) {
    const res = await httpClient.post(`/auth/signup/buyer`, req);
    return res.data;
  },

  async registerVendor(req: RegisterVendorRequest) {
    const res = await httpClient.post(`/auth/signup/vendor`, req);
    return res.data;
  },
}


