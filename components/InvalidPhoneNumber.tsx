import { Text, View } from 'react-native';

const translations = {
  en: require('@/assets/translations/en.json'),
  de: require('@/assets/translations/de.json'),
  fr: require('@/assets/translations/fr.json'),
};

const invalidPhoneNumberString = (
  locale: 'en' | 'fr' | 'de',
  field: string,
) => {
  return translations[locale]['texts'][
    'The {0} field is not a valid phone number.'
  ].replace('{0}', field);
};

export function InvalidPhoneNumber(props: { field: string }) {
  console.log(JSON.stringify(translations, null, 2));
  return (
    <View>
      <Text>{'en: ' + invalidPhoneNumberString('en', props.field)}</Text>
      <Text>{'de: ' + invalidPhoneNumberString('de', props.field)}</Text>
      <Text>{'fr: ' + invalidPhoneNumberString('fr', props.field)}</Text>
    </View>
  );
}
