import axios from "axios";
import { Envelope, Lock } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { Logo } from "../Logo";

export function SignIn() {
    const [isUserSignedIn, setIsUserSignedIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSignIn(event: FormEvent) {
        event.preventDefault();

        const data = {
            email,
            password
        }

        console.log(data);
        const response = await axios.post("/sessions", data);
        console.log(response.data);
        setIsUserSignedIn(true);
    }

    return (
    <div className="w-screen h-screen min-h-[850px] max-w-full bg-gray-900 flex flex-col items-center justify-center text-gray-100">
        <header className='flex flex-col items-center'>
            <Logo />
            <Heading size="lg" className='mt-4'>
                Ignite Lab
            </Heading>
            <Text className="text-gray-400 mt-1" size="lg">
                Faça login e comece a usar
            </Text>
        </header>
  
        <form onSubmit={handleSignIn} className='flex flex-col gap-4 items-stretch w-full max-w-sm mt-10'>
            {
                isUserSignedIn ? <Text>Login realizado!</Text> : null
            }
            <label htmlFor='email' className='flex flex-col gap-3'>
                <Text className='font-semibold'>Endereço de e-mail</Text>
                <TextInput.Root>
                <TextInput.Icon>
                    <Envelope />
                </TextInput.Icon>
                <TextInput.Input value={email} onChange={(ev) => setEmail(ev.target.value)} id="email" type="email" placeholder='Digite seu e-mail'>
    
                </TextInput.Input>
                </TextInput.Root>
            </label>
    
            <label htmlFor='email' className='flex flex-col gap-3'>
                <Text className='font-semibold'>Sua senha</Text>
                <TextInput.Root>
                <TextInput.Icon>
                    <Lock />
                </TextInput.Icon>
                <TextInput.Input value={password} onChange={(ev) => setPassword(ev.target.value)} id="password" type="password" placeholder='******'>
    
                </TextInput.Input>
                </TextInput.Root>
            </label>
    
            <label htmlFor="remember" className='flex items-center gap-2'>
                <Checkbox id="remember" />
                <Text className="text-gray-200" size="sm">
                    Lembrar de mim por 30 dias
                </Text>
            </label>
    
            <Button className='mt-4' type="submit">Entrar na plataforma</Button>
        </form>
    
        <footer className='flex flex-col items-center gap-4 mt-8'>
            <Text asChild size="sm">
                <a href="" className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha</a>
            </Text>
            <Text asChild size="sm">
                <a href="" className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
            </Text>
        </footer>
    </div>
    )
}