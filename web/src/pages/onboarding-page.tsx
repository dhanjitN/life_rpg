

import * as React from "react"
import { useForm } from "@tanstack/react-form"
import { toast } from "sonner"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group"

const formSchema = z.object({
    username: z.string()
        .min(3, "Minimum 3 characters")
        .max(32, "Maximum of 32 characters"),
    
    
})

export const OnBoardingPage = () => {


    return (
        <section className="dark bg-background text-foreground min-h-screen w-full pt-5 px-5 flex flex-col">
            <h1 className="text-xl text-red-200 font-bold underline px-5 self-end">oneLife</h1>
            <form action="#" >
                <article className="flex flex-col items-baseline justify-center gap-10 px-5 ">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl">What can I call you ? </h2>
                        <Input className=" h-8 p-3 text-lg/relaxed " type="text" name="" id="" placeholder="John Doe" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl">What is your big dream or long term goal ? </h2>
                        <Textarea className=" h-8 p-3 text-lg/relaxed " name="" id="" placeholder="I want to be ......" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl">How long do you think it will take ?  </h2>
                        <Input className=" h-8 p-3 text-lg/relaxed " type="text" name="" id="" placeholder="3years" />
                    </div>

                    <div className="flex flex-col gap-2">
                        <h2 className="text-xl" > What must you do everday to achieve that goal ?  </h2>
                        <Textarea className=" h-15 p-3 text-lg/relaxed " name="" id="" placeholder="I must spend 2hrs writing ....." />
                    </div>
                    <Button type="submit" className="md:px-3 px-4 py-6 text-xl md:py-5 self-center md:self-start">Submit</Button>
                </article>
            </form>

        </section>
    )
}