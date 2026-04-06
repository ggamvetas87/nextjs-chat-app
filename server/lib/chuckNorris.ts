// server/lib/chuckNorris.ts

export async function getJokeCategories() {
  const res = await fetch("https://api.chucknorris.io/jokes/categories");
  return res.json();
}

export async function getJoke(category: string) {
  const res = await fetch(
    `https://api.chucknorris.io/jokes/random?category=${category}`
  );

  const data = await res.json();
  return data.value;
}
