import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const useCustomDimensions = (wpercentage, hpercentage) => {
  const heightPercentage = Math.ceil(hp(hpercentage));
  const widthPercentage = Math.ceil(wp(wpercentage));

  return {heightPercentage, widthPercentage};
};

export default useCustomDimensions;
