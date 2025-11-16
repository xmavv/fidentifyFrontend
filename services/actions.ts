"use server";

export async function recognize(file: File) {
  const formData = new FormData();
  //this should come from user object and loop over it and add fields
  //it can be done in outside function
  formData.append("fingerprint", file);
  formData.append("uuid", ""); //this will be replaced by backend anyway
  formData.append("location", "");
  formData.append("geolocation_lat", "3.321321");
  formData.append("geolocation_long", "4.4214213");
  formData.append("duration", "321");
  formData.append("os", "");
  formData.append("ip", "");
  formData.append("browser", "");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/fingerprints/match`,
    {
      method: "POST",
      body: formData,
    },
  );
  const data = await res.json();

  return data;
}
