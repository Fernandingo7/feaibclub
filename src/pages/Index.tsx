import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Landmark, LineChart, Banknote, Mic, Briefcase, Users, GraduationCap } from "lucide-react";

const Index = () => {
  return <>
      <Helmet>
        <title>FEA Investment Banking Club | USP</title>
        <meta name="description" content="Liga de Investment Banking da FEA-USP. Conteúdo técnico, prática e networking. Investment Banking USP, Liga de Mercado Financeiro." />
        <link rel="canonical" href="/" />
      </Helmet>
      <header className="fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur border-b border-border/50">
        <nav className="container flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-2 font-playfair text-lg text-foreground">
            <img src="/lovable-uploads/388ef1a9-eb63-48f5-877d-df87ae291bf9.png" alt="FEA Investment Banking Club Logo" className="h-8 w-auto" />
            
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#sobre" className="story-link">Sobre</a>
            <a href="#areas" className="story-link">Áreas de Atuação</a>
            <a href="#atividades" className="story-link">Atividades</a>
            <a href="#processo" className="story-link">Processo Seletivo</a>
            <a href="#contato" className="story-link">Contato</a>
          </div>
          <div className="flex items-center gap-3">
            <Button asChild className="hover-scale" variant="default">
              <a href="https://forms.gle/RJz2nBgo2fnJuYZx7" aria-label="Seja Membro">Processo Seletivo aberto!</a>
            </Button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="hero" className="relative min-h-[86vh] flex items-center">
          <div className="absolute inset-0 -z-10 bg-[url('/lovable-uploads/d7f80963-bd51-4f09-8dae-5529f4378f3a.png')] bg-cover bg-center opacity-30" aria-hidden="true" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background/90 via-background/85 to-background/95" aria-hidden="true" />
          <div className="container py-24 md:py-32">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Formando a próxima geração de profissionais de Investment Banking
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Desenvolvemos talentos para atuar nas áreas mais competitivas do mercado financeiro, por meio de conteúdo técnico, prática e networking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="hover-scale">
                  <a href="#sobre">Conheça nosso trabalho</a>
                </Button>
                <Button asChild size="lg" variant="secondary" className="hover-scale">
                  <a href="#processo">Inscreva-se no Processo</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Who Trust Us */}
        <section className="border-t border-border/50 py-16 bg-card/30">
          <div className="container">
            <h2 className="text-4xl font-semibold text-center mb-8 text-muted-foreground">Conheça nossos parceiros.</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center opacity-70">
              <div className="flex items-center justify-center p-4">
                <img src="/lovable-uploads/logos/espm.png"></img>
              </div>
              <div className="flex items-center justify-center p-4">
                <img src="/lovable-uploads/logos/inteli.png"></img>
              </div>
              <div className="flex items-center justify-center p-4">
                <img src="/lovable-uploads/logos/mack.png"></img>
              </div>
              <div className="flex items-center justify-center p-4">
                <img src="/lovable-uploads/logos/link.png"></img>
              </div>  
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="container py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold">Sobre o Clube</h2>
              <p className="text-muted-foreground">
                Fundada por alunos da FEA-USP, a entidade tem o objetivo de preparar estudantes para atuar em M&A, DCM e ECM, fornecendo base técnica sólida e experiências práticas.
              </p>
              <p className="text-muted-foreground">
                Nossa missão é capacitar nossos membros para processos seletivos e carreira em Investment Banking, unindo excelência acadêmica, prática intensiva e conexão com o mercado.
              </p>
            </div>
            <div className="animate-scale-in">
              <img src="/lovable-uploads/about-yrui.jpeg" alt="Membros do FEA Investment Banking Club em atividade" className="rounded-lg shadow-lg w-full h-[320px] object-cover" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Áreas de Atuação */}
        <section id="areas" className="bg-secondary py-20 md:py-28">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Áreas de Estudo</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Landmark className="text-accent" /> M&A</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Fusões e Aquisições: análise de empresas, modelagem financeira, valuation e negociação.
                </CardContent>
              </Card>
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><Banknote className="text-accent" /> DCM</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Debt Capital Markets: estruturação de dívidas corporativas, estudo aprofundado sobre crédito.
                </CardContent>
              </Card>
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><LineChart className="text-accent" /> ECM</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Equity Capital Markets: estudo de ofertas públicas, IPOs e operações de follow-ons.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Atividades e Benefícios */}
        <section id="atividades" className="container py-20 md:py-28">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Atividades e Benefícios</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Mic className="text-accent" /> Palestras</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">Palestras e workshops com profissionais do mercado.</CardContent>
            </Card>
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Briefcase className="text-accent" /> Challenges</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">Simulações e desafios práticos com feedback.</CardContent>
            </Card>
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><GraduationCap className="text-accent" /> Preparação</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">Preparação para entrevistas e processos seletivos.</CardContent>
            </Card>
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Users className="text-accent" /> Networking</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">Rede com ex-membros e empresas parceiras.</CardContent>
            </Card>
          </div>
        </section>

        {/* Processo Seletivo */}
        <section id="processo" className="bg-secondary py-20 md:py-28">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Processo Seletivo aberto até dia 22/08.</h2>
            <p className="text-muted-foreground text-center mb-8">
Está aberto o primeiro PS para seleção de novos membros-fundadores da FIBC. <b>Preencha o formulário de inscrição para iniciar na seleção por meio das próximas fases.   </b>         </p>
            <div className="flex justify-center">
              <Button asChild size="lg" className="hover-scale">
                <a href="https://forms.gle/RJz2nBgo2fnJuYZx7" aria-label="Inscreva-se">Faça sua inscrição no Processo Seletivo</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        
      </main>

      <footer id="contato" className="border-t bg-background">
        <div className="container py-12 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/lovable-uploads/388ef1a9-eb63-48f5-877d-df87ae291bf9.png" alt="FEA Investment Banking Club Logo" className="h-6 w-auto" />
              
            </div>
            <p className="text-sm text-muted-foreground">FEA-USP — Av. Prof. Luciano Gualberto, 908, São Paulo, SP</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>Email: <a href="mailto:contato@feaibclub.com.br" className="underline">contato@feaibclub.com.br</a></li>
              <li><a href="https://www.linkedin.com/company/fea-ib-club/about/" target="_blank" rel="noreferrer" className="story-link">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/fibc_feausp/" target="_blank" rel="noreferrer" className="story-link">Instagram</a></li>
            </ul>
          </div>
          <div className="text-sm text-muted-foreground">
            <p className="mb-2">© {new Date().getFullYear()} FEA Investment Banking Club. Todos os direitos reservados.</p>
            <p>Entidade estudantil sem vínculo empregatício.</p>
          </div>
        </div>
      </footer>
    </>;
};
export default Index;