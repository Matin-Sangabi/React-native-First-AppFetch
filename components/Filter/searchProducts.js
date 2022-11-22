
import {View, TextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: 'flex',
    // width: '100%,',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInput: {
    width: '80%',
    borderColor: '#6b7280',
    margin: 'auto',
    borderWidth: 2,
    color: '#4f46e5',
    padding: 10,
    borderRadius: 10,
    height: 40,
    fontWeight: '700',
  },
});

const SearchProducts = ({onSearch}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search on product"
        style={styles.TextInput}
        onChangeText={onSearch}
      />
    </View>
  );
};

export default SearchProducts;
