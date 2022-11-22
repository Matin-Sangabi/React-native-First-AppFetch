import {Image, Text, View, StyleSheet, ScrollView} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop : 10,
    textAlign: 'center',
    fontSize: '20',
    paddingLeft : 10,
    paddingRight : 10
  },
  product: {
    padding: 10,
    backgroundColor: '#cbd5e1',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width : '100%',
    marginBottom : 10,
  },
  productImage: {
    borderRadius : 10,
    width: '80%',
    height:200,
    padding : 5
  },
  productDesc: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width : '100%'
  },
  productCategorie: {
    color: '#475569',
  },
  productTitle: {
    width : '100%',
  },
  productPrice: {
    color: '#ea580c',
    textAlign: 'center',
  },
});

const Products = ({products}) => {

  return (
    <ScrollView style={styles.container}>
      {products.map(item => {
        return (
          <View key={item.id} style={styles.product}>
            <Image
              source={{uri: `${item.images[0]}`}}
              style={styles.productImage}
            />
            <View style={styles.productDesc}>
              <Text style={styles.productCategorie}>{item.category}</Text>
              <View style={{display : 'flex' , flexDirection : 'row' , justifyContent : 'space-between' , width : '100%'}}>
                <Text>{item.brand}</Text>
                <Text>{item.title}</Text>
              </View>
            </View>
            <Text style={styles.productPrice}>Price : {item.price}$</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Products;
/**
 * {products ? (
            products.map((product) => {
                return (
                    <View key={product.id} style={styles.product}>
                <Image source={{uri: product.images[0]}}  style={styles.productImage}/>
                <View style={styles.productDesc}>
                  <Text style={styles.productCategorie}>{product.category}</Text>
                  <View style={styles.productTitle}>
                    <Text>{product.title}</Text>
                    <Text>{product.brand}</Text>
                  </View>
                </View>
                <View style={styles.productPrice}>
                  <Text>{product.product} $</Text>
                </View>
              </View>
                )
            })
        ) : (
          <Text>Loading</Text>
        )}
 */
