export const getRestaurants = async () => {
  try {
    const res = await fetch(
      "https://www.daegufood.go.kr/kor/api/tasty.html?mode=json&addr=수성구"
    );
    const data = await res.json();
    return data;
  } catch (err) {
    // TODO: add proper error handling (e.g. toast)
    console.log(err);
  }
};
