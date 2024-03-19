# ReactNative ExpoでGraphQLを使う
[公式のライブラリーを追加](https://www.apollographql.com/docs/react/integrations/react-native/)

```bash
npm install @apollo/client graphql
```

App.tsxを修正
```tsx
import { FlatList, Text, View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';

interface User {
  id: string;
  name: string;
  email: string;
}

interface UsersData {
  users: User[];
}

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});

const USERS_QUERY = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

function Users() {
  const { loading, error, data } = useQuery<UsersData>(USERS_QUERY);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  return data && data.users ? (
    <FlatList
      data={data.users}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item.name}</Text>
          <Text>{item.email}</Text>
        </View>
      )}
    />
  ) : null;
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Users />
        </View>
      </SafeAreaView>
    </ApolloProvider>
  );
}
```

Nest.jsで作成したローカルサーバーで試してみる。
https://github.com/sakurakotubaki/nest-graphql-app