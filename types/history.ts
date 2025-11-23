export interface History {
  history: {
    uuid: string;
    location: string;
    geolocation_lat: number;
    geolocation_long: number;
    duration: number;
    os: string;
    ip: string;
    browser: string;
    id: number;
    user_id: number;
    size: number;
    success_percent?: number;
    created_at: string;
  };
  photos: { photo_path: string; id: number; history_id: number }[];
}
