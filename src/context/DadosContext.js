import { createContext, useState } from "react";
export const DadosContext = createContext();

export default function ContextProvider({children}){

  const [name, setName] = useState("")
  const [img, setImg] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [token, setToken] = useState("")
  const [categorySlected, setCategorySlected] = useState("")
  const [categoryInput, setCategoryInput] = useState("")
  
    return (
        <DadosContext.Provider value={{
            name, setName,
            img, setImg,
            email, setEmail,
            password, setPassword,
            token, setToken,
            categorySlected, setCategorySlected,
            categoryInput, setCategoryInput
        }}>{children}</DadosContext.Provider>
    )
}