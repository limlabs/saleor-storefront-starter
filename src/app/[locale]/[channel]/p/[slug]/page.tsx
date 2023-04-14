import { gqlClient } from '@/gql';

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
    
    return(<div dangerouslySetInnerHTML={{__html: description.blocks[0].data.text}}></div>)
}