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
  
  ### UseWindowDimensions:
  
  React Native'de ekranın boyutlarını dinamik olarak almak için kullanılan bir React hook'udur. Bu hool sayesinde, uygulamanın ekran boyutundaki değişikliklere (örneğin, cihazın yatay ve dikey modda kullanılması) otomatik olarak tepki vererek kullanıcı arayüzünü dinamik bir şekilde yeniden düzenleyebilirsiniz.
  
  #### useWindowDimensions Neden Kullanılır ?
  
  - `Responsive Tasarım`: Mobil cihazlarda ekran boyutları çeşitlilik gösterir. `UseWindowDimensions`, uygulamanızın ekran boyutlarına duyarlı hale gelmesine yardımcı olur. Ekran boyutuna bağlı olarak farklı düzenler oluşturabilirsiniz.
  
  
  - ``Ekran Yönlendirmesi (Orientation)``: Kullanıcı cihazı döndürdüğünde (dikeyden yataya veya yataydan dikeye geçişte), ``useWindowDimensions`` ile ekran boyutlarını anında güncelleyebilir ve arayüzün bu değişikliklere uyumlu olmasını sağlayabilirsiniz.
  
  - `Dinamik Boyut Ayarları`: Özellikle bileşenlerin genişlik veya yükseklik gibi değerlerini ekran boyutlarına göre ayarlamak istediğinizde kullanışlıdır.
  
  
  #### useWindowDimensions Nasıl Kullanılır?
useWindowDimensions basit bir şekilde, ekranın genişlik ve yüksekliğini width ve height değerleri olarak döner. Bu değerler, cihaz döndürüldüğünde veya ekran boyutları değiştiğinde güncellenir.

```js
import React from 'react';
import { View, Text, useWindowDimensions, StyleSheet } from 'react-native';

const ResponsiveComponent = () => {
  const { width, height } = useWindowDimensions(); // Ekran boyutlarını alıyoruz.

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ekran Genişliği: {width}</Text>
      <Text style={styles.text}>Ekran Yüksekliği: {height}</Text>
      <View
        style={[
          styles.box,
          { width: width * 0.5, height: height * 0.2 } // Dinamik boyut ayarlıyoruz.
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  box: {
    backgroundColor: 'skyblue',
  },
});

export default ResponsiveComponent;


```

##### Açıklama

- ``useWindowDimensions ``ile anlık ekran genişliği ve yüksekliği width ve height olarak alınır.

- Bu değerler sayesinde, örneğin kutunun genişliğini width * 0.5 ile ekranın yarısı olacak şekilde ayarlayabiliriz.

- Cihazın ekran boyutu veya yönü değiştiğinde bileşen otomatik olarak yeniden render edilir ve güncel ekran boyutuna göre yeniden düzenlenir.

Bu hook, ekran boyutlarına bağlı tasarım gereksinimlerinde oldukça kullanışlıdır ve cihazın boyut değişikliklerine otomatik olarak uyum sağlar.


### KeyboadAvoidingView

`KeyboardAvoidingView` klavye açıldığında kendi içindeki içerikleri otomatik olarak yukarı kaydırarak klavye tarafından kapatılmalarını engeller. BU sayede, kullanıcının klavye ile etkileşindeyken bile girdiği alanları görmesi sağlanır.


```js

import React from 'react';
import { KeyboardAvoidingView, TextInput, Button, Platform, StyleSheet } from 'react-native';

const ExampleScreen = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TextInput placeholder="Kullanıcı Adı" style={styles.input} />
      <TextInput placeholder="Şifre" style={styles.input} secureTextEntry />
      <Button title="Giriş Yap" onPress={() => {}} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
});

export default ExampleScreen;

```

#### Özellikler
-   ``behavior:`` KeyboardAvoidingView'in nasıl davranacağını belirler. Üç ana seçeneği vardır:

    - "``padding``": Klavye açıldığında, KeyboardAvoidingView'in padding özelliğini kullanarak içeriği yukarı iter. iOS cihazlarda genellikle kullanılır.
    
    -"``height``": Klavye açıldığında KeyboardAvoidingView'in yüksekliğini küçülterek bileşenlerin klavye tarafından kapatılmasını önler.
    
    - "``position``": Bileşenleri pozisyonlarını değiştirerek yerleştirir. Daha esnek bir davranış sağlar ancak karmaşık tasarımlarda doğru hizalama zorlukları yaratabilir.
    
- ``keyboardVerticalOffset``: Klavye açıldığında içerik ile klavye arasında belirli bir mesafe bırakmak için kullanılır. Örneğin, başlık veya sabit bir üst menü gibi bileşenlerle çakışmayı önlemek için ``keyboardVerticalOffset`` değeri ayarlanabilir.

####### Neden KeyboardAvoidingView Kullanılır?
``Kullanıcı Deneyimi İyileştirme:`` Formlar ve giriş alanları klavye tarafından kapatıldığında kullanıcı bu alanları göremeyebilir. Bu bileşen, kullanıcıya daha iyi bir deneyim sunarak klavye ile etkileşim sırasında bile tüm içerikleri görmesini sağlar.

``Platform Uyumlu:`` KeyboardAvoidingView, hem iOS hem de Android'de uyumlu çalışır ve farklı behavior seçenekleri ile her iki platformda da etkili bir şekilde kullanılabilir.

Bu şekilde, React Native uygulamanızda klavyenin kullanıcı deneyimini bozmasını engelleyerek daha profesyonel bir görünüm sağlayabilirsiniz.

### Platform

React Native'de `Platform`, uygulamanızın kodunu cihazın işletim sisteminde göre (İOS veya Android) koşullu olarak ayarlamannza olanak tanıyan bir API'dir. Bu özellik her iki işletim sistemini farklılıklarını göz önünde bulunudrarak cihazın plaformuna göre özel kod çalıştırmanızı sağlar. Özellikle stil bileşen yapısı veua bellirli özellikler için İOS ve Android arasında farklılıklar olduğunda Platfırm API'si kullanışlıdır.

#### Platform API’si Nasıl Kullanılır?


``Platform`` API’si iki şekilde kullanılabilir:

1. ``Basit Koşullar ile (Platform.OS``) Platform.OS özelliği, cihazın işletim sistemini kontrol eder. Bu özellik, "``ios``" veya "``android``" değerlerinden birini döner. İki platform arasında koşullu olarak farklı kodlar çalıştırmak için kullanılır.


```js
import { Platform, Text, View } from 'react-native';

const PlatformExample = () => {
  return (
    <View>
      {Platform.OS === 'ios' ? (
        <Text>Bu iOS cihazında çalışıyor.</Text>
      ) : (
        <Text>Bu Android cihazında çalışıyor.</Text>
      )}
    </View>
  );
};

```

2. ``Platform.select ``ile Platform.select, aynı özelliğin veya stilin farklı değerlerini her iki platform için tanımlamanıza olanak tanır. Bu, özellikle stil belirlerken kullanışlıdır ve Platform.OS ifadesini tekrar tekrar yazmayı önler.

```js

import { Platform, StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: Platform.select({ ios: 20, android: 10 }),
    backgroundColor: Platform.select({ ios: 'blue', android: 'green' }),
  },
});

const PlatformExample = () => {
  return (
    <View style={styles.container}>
      <Text>Platforma göre stil ayarlandı.</Text>
    </View>
  );
};

```

### Platform API’si Neden Kullanılır?

1. ``Farklı Platformlara Özgü Stiller:`` iOS ve Android tasarım kuralları farklıdır. Örneğin, iOS'ta daha yuvarlatılmış butonlar tercih edilirken Android'de daha keskin kenarlı butonlar yaygındır. Platform API’si ile her iki platforma özgü stil belirlemek kolaylaşır.

2. ``Özel Bileşen Kullanımı:`` Bazı bileşenler iOS veya Android için özel olabilir. Örneğin, ActionSheet veya DatePicker gibi bileşenlerin farklı sürümleri her iki platform için özel olarak kullanılabilir.

3. ``Platforma Özel Davranışlar:`` Her iki platformun kendine özgü davranışları veya sınırlamaları olabilir. Örneğin, iOS’ta padding değerleri farklı çalışabilir. Platform API’si sayesinde, platforma özgü davranışlar kolayca ele alınabilir.

4. ``Performansı Optimize Etme:`` Platform ile her iki platformda aynı performansı sağlayacak şekilde belirli kod bloklarını özelleştirerek optimize edebilirsiniz.

## Özet
React Native’de Platform, iOS ve Android arasında uyum sağlamak ve platform farklılıklarını yönetmek için kullanılan önemli bir araçtır. Böylece, tek bir kod tabanıyla platformlara özgü deneyimler sunabilirsiniz.