// server/lib/chuckNorris.ts

export async function getJokeCategories(limit: number = 5, randomize: boolean = true) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CHUCK_NORRIS_API_URL}/jokes/categories`);
  const categories = await res.json();
  return categories.sort(() => randomize ? Math.random() - 0.5 : 0).slice(0, limit);
}

export async function getJoke(category: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CHUCK_NORRIS_API_URL}/jokes/random?category=${category}`
  );

  const data = await res.json();
  return data.value;
}
