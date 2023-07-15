async function getData() {
  const res = await fetch(
    "https://api-football-v1.p.rapidapi.com/v3/teams?id=33",
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY_TEAM,
      },
      next: { revalidate: 60 },
    }
  );
  return res.json();
}

export default async function Leagues() {
  const res = await getData();
  const arr = "LWDWW";
  return (
    <>
      {/* <div className="p-5">{JSON.stringify(res)}</div> */}
      <div className="flex gap-3 p-5">
        <div
          className={`${
            arr[0] == "L"
              ? "text-white bg-red-400 px-2 rounded-lg w-6 h-6 flex items-center justify-center"
              : arr[0] == "W"
              ? "text-white bg-emerald-400 px-2 rounded-lg w-6 h-6 flex items-center justify-center text-sm"
              : "text-white bg-gray-400 px-2 rounded-lg w-6 h-6 flex items-center justify-center"
          }`}
        >
          {arr[0]}
        </div>
      </div>
    </>
  );
}
