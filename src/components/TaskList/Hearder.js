import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import MontserratBold from '../TextWrapper/MontserratBold';
import MontserratMedium from '../TextWrapper/MontserratMedium';
import styles from './styles';

const Header = ({tasks, categories}) => {
  const [filled, setFilled] = useState(0);

  function getingStatus(arr) {
    return arr.filter(item => item.status === 'complete');
  }

  let statusPanding = getingStatus(tasks);

  useEffect(() => {
    setFilled(Math.floor((statusPanding.length / tasks.length) * 100));
  }, []);

  return (
    <View style={styles.HeaderStyle}>
      <MontserratMedium
        style={styles.textHeader}>{`${tasks.length} task's`}</MontserratMedium>
      <MontserratBold style={styles.HeaderTextStyle}>
        {categories?.title}
      </MontserratBold>

      <View style={styles.total}>
        <View
          style={[
            styles.bar,
            {
              width: `${filled}%`,
              height: '100%',
              backgroundColor: categories?.color,
            },
          ]}></View>
      </View>
    </View>
  );
};

export default Header;
