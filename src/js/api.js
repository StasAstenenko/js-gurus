const API_URL = 'https://portfolio-js.b.goit.study/api';

export async function fetchReviews() {
  try {
    const response = await fetch(`${API_URL}/reviews`);
    if (!response.ok) {
      throw new Error('Failed to fetch reviews');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
}
