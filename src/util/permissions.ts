import { useBackgroundPermissions, useForegroundPermissions } from "expo-location";
import { Platform } from "react-native";

export async function requestPermission() {
    await useForegroundPermissions();
    await useBackgroundPermissions();

    console.log("Permissions granted");
}