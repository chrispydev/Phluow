<View style={{paddingHorizontal: '5%'}}>
  <Text
    style={{
      color: colors.secondaryText,
      fontSize: 20,
      fontWeight: '300',
      letterSpacing: 1,
      marginBottom: '-2%',
      zIndex: 90,
    }}>
    Welcome to [company name], your one-name
  </Text>
  <Text
    style={{
      color: colors.secondaryText,
      backgroundColor: colors.modalSheetColor,
      padding: 10,
      borderBottomRightRadius: 20,
      fontSize: 20,
      fontWeight: '300',
      letterSpacing: 1,
    }}>
    destination for environmentally responsible
  </Text>
  <TouchableOpacity
    style={{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 13,
      padding: '2%',
      backgroundColor: colors.boxColor,
      width: '16%',
      elevation: 10,
      marginTop: '-6%',
    }}>
    <Text
      style={{
        color: colors.secondaryText,
        fontSize: 20,
        fontWeight: '300',
      }}>
      more
    </Text>
    <Icon name="plus" size={20} color={colors.secondaryText} />
  </TouchableOpacity>
</View>;
