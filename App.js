import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import { Button } from 'react-native-web'
const App = () => {
  const [formLogin, setForm] = useState({
    email: '',
    password: ''
  })

  const onsubmit = () => {
    if (formLogin.email === 'unismuh' 
      && formLogin.password === 'unismuh') {
      alert('Login Berhasil')
    }

  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Form Login</Text>
      <View>
        <Text>Email</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(hasil) => setForm({ ...formLogin, email: hasil })}
          value={formLogin.email}
        />
        <Text>Password</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => setForm({ ...formLogin, password: text })}
          value={formLogin.password}
        />
        <View style={{ marginTop: 10 }}>
          <Button title="Login" onPress={onsubmit} />
        </View>
        <View>
          <Text>Email: {formLogin.email}</Text>
          <Text>Password: {formLogin.password}</Text>
        </View>
      </View>
    </View>
  )
}
export default App