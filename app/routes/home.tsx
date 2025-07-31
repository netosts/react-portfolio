import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Neto Santos - Full Stack Software Engineer" },
    { name: "description", content: "Bem vindo ao portfólio de Neto Santos!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
