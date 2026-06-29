const BASE_URL = '/api/v1';

async function request(endpoint, options = {}) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : {};

  if (!response.ok) {
    throw new Error(data.message || 'Une erreur est survenue');
  }

  return data;
}

export const userService = {
  login: (dto) => request('/users/login', {
    method: 'POST',
    body: JSON.stringify(dto),
  }),

  register: (dto) => request('/users/register', {
    method: 'POST',
    body: JSON.stringify(dto),
  }),
};