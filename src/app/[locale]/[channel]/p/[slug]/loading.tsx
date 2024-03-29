import { ProductImageGridSkeleton } from "@/app/[locale]/(components)/productImageGridSkeleton";
import Badge from "@/app/daisyui/badge";

export default function loading({}) {
  return (
    <main className="lg:flex lg:justify-between lg:mx-0 mt-4">
      <section className="lg:w-2/3">
        <ProductImageGridSkeleton />
      </section>
      <section className="lg:w-1/4 px-6 bg-slate-800 glass rounded h-96 flex flex-col justify-start ml-2">
        <div className="text-2xl text-accent mt-6 lg:mt-0 ">
          <Badge className="mt-5 h-9 w-20 mix-blend-overlay"> </Badge>
        </div>
        <h1 className="text-4xl text-neutral my-2">
          <Badge className="mt-5 h-9 w-20 mix-blend-overlay"> </Badge>
        </h1>
        <div className=" bg-slate-700 rounded-md h-12"></div>
        <div className=" bg-slate-700 rounded-md h-12"></div>
      </section>
    </main>
  );
}
