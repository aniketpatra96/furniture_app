import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants';

const styles = StyleSheet.create({
  flatListContent: {
    paddingHorizontal: SIZES.medium,
    paddingBottom: SIZES.large,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    marginVertical: SIZES.small,
  },



  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
    marginBottom: 120,
  },
  paginationText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  paginationButtons: {
    flexDirection: 'row',
  },
  paginationButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.primary,
    color: COLORS.primary,
  },
  disabled: {
    opacity: 0.5, // Example of disabled button style
  },


});

export default styles;
