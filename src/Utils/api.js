let jwt = null;
let jwtExpiry = 0;

export async function getJWT() {
  if (Date.now() < jwtExpiry) return jwt;

  const res = await fetch(
    `${process.env.REACT_APP_BRAVE_BACKEND_URL}/token`
  );
  const data = await res.json();

  jwt = data.token;
  jwtExpiry = Date.now() + 9 * 60 * 1000; // refresh before expiry

  return jwt;
}

export async function protectedFetch(path, options = {}) {
  const token = await getJWT();
  console.log("Using token:", token);
  const headers = {
    ...options.headers,
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const res = await fetch(`${process.env.REACT_APP_BRAVE_BACKEND_URL}${path}`, {
    ...options,
    headers,
  });

  return res.json();
}
