### create react-native app

  ```bash
  npx create-expo-app --template blank RNCourse
  ```

### Flat List

React Native'de `FlatList` büyük veri kümelerini performanslı bir şekilde göstermek için kullanılan bir bileşendir.
Liste içerisnide kaydırma yaapılabildiği gibi performansı optimize etmek için gereksiz render işlemlerini de azaltır.
FlatList'in pek çok özelliği vardır.

#### 1.FlatList'in Temel Kullanım

`FlatList` en temek haliyle bir dizi veriyi alıp bu veriyi liste olarak gösterir,

  ```jsx
  import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';

const DATA = [
    {id: '1', title: 'Apple'},
    {id: '2', title: 'Banana'},
    {id: '3', title: 'Orange'},
    {id: '4', title: 'Mango'},
];

const App = () => {
    const renderItem = ({item}) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );

    return (
        <FlatList
            data={DATA} // Gösterilecek veri
            renderItem={renderItem} // Her bir öğeyi nasıl göstereceğimizi belirtiyoruz
            keyExtractor={item => item.id} // Her bir öğenin benzersiz anahtarını belirtiyoruz
        />
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 24,
    },
});

export default App;

  ```

#### 2. FlatList Özellikleri

- `data`: Listeye veri gönderdiğimiz özelliktir. Bir dizi halinde verileri alır.

- `renderItem`: Her bir öğeyi nasıl render edeceğimizi belirtir. Genellikle fonksiyon kullanılır ve bu fonksiyon `item`
  parametresi alır.

- `keyExtractor`:Her bir öğeye benzersiz bir anahtar atanmasını sağlar. Genellikle `id` kullanılır.

- `horizontal`: Listeyi yatay hale getirir.

```jsx
  <FlatList
    data={DATA}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    horizontal={true} // Yatay liste
/>
```

- `numColums`: Listeyi sütunlara böler. Örneğin 2 sütunlu bir grid görünümü oluşturabiliriz.

```jsx
  <FlatList
    data={DATA}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    numColumns={2} // 2 sütun
/>
 ```

- `ListHeaderComponents`:Listenin başına özel bir bileşen ekler. Örneğin başlık eklemek istersek

 ```jsx
 <FlatList
    data={DATA}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    ListHeaderComponent={<Text style={styles.header}>Meyve Listesi</Text>}
/>

 ```

- `ListFooterComponent`: Listenin sonuna özel bir bileşen ekler.
- `ItemSeperatorComponent`: Öğeler arasına bir ayırıcı ekler. Örneğin her öğe arasına bir çizgi ekleyebiliriz.

```jsx
<FlatList
    data={DATA}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    ItemSeparatorComponent={() => <View style={styles.separator}/>}
/>

const styles = StyleSheet.create({
    separator: {
        height: 1,
        backgroundColor: '#000',
    }
});

```

- `ListEmptyComponent`:


- `onEndReached`:Liste sona yaklaştığında çağrılan bir fonksyion. Genellikle sayfalama yapmak için kullanılır.

```jsx

<FlatList
    data={DATA}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    onEndReached={() => console.log('Liste sonuna gelindi!')}
    onEndReachedThreshold={0.5} // Yüzde 50'ye gelince tetiklenir
/>

```

- ``refreshing & onRefresh``: Listeyi aşağı çekerek yenileme işlemi. refreshing boolean bir değer alır ve onRefresh ise
  yenileme fonksiyonunu belirtir.

```jsx
const [refreshing, setRefreshing] = React.useState(false);

const onRefresh = () => {
    setRefreshing(true);
    // Verileri yenile ve refreshing'i false yap
    setTimeout(() => {
        setRefreshing(false);
    }, 2000);
};

return (
    <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        refreshing={refreshing}
        onRefresh={onRefresh}
    />
);

```

- ``initialScrollIndex``: Liste başlangıcını belirli bir index ile başlatır.

```jsx
<FlatList
    data={DATA}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    initialScrollIndex={2} // 3. öğeden başlayarak gösterir
/>

```

- ``getItemLayout``: Büyük verilerde daha performanslı hale getirmek için kullanılan bir özelliktir. Her bir öğenin
  sabit bir yüksekliği varsa, bu özellik ile FlatList'e bu bilgiyi sağlayabilirsiniz.

```jsx
<FlatList
    data={DATA}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    getItemLayout={(data, index) => (
        {length: 50, offset: 50 * index, index} // Her öğe 50 birim yüksekliğe sahip
    )}
/>

```

a

#### 3. FlatList ile Performans Optimizasyonu

``windowSize``: Görüntülenen öğelerin kaç katını bellekte tutacağını belirler. Varsayılan olarak 21'dir.
``maxToRenderPerBatch``: Her bir render işleminde kaç öğe render edileceğini belirtir. Performansı artırabilir.

#### Özet:

FlatList, büyük ve uzun listelerle çalışırken performansı artıran birçok özellik sunar. Yukarıdaki örneklerde olduğu
gibi, listeyi yatay veya çok sütunlu yapabilir, öğeler arasında ayırıcılar ekleyebilir ve liste sonunda yeni veri
yükleme işlemlerini kolayca yönetebilirsiniz.

#### TouchableOpacity:

- `TouchableOpacity`: kullanıcı etkileşimlerini yönetmek için kullanılan bir bileşendir. Bir öğeye tıklandığında
  opakliığını azaltarak görsel bir geri bildirim sağlar.

`Kullanım`: Genellikle butonlar veya tıklanabilir öğelerde kullanılır. Kullanıcı öğeye dokunduğunda belirgin bir etki
yaratmak için idealdir.

`Özellikler`:

- `onPress`: Kullanıcı öğeye tıkladığında tetiklenecek bir fonksiyondur.

- `activeOpacity`: Kullanıcı öğeye tıkladığında opaklığı ne kadar azalacığını belirler. 0 ile 1 arasında bir değer alır.

- `disabled`: Eğer true olarak ayarlanırssa, öğe tıklanmaz hale gelir.

- `delayPressIn`: Dokunma olayının etkinleşmesi için geçen milisaniye cinsinden ayarlar.

  ```js
  import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const MyButton = () => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('Pressed!')}
            activeOpacity={0.7} // Tıklama sırasında opaklık 0.7 olacak
        >
            <Text style={styles.text}>Click Me</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 5,
    },
    text: {
        color: 'white',
        textAlign: 'center',
    },
});

export default MyButton;

```

#### Pressable

`Pressable`: Daha esnek ve özelleştirilebilir bir dokunma bileşinidir. Birden fazla dokunma durumunu (örneğin, tıklama,
tıklamaya başlama, tıklamayı bırakma) destekler ve bu durumlara göre stil uygulama imkanı sunar.

- `Kullanım`: Karmaşık etkileşimler ve geri bildirimler gerektiren durumlarda kullanılır. `Pressable` görsel geri
  bildirim ve durum yönetimi açısından daha fazla kontrol sağlar.

`Özellikler`

- `onPress`: Kullanıcının öğeye tıkladığında tetiklenecek bir fonksiyondur.

- `onPressIn`: Kullanıcı öğeye dokunduğunda tetiklenir.

- `onPressOut`: Kullanıcı öğeden parmağını çektiğinde tetiklenir.

- `style`: Durum değişikliklerin göre stil uygulamak için bir fonksiyon alabilir. Örneğin `pressed` durumu kullanılarak
  butonun rengi değiştirilebilir.

- `delayPressIn, delayPressOut:` Kullanıcının etkileşimde bulunması için geçen süreyi ayarlamak için kullanılır.

```js

import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

const MyButton = () => {
    return (
        <Pressable
            onPress={() => console.log('Pressed!')}
            onPressIn={() => console.log('Pressed In!')}
            onPressOut={() => console.log('Pressed Out!')}
            style={({pressed}) => [
                {
                    backgroundColor: pressed ? 'lightgray' : 'white', // Duruma göre arka plan rengi
                },
                styles.button,
            ]}
        >
            <Text style={styles.text}>Click Me</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 15,
        borderRadius: 5,
    },
    text: {
        textAlign: 'center',
    },
});

export default MyButton;
```

Özet

- ``TouchableOpacity``: Basit bir tıklama etkileşimi için idealdir; opaklık değişimi ile kullanıcı geri bildirimi
  sağlar.

- ``Pressable:`` Daha karmaşık etkileşimler için uygundur; birden fazla dokunma durumunu destekler ve daha fazla
  özelleştirme imkanı sunar.