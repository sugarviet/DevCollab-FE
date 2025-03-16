'use client';

import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/client";

export default function GraphQLProvider({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
