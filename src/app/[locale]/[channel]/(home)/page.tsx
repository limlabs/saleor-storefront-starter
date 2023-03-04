import { Inter } from "next/font/google";
import gql from "graphql-tag";
import request from "graphql-request";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const homePageContentQuery = gql`
  {
    products(channel: "default-channel", first: 10) {
      totalCount
      edges {
        node {
          slug
          name
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
    homePageContentQuery
  );

  return (
    <div>
      <ul className="carousel rounded-box">
        {products.edges.map(({ node }) => (
          <li className="carousel-item" key={node.slug}>
            <Link
              href={`/${locale}/p/${node.slug}`}
              className="link link-primary"
            >
              {node.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
