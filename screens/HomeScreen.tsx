import { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

import ChatFaceData from '~/services/ChatFaceData';
interface FaceDataType {
  id: number;
  name: string;
  primary: string;
  image: string;
  // add other properties if necessary
}
const Home = () => {
  // first we load data form your file
  const [faceData, setFaceData] = useState<FaceDataType[] | null>(null);
  const [selectedfaceData, setSelectedFaceData] = useState<FaceDataType | null>(null);
  console.log('image', selectedfaceData?.image);
  useEffect(() => {
    setFaceData(ChatFaceData);
    console.log(ChatFaceData);

    if (ChatFaceData && ChatFaceData.length > 0) {
      setSelectedFaceData(ChatFaceData[0]);
    }
  }, []);
  return (
    <View style={{ alignItems: 'center', paddingTop: 90 }}>
      {selectedfaceData && (
        <>
          <Text style={[{ color: selectedfaceData.primary || 'black' }, { fontSize: 30 }]}>
            Hello
          </Text>
          <Text
            style={[
              { color: selectedfaceData.primary || 'black' },
              { fontSize: 30, fontWeight: 'bold' },
            ]}>
            I am {selectedfaceData?.name}
          </Text>
          {/* <FontAwesome6 name="person" size={54} color={selectedfaceData.primary || 'black'} /> */}
          <Image
            source={{ uri: selectedfaceData.image }}
            style={{ width: 150, height: 150, marginTop: 20 }}
          />
          <Text style={{ marginTop: 30, fontSize: 25 }}>How Can I Help you?</Text>

          <View
            style={{
              marginTop: 20,
              backgroundColor: '#f5f5f5',
              alignItems: 'center',
              height: 110,
              padding: 10,
              borderRadius: 10,
            }}>
            <FlatList
              data={ChatFaceData}
              horizontal={true}
              renderItem={({ item }) =>
                selectedfaceData.id !== item.id && (
                  <View style={{ margin: 15 }}>
                    <Image source={{ uri: item.image }} style={{ width: 40, height: 40 }} />
                  </View>
                )
              }
            />
            <Text style={{ marginTop: 5, fontSize: 17, color: '#B0B0B0' }}>
              Choose your chat buddy
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
});
