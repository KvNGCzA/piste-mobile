import React from 'react';
import { Text, View } from 'react-native';
import DatePicker from 'react-native-datepicker';
import styles from './styles';
import { colors, fonts } from '../../commons';
import Modal from '../../components/Modal';
import CustomTextInput from '../../commons/CustomTextInput';
import ReturnOnInvestmentInput from './ReturnOnInvestmentInput';
import Errors from '../../commons/Errors';


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
};

export default ({ toggleModal, visible, values, setNewInvestmentFormValues, positiveActionHandler }) => 
  <Modal
    positiveActionText="Add"
    visible={visible}
    headerTitle="add new investment"
    toggleModal={toggleModal}
    positiveActionHandler={positiveActionHandler}
  >
    <View>
      <View>
        <CustomTextInput {...{
          label: 'name',
          textStyle,
          inputStyle,
          inputFieldOptions: {
            returnKeyType: 'next',
            onChangeText: (value) => setNewInvestmentFormValues(value, 'name'),
            value: values.name
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
            onChangeText: (value) => setNewInvestmentFormValues(value, 'amountInvested'),
            value: values.amountInvested,
            keyboardType: 'numeric'
          }
        }}/>
      </View>
      <ReturnOnInvestmentInput values={values} setNewInvestmentFormValues={setNewInvestmentFormValues}/>
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
        date={values.returnDate}
        onDateChange={value => setNewInvestmentFormValues(value, 'returnDate')}
        format='MM/DD/YYYY'
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
