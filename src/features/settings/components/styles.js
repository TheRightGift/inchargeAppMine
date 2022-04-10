import { Header } from 'react-navigation';
import { StyleSheet } from 'react-native';
import AppStyles from '@/config/styles';

const styles = StyleSheet.create({
  contained: {
    marginTop: Header.HEIGHT + 10,
  },
  card: {
    width: '100%',
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 16,
    lineHeight: 20,
    color: AppStyles.colors.lightBlack,
    fontFamily: AppStyles.fonts.FONT_BOLD,
  },
  actions: {
    width: '100%',
    marginTop: 18,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionsColumn: {
    width: '100%',
    marginTop: 18,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  actionText: {
    fontSize: 12,
    lineHeight: 22,
    color: '#929292',
    fontWeight: '400',
  },
  actionLink: {
    fontSize: 11,
    marginTop: 10,
    lineHeight: 25,
    color: AppStyles.colors.primaryColor,
  },
});

export default styles;
