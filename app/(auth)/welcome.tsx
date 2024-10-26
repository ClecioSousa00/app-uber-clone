import { CustomButton } from '@/components/CustomButton'
import { onboarding } from '@/constants'
import { router } from 'expo-router'
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar'
import { useRef, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Swiper from 'react-native-swiper'

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const isLastSlide = activeIndex === onboarding.length - 1

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ExpoStatusBar translucent />
      <View className="flex-1 items-center justify-between ">
        <View className="w-full items-end">
          <TouchableOpacity
            onPress={() => router.replace('/(auth)/sign-up')}
            className="p-5"
          >
            <Text className="text-black font-JakartaBold">skip</Text>
          </TouchableOpacity>
        </View>
        <Swiper
          ref={swiperRef}
          loop={false}
          dot={
            <View className="w-8 h-1 mx-1 bg-dots-background rounded-full" />
          }
          activeDot={
            <View className="w-8 h-1 mx-1 bg-dots-background-active rounded-full" />
          }
          onIndexChanged={(index) => setActiveIndex(index)}
        >
          {onboarding.map((item) => (
            <View key={item.id} className="items-center justify-center p-5">
              <Image
                source={item.image}
                className="w-full h-72"
                resizeMode="contain"
                alt={item.title}
              />
              <View className="flex-row items-center justify-center">
                <Text className="text-black text-3xl font-bold mx-10 text-center">
                  {item.title}
                </Text>
              </View>
              <Text className="text-md font-JakartaSemiBold text-center mx-10 mt-3 text-general-200">
                {item.description}
              </Text>
            </View>
          ))}
        </Swiper>
        <CustomButton
          title={isLastSlide ? 'Get Started' : 'Next'}
          className="w-11/12 mt-10 mb-4"
          onPress={() =>
            isLastSlide
              ? router.replace('/(auth)/sign-up')
              : swiperRef.current?.scrollBy(1)
          }
        />
      </View>
    </SafeAreaView>
  )
}

export default Onboarding
