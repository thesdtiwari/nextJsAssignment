export const getFollowedCharacters = async () => {
    const response = await fetch("/api/follow", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
};