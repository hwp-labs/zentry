import { httpClient } from "@/lib/axios/config";

export const userApiService = {
  async getProfile() {
    const res = await httpClient.get(`/user/profile`);
    return res.data;
  },
}

