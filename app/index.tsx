import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar translucent style="auto" />
      <View className="flex-1 items-center justify-center">
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  )
}

export default Home