import Image from "next/image";
import Header from "./Components/Header";
import  Hero  from "./Components/Hero";
import  Editorspick  from "./Components/Editorspick";
import Main from "./Components/Main";
import Center from "./Components/Center";
import Down from "./Components/Down";
import Navbar from "./Components/Navbar";
import Between from "./Components/Between";
import White from "./Components/White";
export default function Home() {
  return (
    <div>
    <Header />
    <Main />
    <Hero />
    <Editorspick />
    <Center />
    <Down /> 
    <Navbar />
    <Between/>
    <White />
    </div>
  );
}
