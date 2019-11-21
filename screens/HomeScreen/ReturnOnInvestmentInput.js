import React from 'react';
import { View, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import formDropdownIcon from '../../assets/formDropdownIcon.png'
import { colors, fonts } from '../../commons';
import CustomTextInput from '../../commons/CustomTextInput';
import { calculateRoi } from '../../helpers';


const inputStyle = {
  borderColor: colors.textGrey,
  borderWidth: 1,
  height: 47,
  width: '100%',
  color: colors.cardOrange,
  fontWeight: 'bold',
};

const textStyle = {
  color: colors.textGrey,
  fontWeight: '300',
  textTransform: 'capitalize',
}

const dropDownStyle = {
  textAlign: 'center',
  color: colors.textGrey,
  borderColor: colors.textGrey,
  fontSize: 16,
  borderWidth: 1,
  borderLeftWidth: 0,
  height: 47,
  color: colors.cardOrange,
  fontWeight: 'bold',
  paddingLeft: 10,
}

export default ({ setNewInvestmentFormValues, values }) => {
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 25
    }}>
      <View style={{ width: '70%' }}>
        <CustomTextInput {...{
          label: 'return on investment',
          otherLabel: calculateRoi({ roiValue: values.roiValue, roiType: values.roiType, amountInvested: values.amountInvested }),
          otherLabelStyle: { color: colors.cardRed, fontWeight: 'bold' },
          textStyle,
          inputStyle: { ...inputStyle, borderRightWidth: 0,  },
          parentStyle:{ marginBottom: 0 },
          inputFieldOptions: {
            returnKeyType: 'send',
            onChangeText: value => setNewInvestmentFormValues(value, 'roiValue'),
            value: values.roiValue && typeof values.roiValue !== 'string' ? `${values.roiValue}` : values.roiValue || '',
          }
        }}/>
      </View>
      <View style={{ height: 47, borderRightWidth: 1, borderColor: colors.textGrey }}/>
      <View style={{ width: '30%', }}>
        <RNPickerSelect
          onValueChange={value => setNewInvestmentFormValues(value, 'roiType')}
          placeholder={{}}
          value={values.roiType}
          style={{
            alignItems: 'center',
            inputIOS: { ...dropDownStyle },
            inputAndroid: { ...dropDownStyle  },
            iconContainer: {
              right: null,
              paddingLeft: 10
            }
          }}
          useNativeAndroidPickerStyle={false}
          items={[
            { label: '%', value: 'percentage' },
            { label: 'Naira', value: 'currency' },
          ]}
          Icon={() =>
            <View
              style={{
                justifyContent: 'center',
                height: 47,
                alignItems: 'center',
                right: '10%'
              }}
            >
              <Image source={formDropdownIcon}/>
            </View>
          }
        />
      </View>
    </View>
  )
}
