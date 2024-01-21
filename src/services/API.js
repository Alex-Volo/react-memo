const baseUrl = "https://wedev-api.sky.pro/api/v2/leaderboard";

export const getLeaders = async () => {
  try {
    const response = await fetch(baseUrl);
    if (!response) throw new Error("Нет интернета");
    const json = await response.json();
    return json;
  } catch (error) {
    console.warn(error);
  }
};

export const sendLeader = async ({ name, time, achievements }) => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify({ name, time, achievements }),
    });
    return response.json();
  } catch (error) {
    console.warn(error);
  }
};
