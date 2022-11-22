import {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  header: {
    display : 'flex',
    flexDirection : 'row',
    
    justifyContent: 'space-between',
    alignItems: 'center',
    width : '100%',
    backgroundColor: '#6366f1',
  },
  headerContent: {
    color: '#f5f5f4',
    paddingTop : 10,
    paddingRight : 10,
    paddingLeft : 10,
    paddingBottom : 10,
  },
});

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerContent}>MyProducts</Text>
      <Text style={styles.headerContent}>List</Text>
    </View>
  );
};

export default Header;
