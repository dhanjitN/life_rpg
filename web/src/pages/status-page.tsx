import { Button } from "@/components/ui/button";


export default function StatusPage() {
    let username = "Dhanjit Nath";
    let dream = " I want to an elite developer ; developer who can think , build and scale any system ! and that too faster than most  "
    return (
        <section className=" dark  bg-secondary  min-h-screen text-foreground px-4 py-5">
            <article className="flex justify-between pb-5">
                <header>
                    <h1 className="text-2xl">Hello , </h1>
                    <h2 className="text-xl ">  {username}</h2>
                </header>
                <div >
                    <Button className="text-xl ">D</Button>
                </div>
            </article>
            <div className=" h-0.5  rounded-sm px-2 bg-white w-full"></div>
            <article className="pt-5 pb-7">
                <h1 className="text-pretty text-lg italic   rounded-xl">{dream} </h1>
            </article>

            <article className="border-2 p-2 rounded-md pt-7">
                <div className="flex justify-around ">
                    <p className="border-2  p-2 rounded-md bg-primary">May 29th </p>
                    <p className="border-2  p-2 rounded-md bg-green-200 text-black">Pending </p>
                </div>
                <div className="text-lg text-preety pt-4 pb-3">
                    You have a good plan ahead,
                    You can add time for  resting before starting ,
                    Things are going to get hard, you might want to drop out,
                    but think about the person you want to become one day. 
                    This will help you achieve that ! 
                </div>
            </article>

            <article>

            </article>
        </section>

    )
}