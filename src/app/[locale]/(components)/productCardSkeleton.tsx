import Badge from "@/app/daisyui/badge";
import type { FC } from "react";

export const ProductCardSkeleton: FC = () => {
  return (
    <div className="container mix-blend-overlay bg-slate-800 h-[470px] w-[270px] rounded-md glass flex flex-col">
      <div className="containner h-[250px] w-full bg-secondary mix-blend-darken rounded-t-md"></div>
      <div className="container p-1 grow">
        <Badge className="mt-5 h-9 w-20 mix-blend-overlay"> </Badge>
        <Badge className="mt-5 h-10 w-full mix-blend-overlay"> </Badge>
      </div>
      <div className="container flex justify-center mb-6">
        <Badge className="h-[50px] w-[1205px] rounded-md mix-blend-overlay" />
      </div>
    </div>
  );
};
