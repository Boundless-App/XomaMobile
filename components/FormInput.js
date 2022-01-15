import React from 'react'
import { 
    View, 
    Text,
TextInput
} from 'react-native'

import { 
    COLORS,
    FONTS,
    SIZES
 } from '../constants'

const FormInput = ({
containerStyle,
label,
placeholder,
inputStyle,
prependComponent,
appendComponent,
onChange,
secureTextEntry,
keyboardType = "default",
autoCompleteType = "off",
autoCapitalize = "none",
errorMsg = ""
}) => {
return(
    <View
    style={{
        ...containerStyle
    }}
    >
{/* Label & Error */}
<View
style={{
    flexDirection: 'row',
    justifyContent: 'space-between'
}}
>
<Text
style={{
    color: COLORS.primary,
    ...FONTS.body3
}}
>
    {label}
</Text>
<Text
style={{
    color: COLORS.red,
    ...FONTS.body3
}}
>
    {errorMsg}
</Text>
</View>

{/* Text input */}
<View
style={{
    flexDirection: 'row',
    height: 55,
    paddingHorizontal: SIZES.padding,
    marginTop: SIZES.base,
    borderRadius: SIZES.radius,
    borderColor: COLORS.primary,
    borderWidth: 2,
    backgroundColor: COLORS.transparent
}}
>
    {prependComponent}
    <TextInput
    style={{
        flex: 1,
        ...inputStyle
    }}
    placeholder={placeholder}
    placeholderTextColor={COLORS.gray}
    secureTextEntry={secureTextEntry}
    keyboardType={keyboardType}
    autoCompleteType={autoCompleteType}
    autoCapitalize={autoCapitalize}
    onChangeText={(text) => onChange(text)}
    >
    </TextInput>

{appendComponent}

</View>

    </View>
)
}

export default FormInput;