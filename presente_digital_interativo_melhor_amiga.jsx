import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function App() {
  const [step, setStep] = useState(0);
  const audioRef = useRef(null);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const screens = [
    {
      title: "Amodelio 💛",
      content: "Antes de qualquer coisa... clica no botão abaixo.",
      action: true,
    },
    {
      title: "Uma surpresa pra você",
      content: "Larissa, mesmo de longe... isso aqui é um pedacinho de mim pra você.",
    },
    {
      title: "15 anos de história",
      content: "A gente construiu algo raro. E em todo esse tempo, você nunca soltou minha mão.",
    },
    {
      title: "Você é incrível",
      content: "Eu sempre disse que queria ser como você. Hoje eu entendo ainda mais o porquê.",
    },
    {
      title: "Sua força",
      content: "A vida nunca foi fácil... mas você sempre se reinventou. E isso sempre me inspirou profundamente.",
    },
    {
      title: "Uma nova fase 🤍",
      content: "Agora você é mãe... e o Ethan já tem a sorte de ter você.",
    },
    {
      title: "Pro Ethan 🍼",
      content: "Oi, pequeno... se você for metade do que sua mãe é, você já vai ser incrível.",
    },
    {
      title: "Pra sempre",
      content: "Independente da distância... você sempre vai ser casa pra mim.",
    },
    {
      title: "Feliz aniversário 🎉",
      content: "Eu te amo, Amodelio. Que essa nova fase venha cheia de amor, força e momentos lindos com o Ethan.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 to-yellow-100 p-4">
      <audio ref={audioRef} loop>
        <source src="https://www.bensound.com/bensound-music/bensound-love.mp3" type="audio/mpeg" />
      </audio>

      <motion.div
        key={step}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="rounded-2xl shadow-xl">
          <CardContent className="p-6 text-center space-y-4">
            <h1 className="text-xl font-bold">{screens[step].title}</h1>
            <p className="text-gray-700">{screens[step].content}</p>

            {screens[step].action && (
              <Button onClick={playMusic} className="mt-4">
                Tocar música 🎵
              </Button>
            )}

            <div className="flex justify-center gap-2 pt-4">
              {step > 0 && (
                <Button variant="outline" onClick={() => setStep(step - 1)}>
                  Voltar
                </Button>
              )}

              {step < screens.length - 1 ? (
                <Button onClick={() => setStep(step + 1)}>
                  Próximo
                </Button>
              ) : (
                <Button onClick={() => setStep(0)}>
                  Recomeçar 💛
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
