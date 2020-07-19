export interface LoginResponse {
  authenticationToken: String;
  expiresAt: Date;
  refreshToken: String;
  username: String;
}
