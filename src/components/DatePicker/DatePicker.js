import React, {useState} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import MontserratMedium from '../TextWrapper/MontserratMedium';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import moment from 'moment';

export const DateTime = ({date = new Date(), setDate}) => {
  const [open, setOpen] = useState(false);

  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={() => setOpen(true)}>
        <Icon
          name="calendar-month"
          size={styles.iconSize}
          color={styles.IconColor}
        />
        <MontserratMedium style={styles.buttontextStyle}>
          {date.toDateString() === new Date().toDateString()
            ? `Today  ${moment(date).format('HH:mm a')}`
            : `${moment(date).format('DD MMM, YYYY')} ${moment(date).format(
                'HH:mm a',
              )}`}
        </MontserratMedium>
      </TouchableOpacity>

      <DatePicker
        minimumDate={new Date()}
        is24hourSource="device"
        mode="datetime"
        androidVariant="iosClone"
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default DateTime;
