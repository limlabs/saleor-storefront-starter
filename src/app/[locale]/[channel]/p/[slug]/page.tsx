import { gqlClient } from '@/gql';
import { Hero } from '@/app/[locale]/(components)/hero';


interface PageProps {
	params: {
		locale: string;
		channel: string;
        slug: string;
	};
}

export default async function Pdp({params: { locale, channel, slug }}: PageProps){
    let { product } = await gqlClient.product({slug})
    let description = JSON.parse(product.description)

    return(
    <>
        <Hero locale={locale} channel={channel} info={description.blocks[0]?.data.text} product={product}/>
    </>    )
 }
