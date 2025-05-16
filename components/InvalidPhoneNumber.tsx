import { useAssets } from 'expo-asset';
import { readAsStringAsync } from 'expo-file-system';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

const invalidPhoneNumberString = (
  translations: any,
  locale: 'en' | 'fr' | 'de',
  field: string,
) => {
  return translations[locale]['texts'][
    'The {0} field is not a valid phone number.'
  ].replace('{0}', field);
};

export function InvalidPhoneNumber(props: { field: string }) {
  // This uses Asset.loadAsync() to get the local URIs of the translation assets
  const [translationAssets, error] = useAssets([
    require('@/assets/translations/en.ftljson'),
    require('@/assets/translations/de.ftljson'),
    require('@/assets/translations/fr.ftljson'),
  ]);

  const [translations, setTranslations] = useState<any>(undefined);
  useEffect(() => {
    // Make sure we have the asset URIs before attempting to read them
    if (!translationAssets || error) {
      return;
    }
    // Read an asset and parse the JSON
    const loadTranslationAsync = async (asset: any) => {
      const jsonString = await readAsStringAsync(asset.localUri, {
        encoding: 'utf8',
      });
      return JSON.parse(jsonString);
    };
    // Load all translations and set state
    const loadTranslationsAsync = async () => {
      const en = await loadTranslationAsync(translationAssets[0]);
      const de = await loadTranslationAsync(translationAssets[1]);
      const fr = await loadTranslationAsync(translationAssets[2]);
      setTranslations({
        en,
        de,
        fr,
      });
    };
    loadTranslationsAsync();
  }, [translationAssets, error]);

  // Make sure we have the translations before rendering
  if (!translations || error) {
    return null;
  }
  return (
    <View>
      <Text>
        {'en: ' + invalidPhoneNumberString(translations, 'en', props.field)}
      </Text>
      <Text>
        {'de: ' + invalidPhoneNumberString(translations, 'de', props.field)}
      </Text>
      <Text>
        {'fr: ' + invalidPhoneNumberString(translations, 'fr', props.field)}
      </Text>
    </View>
  );
}
