"use server";

import { authRequest } from "@/services/auth";
import { utilsDescriptions } from "@/constants/utilities";
import { analyzeDescriptions } from "@/constants/analyze";
import { User } from "@/contexts/auth";

function setFormDataWithUserInfo(userInfo: User, formData: FormData) {
  formData.append("uuid", ""); //this will be replaced by backend anyway
  formData.append("location", userInfo.localization);
  formData.append("geolocation_lat", String(userInfo.lat));
  formData.append("geolocation_long", String(userInfo.long));
  formData.append("duration", "50"); //this will be replaced by backend anyway
  formData.append("os", userInfo.os);
  formData.append("ip", userInfo.ip);
  formData.append("browser", userInfo.browser);
}

export async function recognize(file: File, userInfo: User) {
  const formData = new FormData();
  formData.append("fingerprint", file);
  setFormDataWithUserInfo(userInfo, formData);

  const recognized = await authRequest("fingerprints/match", "POST", formData);

  return recognized;
}

export async function enhance(
  file: File,
  method: keyof typeof utilsDescriptions,
  userInfo: User,
) {
  const formData = new FormData();
  formData.append("fingerprint", file);
  setFormDataWithUserInfo(userInfo, formData);

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
  userInfo: User,
) {
  const formData = new FormData();
  formData.append("fingerprint_1", file1);
  formData.append("fingerprint_2", file2);
  setFormDataWithUserInfo(userInfo, formData);

  const analyzed = await authRequest(
    `fingerprints/${method}`,
    "POST",
    formData,
  );

  return analyzed;
}
