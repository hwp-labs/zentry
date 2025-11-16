import { GeolocationValueObject } from "./GeolocationValueObject";

export interface DeviceValueObject {
  ipAddress?: string;
  userAgent?: string;
  geolocation?: GeolocationValueObject;
  lastSeen?: string | null;
}