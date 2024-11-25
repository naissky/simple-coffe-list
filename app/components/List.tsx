import Card from "./Card"
import Button from "./ui/Button"
import TextHeader from "./ui/TextHeader"

export default async function List() {
    return (
        <article className="relative -top-20 lg:-top-40 flex flex-col gap-5 bg-[#1B1D1F] rounded-xl px-10 py-10 lg:px-20 lg:py-20 text-pretty text-center max-w-md md:max-w-2xl lg:max-w-5xl">

            <header className="">
                <TextHeader className="text-coffe font-bold">Our Collection</TextHeader>
            </header>
            <div className="flex flex-col items-center justify-center text-pretty max-w-xs md:max-w-xl lg:max-w-5xl">
                <p className="text-[#6F757C] text-base max-w-xl font-medium">
                    Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
                </p>
                <div className="mt-5 flex flex-row gap-3 items-center justify-center">
                    <Button>All Products</Button>
                    <Button>Available Now</Button>
                </div>
                <div className="flex flex-col lg:flex-row">
                    <Card/>
                </div>
            </div>
        </article>
    )
}