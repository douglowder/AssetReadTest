import { InvalidPhoneNumber } from '@/components/InvalidPhoneNumber';
import { Text, useWindowDimensions, View } from 'react-native';

export default function Index() {
  const { width, height } = useWindowDimensions();
  return (
    <View style={{ width, height }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 30,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
          Translations for invalid phone number field:
        </Text>
        <InvalidPhoneNumber field="input_phone_number" />
      </View>
    </View>
  );
}
