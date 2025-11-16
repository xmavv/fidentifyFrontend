export async function convertTiff(file: File): Promise<string> {
  const res = await fetch("/api/tiff-converter", {
    method: "POST",
    body: file,
  });

  if (!res.ok) throw new Error("Conversion failed");

  const blob = await res.blob();
  return URL.createObjectURL(blob);
}
