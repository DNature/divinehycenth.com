import fetch from "isomorphic-unfetch";

export async function dataFetch(
  input: RequestInfo,
  init?: RequestInit
): Promise<any> {
  try {
    const res = await fetch(input, init);
    const data = await res.json();
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
}
