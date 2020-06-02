import React from 'react';
const App = () => {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 5},
    {name: "noName"}
  ]
  return (
  <div>
    {
      // keyが必要なのでindexを追加している
      profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index}/>
      })
    }
  </div>
  )
}
const User = (props) => {
return <div>Hi! I am {props.name}, and {props.age} years old! </div>
}

// デフォルトPropsの設定
User.defaultProps = {
  age: 1
}
export default App;