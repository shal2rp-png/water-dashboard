export default async () => {
  const url = `https://${process.env.BLYNK_SERVER}/external/api/getAll?token=${process.env.BLYNK_TOKEN}`;
  const res = await fetch(url);
  const data = await res.json();
  return Response.json(data);
};
export const config = { path: "/api/blynk" };