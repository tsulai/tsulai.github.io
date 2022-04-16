import React from 'react'
import {useSelector} from "react-redux" //redux state value ကို ယူသုံးမှာ , slice ကို သုံးတာမဟုတ်

export default function Profile() {
    const user = useSelector((state) => state.user.value)//the one declare in user slice (redux)
    const themeColor = useSelector((state) => state.theme.value)
    
  return (
    <div style={{'color': themeColor}}>
        <h1>Profile</h1>

        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email} </p>
    </div>
  )
}
