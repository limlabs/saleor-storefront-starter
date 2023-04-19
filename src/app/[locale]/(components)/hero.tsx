import { ProductDetails } from "@/app/types";

interface PageProps {
		locale: string;
		channel: string;
		info: string;
		product: ProductDetails;
}

export function Hero({ locale, channel, info, product }: PageProps){
	const {name, thumbnail} = product;
    return (
		<div className="hero min-h-screen bg-base-200">
  			<div className="hero-content lg:flex-row-reverse">
    			<img src={thumbnail.url} className="max-w-sm rounded-lg shadow-2xl" />
    			<div>
      				<h1 className="text-5xl font-bold">{name}</h1>
      				<p dangerouslySetInnerHTML={{__html: info}}></p>
    			</div>
  			</div>
		</div>
	)
}