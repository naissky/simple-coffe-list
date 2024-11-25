
import List from "./components/List"

export default async function Home() {


  return (
    <div className="flex flex-col items-center mx-auto w-full">
      <div className="flex flex-col justify-center items-center w-full">
        <img src="/bg-cafe.jpg" alt="Banner Coffe List" className="min-w-sm"/>
        <List></List>
      </div>
    </div>
  );
}
