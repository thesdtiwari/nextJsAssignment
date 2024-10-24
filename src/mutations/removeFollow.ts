export const unfollowCharacter = async ({ id }) => {
    const response = await fetch("/api/follow", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: id }),
    });
    return await response.json();
};