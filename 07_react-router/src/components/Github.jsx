import { useLoaderData } from "react-router-dom";

function Github() {

  const data = useLoaderData();

  return (
    <div className="font-extrabold h-screen text-2xl text-center p-10 bg-gray-400 text-white space-y-10">
      <div className="w-full">
        <img
          className="mx-auto h-70 w-70 rounded-xl"
          height={1}
          width={1}
          src={`${data.avatar_url}`}
          alt="avatar"
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="text-left max-w-sm">
          <h1>Name: {data.name}</h1>
          <h1>Follower: {data.followers}</h1>{" "}
          <h1>Following: {data.following}</h1>
          <h1>Location: {data.location}</h1>
          <a href={data.html_url} target="_blank">
            <button
              className="w-full mx-auto bg-black text-white text-lg px-2 py-3 rounded-lg mt-5 cursor-pointer"
            >
              Visit Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Github;
