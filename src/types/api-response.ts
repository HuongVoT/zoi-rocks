export interface ApiResponse<T> {
  status: string;
  data: T;
  error: {
    message?: string;
  };
}
