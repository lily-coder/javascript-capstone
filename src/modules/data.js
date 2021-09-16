const API = {
  getMeals: async (endpoint) => {
    const res = await fetch(`${endpoint}`, { method: 'GET' });
    if (!res.ok) {
      throw new Error(`API error! status: ${res.status}`);
    } else {
      const data = await res.json();
      return data;
    }
  },
  getLikes: async () => {
    const res = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/lvQFdeSbvijlsDX1Y4VY/likes/',
      { method: 'GET' },
    );
    if (!res.ok) {
      throw new Error(`API error! status: ${res.status}`);
    } else {
      const data = await res.json();
      return data;
    }
  },

  getComments: async () => {
    const res = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/comments/',
      { method: 'GET' },
    );
    if (!res.ok) {
      throw new Error(`API error! status: ${res.status}`);
    } else {
      const data = await res.json();
      return data;
    }
  },
  getReservations: async () => {
    const res = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/reservations/',
      { method: 'GET' },
    );
    if (!res.ok) {
      throw new Error(`API error! status: ${res.status}`);
    } else {
      const data = await res.json();
      return data;
    }
  },
};

export default API;
