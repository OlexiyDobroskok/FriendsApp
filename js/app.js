const getData = async (url) => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

const url = "https://randomuser.me/api/";

try {
  const data = getData(url);
  console.log(data);
} catch {
  console.log(error.message);
}
