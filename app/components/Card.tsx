import Heart from "./ui/Heart";
import HeartNo from "./ui/HeartNo";
import getCoffe from "./utils/api";

export default async function Card() {

    const coffe = await getCoffe()



    return (
        <div className="py-5 flex flex-col md:flex-row flex-wrap justify-center items-center">
            {
                coffe.map((coffe, index) => (
                    <div key={index}>
                        <div className="flex flex-col py-4 px-4 rounded-lg max-w-md gap-2">
                            <img src={coffe.image} className="w-60 h-32 bg-black rounded-lg" />
                            <div className="flex flex-row justify-between items-center">
                                <label className="text-sm text-coffe font-semibold">{coffe.name}</label>
                                <label className="bg-[#BEE3CC] text-background font-semibold text-[12px] py-1 px-2 rounded-lg">${coffe.price}</label>
                            </div>
                            <div className="flex flex-row justify-start gap-2 items-center">
                                <label>
                                    {coffe.rating > 0 && <Heart />}
                                </label>
                                <label className="text-sm text-coffe font-semibold">
                                    {coffe.rating !== null ? coffe.rating : <HeartNo/>}
                                </label>
                                <label className="text-sm text-[#6F757C] font-semibold">({coffe.votes} votes)</label>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}