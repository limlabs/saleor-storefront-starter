import Image from "next/image";
import gql from "graphql-tag";
import request from "graphql-request";
import Link from "next/link";

const allProductsQuery = gql`
  {
    products(channel: "default-channel", first: 10) {
      totalCount
      edges {
        node {
          slug
          name
          media {
            url
            alt
          }
          pricing {
            priceRange {
              start {
                gross {
                  amount
                  currency
                }
              }
            }
          }
        }
      }
    }
  }
`;

interface HomePageProducts {
  products: {
    totalCount: number;
    edges: {
      node: {
        slug: string;
        name: string;
        media: {
          url: string;
          alt: string;
        }[];
        pricing: {
          priceRange: {
            start: {
              gross: {
                amount: number;
                currency: string;
              };
            };
          };
        };
      };
    }[];
  };
}

export default async function Home({
  params: { locale },
}: {
  params: { locale: string; channel: string };
}) {
  const { products } = await request<HomePageProducts>(
    "https://liminal-labs.saleor.cloud/graphql/",
    allProductsQuery
  );

  return (
    <main className="container">
      <h1 className="m-4 text-xl text-secondary-content">
        <span className="text-accent-focus">Shop &gt;</span> All Products
      </h1>
      <ul className="grid grid-cols-4 gap-2 p-2">
        {products.edges.map(({ node }) => {
          const [image] = node.media;
          return (
            <li className="carousel-item" key={node.slug}>
              <div className="card w-96 bg-base-100 shadow-xl m-2">
                <Link
                  href={`/${locale}/p/${node.slug}`}
                  className="link link-primary no-underline text-secondary hover:text-secondary"
                >
                  <figure className="bg-accent-content rounded-tl-md rounded-tr-md">
                    <Image
                      src={image.url}
                      alt={image.alt}
                      width={300}
                      height={300}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{node.name}</h2>
                    <p className="text-accent">
                      ${node.pricing.priceRange.start.gross.amount.toFixed(2)}
                    </p>
                    <div className="card-actions">
                      <button className="btn btn-primary">Add to Cart</button>
                    </div>
                  </div>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
