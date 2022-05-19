import React from 'react';
import axios from "axios";
import {
  ImageProps,
  StyleSheet,
} from 'react-native';
import {
  ApplicationProvider,
  Button,
  Icon,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
});


const HeartIcon = (props?: Partial<ImageProps>): React.ReactElement<ImageProps> => (
  <Icon {...props} name='heart'/>
);

const headers = {
  "Content-Type": "application/json",
};

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get("http://localhost:8080/").then(
      (response) => {
          var result = response.data;
          console.log(result);
          setPost(response.data)
      },
      (error) => {
          console.log(error);
      }
  );
  }, []);

  if (!post) return (
    <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={styles.container}>
        <Text style={styles.text} category='h1'>
          😻
        </Text>
        <Text style={styles.text} category='s1'>
          Start with editing App.js to configure your App
        </Text>
      </Layout>
    </ApplicationProvider>
  </>
  )

  return(
  <>
    <IconRegistry icons={EvaIconsPack}/>
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={styles.container}>
        <Text style={styles.text} category='h1'>
          {post[0].text}
        </Text>
      </Layout>
    </ApplicationProvider>
  </>
  )
}

