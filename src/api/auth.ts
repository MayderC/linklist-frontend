const URI = `${process.env.VUE_APP_API_URI}/auth`;

export const login = async (email: string, password: string) => {
  const response = await fetch(`${URI}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  return data;
};

interface user {
  username: string;
  email: string;
  password: string;
}

export const register = async (user: user) => {
  const response = await fetch(`${URI}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: user.username,
      password: user.password,
      email: user.email,
    }),
  });

  const data = await response.json();

  return data;
};
