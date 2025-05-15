import { InvalidPhoneNumber } from '@/components/InvalidPhoneNumber';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
        Translations for invalid phone number field:
      </Text>
      <InvalidPhoneNumber field="input_phone_number" />
    </View>
  );
}
