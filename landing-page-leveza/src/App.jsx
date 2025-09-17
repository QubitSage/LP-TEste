import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, Clock, Users, Star, ArrowRight, Heart, Zap, Target } from 'lucide-react'
import './App.css'

// Import das imagens
import transformacao1 from './assets/transformacao_1.jpg'
import transformacao2 from './assets/transformacao_2.jpg'
import transformacao3 from './assets/transformacao_3.jpg'
import transformacao4 from './assets/transformacao_4.jpg'
import comidaSaudavel1 from './assets/comida_saudavel_1.jpg'
import comidaSaudavel2 from './assets/comida_saudavel_2.jpg'
import cardapioSaudavel from './assets/cardapio_saudavel.jpg'

function App() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  })

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleCTAClick = () => {
    window.open('https://pay.cakto.com.br/ij3ekbu_416993', '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-purple-600">Método Leveza</h1>
            <p className="text-gray-600">Transforme sua vida com receitas saudáveis</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-500 hover:bg-red-600 text-white">
              🔥 OFERTA LIMITADA
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
              Cansada de Dietas Restritivas e <span className="text-purple-600">Efeito Sanfona?</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Descubra o <strong>Método Leveza</strong> e conquiste o corpo dos seus sonhos com receitas deliciosas e cardápios inteligentes!
            </p>
            
            {/* Countdown Timer */}
            <div className="bg-red-500 text-white p-6 rounded-lg mb-8 max-w-md mx-auto">
              <p className="text-sm font-semibold mb-2">⏰ OFERTA EXPIRA EM:</p>
              <div className="flex justify-center space-x-4 text-2xl font-bold">
                <div className="text-center">
                  <div>{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className="text-xs">HORAS</div>
                </div>
                <div>:</div>
                <div className="text-center">
                  <div>{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className="text-xs">MIN</div>
                </div>
                <div>:</div>
                <div className="text-center">
                  <div>{String(timeLeft.seconds).padStart(2, '0')}</div>
                  <div className="text-xs">SEG</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                onClick={handleCTAClick}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                QUERO EMAGRECER COM O MÉTODO LEVEZA! <ArrowRight className="ml-2" />
              </Button>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">R$ 19,60</div>
                <div className="text-gray-500 line-through">De R$ 49,90</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src={cardapioSaudavel} 
                alt="Cardápio saudável do Método Leveza" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <img 
                src={comidaSaudavel1} 
                alt="Receitas saudáveis" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Com o Método Leveza, você vai:
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Target className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Perder Peso Naturalmente</h3>
                <p className="text-gray-600 text-sm">Receitas balanceadas e nutritivas para emagrecer sem passar fome</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Aumentar Autoestima</h3>
                <p className="text-gray-600 text-sm">Conquiste o corpo dos sonhos e sinta-se mais confiante</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Zap className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Mais Energia</h3>
                <p className="text-gray-600 text-sm">Alimentação saudável que reflete em mais disposição</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Receitas Incríveis</h3>
                <p className="text-gray-600 text-sm">Aprenda pratos fáceis, rápidos e saborosos</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transformações */}
      <section className="py-16 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Veja as Transformações Reais
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Mulheres que já mudaram suas vidas com o Método Leveza
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <img src={transformacao1} alt="Transformação 1" className="w-full rounded-lg mb-4" />
              <div className="text-center">
                <Badge className="bg-green-500 text-white">-15kg em 3 meses</Badge>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <img src={transformacao2} alt="Transformação 2" className="w-full rounded-lg mb-4" />
              <div className="text-center">
                <Badge className="bg-green-500 text-white">-12kg em 2 meses</Badge>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <img src={transformacao3} alt="Transformação 3" className="w-full rounded-lg mb-4" />
              <div className="text-center">
                <Badge className="bg-green-500 text-white">-18kg em 4 meses</Badge>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <img src={transformacao4} alt="Transformação 4" className="w-full rounded-lg mb-4" />
              <div className="text-center">
                <Badge className="bg-green-500 text-white">-10kg em 2 meses</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que você vai encontrar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            O que você vai encontrar no ebook:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src={comidaSaudavel2} 
                alt="Receitas do ebook" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Mais de 50 receitas exclusivas</h3>
                  <p className="text-gray-600">Opções para café da manhã, almoço, jantar, lanches e sobremesas</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Cardápios semanais completos</h3>
                  <p className="text-gray-600">Planejamento para facilitar sua rotina</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Lista de compras inteligente</h3>
                  <p className="text-gray-600">Economize tempo e dinheiro no supermercado</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Guia de substituições</h3>
                  <p className="text-gray-600">Adapte as receitas com ingredientes que você tem em casa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            O que dizem as mulheres que já transformaram suas vidas:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "Eu já tinha tentado de tudo para emagrecer, mas sempre acabava desistindo. Com o Método Leveza, perdi 10kg em 2 meses sem sofrimento. As receitas são maravilhosas e fáceis de fazer. Estou muito mais feliz e confiante!"
                </blockquote>
                <div className="font-semibold text-purple-600">- Maria Silva, 34 anos</div>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "Nunca imaginei que seria tão prazeroso emagrecer. As receitas são deliciosas e a minha família inteira adorou. Já eliminei 7kg e me sinto outra pessoa. Recomendo de olhos fechados!"
                </blockquote>
                <div className="font-semibold text-purple-600">- Ana Costa, 28 anos</div>
              </CardContent>
            </Card>
          </div>
          
          {/* Espaço para mais depoimentos */}
          <div className="mt-12 p-8 bg-white rounded-lg border-2 border-dashed border-gray-300">
            <div className="text-center text-gray-500">
              <Users className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Espaço para Prova Social</h3>
              <p>Aqui você pode adicionar mais depoimentos, fotos de clientes satisfeitas e resultados reais</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Principal */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            OFERTA ESPECIAL POR TEMPO LIMITADO!
          </h2>
          
          <div className="bg-white text-gray-800 rounded-lg p-8 mb-8">
            <div className="text-6xl font-bold text-red-500 mb-2">R$ 19,60</div>
            <div className="text-2xl text-gray-500 line-through mb-4">De R$ 49,90</div>
            <Badge className="bg-red-500 text-white text-lg px-4 py-2">
              60% DE DESCONTO
            </Badge>
          </div>
          
          <Button 
            onClick={handleCTAClick}
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-12 py-6 text-xl font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 mb-6"
          >
            QUERO EMAGRECER AGORA! <ArrowRight className="ml-2" />
          </Button>
          
          <p className="text-lg mb-4">
            ⚠️ <strong>Atenção:</strong> Esta oferta é por tempo limitado. As vagas para o acompanhamento exclusivo são limitadas.
          </p>
          
          <div className="flex justify-center items-center space-x-4 text-sm">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Garantia de 7 dias
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Download imediato
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              Suporte incluso
            </div>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Garantia de 7 Dias!</h2>
            <p className="text-gray-600 text-lg">
              Se por qualquer motivo você não ficar satisfeita com o nosso ebook, basta nos enviar um email em até 7 dias e nós devolveremos 100% do seu dinheiro, sem perguntas e sem burocracia.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Perguntas Frequentes
          </h2>
          
          <div className="space-y-6">
            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Como vou receber o ebook?</h3>
                <p className="text-gray-600">Após a confirmação do pagamento, você receberá um email com o link para download do ebook em formato PDF.</p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Posso ler o ebook em qualquer dispositivo?</h3>
                <p className="text-gray-600">Sim, o ebook é compatível com smartphones, tablets, computadores e leitores de ebooks.</p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">As receitas são difíceis de fazer?</h3>
                <p className="text-gray-600">Não, todas as receitas foram pensadas para serem práticas e fáceis de fazer, mesmo para quem não tem muita experiência na cozinha.</p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Tenho restrições alimentares, posso adaptar as receitas?</h3>
                <p className="text-gray-600">Sim, o ebook inclui um guia de substituições inteligentes para que você possa adaptar as receitas às suas necessidades.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Não perca esta oportunidade única de transformar sua vida!
          </h2>
          
          <Button 
            onClick={handleCTAClick}
            className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-6 text-xl font-bold rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 mb-8"
          >
            GARANTIR MINHA CÓPIA AGORA! <ArrowRight className="ml-2" />
          </Button>
          
          <p className="text-gray-400">
            © 2024 Método Leveza. Todos os direitos reservados.
          </p>
        </div>
      </section>
    </div>
  )
}

export default App
