import {View, StyleSheet} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: 'flex',
    // width: '100%,',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Sections : {
    width: '80%',
    borderColor: '#6b7280',
    margin: 'auto',
    borderWidth: 2,
    color: '#4f46e5',
    padding: 10,
    borderRadius: 10,
    height: 40,
    fontWeight: '700',
  }
});

const SortByPrice = ({onSort}) => {
  const countries = ['max', 'min'];
  return (
    <View style={styles.container}>
      <SelectDropdown style={styles.Sections}
        data={countries}
        onSelect={(selectedItem, index) => {
          onSort(selectedItem);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item;
        }}
      />
    </View>
  );
};

export default SortByPrice;
