const popUp = (
  <>
    <PopupConfirmation
      visible={visible}
      onClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        <Text style={{color: colors.secondaryText, textAlign: 'center'}}>
          Your order is still pending
        </Text>
        <Text
          style={{
            paddingLeft: 3,
            color: colors.pending,
            textAlign: 'center',
          }}>
          pending
        </Text>
        <Text style={{color: colors.secondaryText, textAlign: 'center'}}>
          Wait for [company name] to accept your order
        </Text>
      </View>

      <TouchableOpacity onPress={() => setVisible(!visible)}>
        <Text
          style={{
            color: colors.secondaryText,
            textAlign: 'center',
            flexWrap: 'wrap',
            textDecorationStyle: 'dashed',
            textDecorationLine: 'underline',
          }}>
          See details of Order
        </Text>
      </TouchableOpacity>
      <CustomButton
        buttonAction={() => handleModal()}
        buttonText="Continue"
        bgColor={colors.secondary}
        pHorizontal={30}
        pVertical={5}
        bRadius={120}
      />
    </PopupConfirmation>
  </>
);
