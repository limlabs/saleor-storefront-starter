import { ProductImageGridSkeleton } from "@/app/[locale]/(components)/productImageGridSkeleton";
import Badge from "@/app/daisyui/badge";

export default function loading() {
  return (
    <main className="lg:flex lg:justify-between lg:mx-0 mt-4">
      <section className="lg:w-2/3 ">
        <ProductImageGridSkeleton />
      </section>
      <section className="lg:w-1/4 px-6 lg:py-8 bg-almost-black glass rounded h-96 flex flex-col justify-start ml-2">
        <div className="text-2xl text-accent mt-6 lg:mt-0 ">
          <Badge className="mt-10 h-12 w-48 mix-blend-overlay"> </Badge>
        </div>
        <h1 className="text-4xl text-neutral my-2">
          <Badge className="mt-5 h-12 w-32 mix-blend-overlay"> </Badge>
        </h1>
        <h1 className="text-4xl text-neutral my-2">
          <Badge className="mt-5 h-4 w-12 mix-blend-overlay"> </Badge>
        </h1>
        <div className=" bg-slate-700 rounded-sm h-16 w-24"></div>
        <div>
          <Badge className="mt-5 h-16 w-32 mix-blend-overlay rounded-md "></Badge>
        </div>
      </section>
    </main>
  );
}
