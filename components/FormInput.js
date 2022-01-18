import React from 'react'
import { 
    View, 
    Text,
TextInput,
Image
} from 'react-native'

import { 
    COLORS,
    FONTS,
    icons,
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

{/* Text input */}
<View
style={{
    flexDirection: 'row',
    height: 55,
    paddingHorizontal: SIZES.padding,
    //marginTop: SIZES.base,
    //borderBottomRadius: SIZES.radius,
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 2,
    backgroundColor: COLORS.transparent
}}
>
    {prependComponent}
    
    <TextInput
    style={{
        flex: 1,
        ...inputStyle,
        ...FONTS.body3
    }}
    placeholder={placeholder}
    placeholderTextColor={COLORS.primary}
    secureTextEntry={secureTextEntry}
    keyboardType={keyboardType}
    autoCompleteType={autoCompleteType}
    autoCapitalize={autoCapitalize}
    onChangeText={(text) => onChange(text)}
    >
        
    </TextInput>

{appendComponent}

</View>

{/* Label & Error */}
<View
style={{
    paddingTop: SIZES.base,
    flexDirection: 'row',
    justifyContent: 'space-between'
}}
>
{/* <Text
style={{
    color: COLORS.primary,
    ...FONTS.body3
}}
>
    {label}
</Text> */}
<Text
style={{
    color: COLORS.red,
    ...FONTS.body3
}}
>
    {errorMsg}
</Text>
</View>

    </View>
)
}

export default FormInput;