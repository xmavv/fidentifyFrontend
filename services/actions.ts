"use server";

import { authRequest } from "@/services/auth";

export async function recognize(file: File) {
  const formData = new FormData();
  //this should come from user object and loop over it and add fields
  //it can be done in outside function
  formData.append("fingerprint", file);
  formData.append("uuid", ""); //this will be replaced by backend anyway
  formData.append("location", "");
  formData.append("geolocation_lat", "3.321321");
  formData.append("geolocation_long", "4.4214213");
  formData.append("duration", "321"); //this will be replaced by backend anyway
  formData.append("os", "");
  formData.append("ip", "");
  formData.append("browser", "");

  const recognized = await authRequest("fingerprints/match", "POST", formData);

  return recognized;
}
