import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "https://blog.softyeducation.com",
  key: "a010a4c5ef5efd34c60cf4df83",
  version: "v5.0",
});

export async function getPosts() {
  return await api.posts
    .browse({
      include: ["tags", "authors"],
      limit: 10,
    })
    .catch((err) => {
      throw new Error(err);
    });
}
