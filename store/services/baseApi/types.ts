export interface IApiResponse<T, K = string> {
  success: boolean;
  error: K | null;
  data: T | null;
}

export interface IFetchApiResponse {
  json: Promise<VoidFunction>;
  status: number; // 200
  ok: boolean;
}