import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import { useColorScheme } from '@/hooks/use-color-scheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Drawer
          screenOptions={{
            headerShown: true,
          }}>
          <Drawer.Screen
            name="(tabs)"
            options={{
              drawerLabel: 'Dashboard',
              title: 'Dashboard',
              drawerIcon: ({ color, size }) => (
                <Ionicons name="home-outline" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="survey"
            options={{
              drawerLabel: 'Survey',
              title: 'Survey',
              drawerIcon: ({ color, size }) => (
                <Ionicons name="document-text-outline" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="camera"
            options={{
              drawerLabel: 'Camera',
              title: 'Camera',
              drawerIcon: ({ color, size }) => (
                <Ionicons name="camera-outline" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="contact"
            options={{
              drawerLabel: 'Contacts',
              title: 'Contacts',
              drawerIcon: ({ color, size }) => (
                <Ionicons name="people-outline" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="location"
            options={{
              drawerLabel: 'Location',
              title: 'Location',
              drawerIcon: ({ color, size }) => (
                <Ionicons name="location-outline" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="clipboard"
            options={{
              drawerLabel: 'Clipboard',
              title: 'Clipboard',
              drawerIcon: ({ color, size }) => (
                <Ionicons name="clipboard-outline" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="settings"
            options={{
              drawerLabel: 'Settings',
              title: 'Settings',
              drawerIcon: ({ color, size }) => (
                <Ionicons name="settings-outline" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="preview"
            options={{
              drawerItemStyle: { display: 'none' },
              title: 'Survey Preview',
            }}
          />
          <Drawer.Screen
            name="modal"
            options={{
              drawerItemStyle: { display: 'none' },
              title: 'Modal',
            }}
          />
        </Drawer>
        <StatusBar style="auto" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
