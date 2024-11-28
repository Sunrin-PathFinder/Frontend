import { useState } from 'react';
import { StyleSheet, StatusBar, Text} from 'react-native';

export default function Button() {
    const [Title, setTitle] = useState<string>('');

    return (
        <>
            <button>{Title}</button>
        </>
    )
}