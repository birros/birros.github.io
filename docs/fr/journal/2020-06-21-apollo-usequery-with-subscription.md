---
title: 'Apollo : useQuery avec subscription'
date: 2020-06-21T15:00:00+01:00
author: Julien Muret <contact@julienmuret.fr>
---

Petit bout de code en TypeScript montrant comment utiliser les _hooks_ d'Apollo
GraphQL afin d'obtenir une _query_ dont les données sont mises à jour à l'aide
d'une _subscription_. Cette astuce permet de mêler plusieurs bénéfices,
notamment celui de la compatibilité _SSR_ de la _query_, avec le temps réel de
la _subscription_.

<!-- more -->

## Le contexte de l'exemple

L'exemple qui suit part du principe que l'on utilise [TypeScript][1] et
[Apollo GraphQL (en)][2].

Pour rester simple on imagine un compteur incrémenté toutes les secondes,
accessible au travers d'une [API][3] [GraphQL][4] ayant ce schéma :

```graphql
type Counter {
  count: Int!
}

type Query {
  counter: Counter!
}

type Subscription {
  counter: Counter!
}
```

**Attention** : Il est important pour pouvoir remplacer les données de la
_query_ par celle de la _subscription_ que nom et paramètres de la _query_ et de
la _subscription_ soient identiques, ici `counter`, ainsi que le type de données
retourné, ici `Counter!`.

## Le code

La _query_ est définie dans `./graphql/CounterQuery.graphql` :

```graphql
query Counter {
  counter {
    count
  }
}
```

La _subscription_ est définie dans `./graphql/CounterSubscription.graphql` :

```
subscription Counter {
  counter {
    count
  }
}
```

Le typage des opérations GraphQL est assuré par [graphql-let (en)][5], lui-même
basé sur [GraphQL Codegen (en)][6]. Le [hook personnalisé][7] a pour objectif de
garantir une exacte compatibilité avec le type de `useCounterQuery`.

```typescript
import { useEffect } from 'react'
import {
  useCounterQuery,
  CounterDocument,
  CounterQuery,
} from './graphql/CounterQuery.graphql'
import { useCounterSubscription } from './graphql/CounterSubscription.graphql'
import { useApolloClient } from '@apollo/react-hooks'

export const useCounterQueryWithSubscription: typeof useCounterQuery = (
  baseOptions
) => {
  const client = useApolloClient()
  const queryResult = useCounterQuery(baseOptions)
  const subResult = useCounterSubscription({
    variables: baseOptions?.variables,
    client: baseOptions?.client,
    fetchPolicy:
      baseOptions?.fetchPolicy === 'cache-and-network'
        ? undefined
        : baseOptions?.fetchPolicy,
  })

  useEffect(() => {
    if (!subResult.loading && !subResult.error && subResult.data) {
      client.writeQuery<CounterQuery>({
        query: CounterDocument,
        data: {
          ...subResult.data,
          __typename: 'Query',
        },
      })
    }
  }, [subResult])

  return {
    ...queryResult,
    loading: queryResult.loading || subResult.loading,
    error: queryResult.error || subResult.error,
    variables: subResult.variables
      ? subResult.variables
      : queryResult.variables,
  }
}
```

## Conclusion

L'avantage de ce _hook personnalisé_, en plus des bénéfices listés dans
l'introduction ([SSR (en)][8] et [temps réel (en)][9]), est d'exposer
l'outillage qu'offre `useQuery` comme le [refetching (en)][10] ou
l'[optimistic UI (en)][11].

<!-- links -->

[1]: https://fr.wikipedia.org/wiki/TypeScript
[2]: https://github.com/apollographql
[3]: https://fr.wikipedia.org/wiki/Interface_de_programmation
[4]: https://fr.wikipedia.org/wiki/GraphQL
[5]: https://github.com/piglovesyou/graphql-let
[6]: https://github.com/dotansimha/graphql-code-generator
[7]: https://fr.reactjs.org/docs/hooks-custom.html
[8]: https://nextjs.org/docs/basic-features/pages#server-side-rendering
[9]: https://en.wikipedia.org/wiki/Real-time_data
[10]: https://www.apollographql.com/docs/react/data/queries/#refetching
[11]: https://www.apollographql.com/docs/react/performance/optimistic-ui/
