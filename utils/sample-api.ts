import fetch from 'isomorphic-unfetch'

export async function sampleFetchWrapper(
  input: RequestInfo,
  init?: RequestInit
) {
  try {
    const res = await fetch(input, init)
    const data = await res.json();
    return data
  } catch (err) {
    throw new Error(err.message)
  }
}
