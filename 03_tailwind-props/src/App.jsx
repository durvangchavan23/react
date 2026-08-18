import Card from "./components/Car";

function App() {

  const cards = [
    { username: "Durvang", btnText: "Click Me" },
    { username: "Rahul", btnText: "Follow" },
    { username: "Sneha", btnText: "Subscribe" },
    { username: "Aman", btnText: "View Profile" },
    { username: "Priya", btnText: "Connect" },
    { username: "Rohan", btnText: "Message" },
    { username: "Ananya", btnText: "Join Now" },
    { username: "Vikram", btnText: "Learn More" },
    { username: "Neha", btnText: "Get Started" },
    { username: "Arjun", btnText: "Contact" },
  ];

  return (
    <>
      <div className="bg-gray-500 w-full min-h-screen px-4 py-4">
        <h1 className="text-4xl font-bold text-white text-center">
          Tailwind Test
        </h1>
        <div className="mt-10 space-x-3 space-y-3 flex flex-wrap justify-center py-4">
          {cards?.map((card) => (
            <Card username={card.username} btnText={card.btnText} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
