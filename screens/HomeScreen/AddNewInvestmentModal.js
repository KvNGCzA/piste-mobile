import React from 'react';
import { Text, View } from 'react-native';
import DatePicker from 'react-native-datepicker';
import styles from './styles';
import { colors, fonts } from '../../commons';
import Modal from '../../components/Modal';
import CustomTextInput from '../../commons/CustomTextInput';
import ReturnOnInvestmentInput from './ReturnOnInvestmentInput';


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

export default ({ toggleModal, visible, onDateChange, dateValue }) => 
  <Modal
    positiveActionText="Add"
    visible={visible}
    headerTitle="add investment"
    toggleModal={toggleModal}
  >
    <View>
        <View>
          <CustomTextInput {...{
            label: 'name',
            textStyle,
            inputStyle,
            inputFieldOptions: {
              returnKeyType: 'next',
            }
          }}/>
        </View>
      <View>
        <CustomTextInput {...{
          label: 'principle',
          textStyle,
          inputStyle,
          inputFieldOptions: {
            returnKeyType: 'next',
          }
        }}/>
      </View>
      <ReturnOnInvestmentInput />
    </View>
    <View style={{ marginBottom: 25 }}>
      <View style={styles.labelCont}>
        <Text style={[textStyle, {
          fontFamily: fonts.redHat,
          fontSize: 16,
          marginBottom: 15,
          }]}
        >
          date of maturity
        </Text>
      </View>
      <DatePicker
        date={dateValue}
        onDateChange={onDateChange}
        format='MM-DD-YYYY'
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        placeholder=" "
        customStyles={{
          dateIcon: {
            display: 'none'
          },
          dateText: {
            color: colors.cardOrange,
            fontWeight: 'bold',
            alignSelf: 'flex-start',
          },
          dateInput: {
            borderColor: colors.textGrey,
            borderStyle: 'solid',
            height: 47,
            padding: 10
          },
        }}
        style={{
          width: '100%'
        }}
      />
    </View>
  </Modal>
