"use server";

import { authRequest } from "@/services/auth";
import { utilsDescriptions } from "@/constants/utilities";
import { analyzeDescriptions } from "@/constants/analyze";

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

export async function enhance(
  file: File,
  method: keyof typeof utilsDescriptions,
) {
  const formData = new FormData();
  formData.append("fingerprint", file);
  formData.append("uuid", ""); //this will be replaced by backend anyway
  formData.append("location", "");
  formData.append("geolocation_lat", "3.321321");
  formData.append("geolocation_long", "4.4214213");
  formData.append("duration", "321"); //this will be replaced by backend anyway
  formData.append("os", "");
  formData.append("ip", "");
  formData.append("browser", "");

  const enhanced = await authRequest(
    `fingerprints/enhancement/${method}`,
    "POST",
    formData,
  );

  return enhanced;
}

export async function analyze(
  file1: File,
  file2: File,
  method: keyof typeof analyzeDescriptions,
) {
  const formData = new FormData();
  formData.append("fingerprint_1", file1);
  formData.append("fingerprint_2", file2);
  formData.append("uuid", ""); //this will be replaced by backend anyway
  formData.append("location", "");
  formData.append("geolocation_lat", "3.321321");
  formData.append("geolocation_long", "4.4214213");
  formData.append("duration", "321"); //this will be replaced by backend anyway
  formData.append("os", "");
  formData.append("ip", "");
  formData.append("browser", "");

  const analyzed = await authRequest(
    `fingerprints/${method}`,
    "POST",
    formData,
  );

  return analyzed;
}
