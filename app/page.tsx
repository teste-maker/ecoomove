"use client"

import type React from "react"

import { useState } from "react"
import {
  Car,
  Users,
  Zap,
  Shield,
  Leaf,
  Volume2,
  TreePine,
  ArrowRight,
  Facebook,
  Instagram,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function EcomoveePage() {
  const [isDriverFormOpen, setIsDriverFormOpen] = useState(false)
  const [isPassengerFormOpen, setIsPassengerFormOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const handleDriverFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Formulário enviado com sucesso! Em breve entraremos em contato.")
    setIsDriverFormOpen(false)
  }

  const handlePassengerFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Cadastro realizado com sucesso! Você receberá mais informações em breve.")
    setIsPassengerFormOpen(false)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-emerald-800/50 bg-emerald-700/95 backdrop-blur-md">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
              <Car className="h-6 w-6 text-emerald-600" />
            </div>
            <span className="text-xl font-bold text-white">Ecomovee</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => scrollToSection("motoristas")}
              className="text-sm font-medium text-white transition-colors hover:text-emerald-200"
            >
              Para Motoristas
            </button>
            <button
              onClick={() => scrollToSection("passageiros")}
              className="text-sm font-medium text-white transition-colors hover:text-emerald-200"
            >
              Para Passageiros
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-sm font-medium text-white transition-colors hover:text-emerald-200"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-sm font-medium text-white transition-colors hover:text-emerald-200"
            >
              Contato
            </button>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <Button
              onClick={() => setIsDriverFormOpen(true)}
              variant="secondary"
              className="bg-white text-emerald-700 hover:bg-emerald-50"
            >
              Seja Motorista
            </Button>
            <Button
              onClick={() => setIsPassengerFormOpen(true)}
              className="border-2 border-white bg-transparent text-white hover:bg-white/10"
            >
              Baixar App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center text-white md:hidden"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-emerald-800/50 bg-emerald-700 md:hidden">
            <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
              <button
                onClick={() => scrollToSection("motoristas")}
                className="text-left text-sm font-medium text-white"
              >
                Para Motoristas
              </button>
              <button
                onClick={() => scrollToSection("passageiros")}
                className="text-left text-sm font-medium text-white"
              >
                Para Passageiros
              </button>
              <button onClick={() => scrollToSection("sobre")} className="text-left text-sm font-medium text-white">
                Sobre
              </button>
              <button onClick={() => scrollToSection("contato")} className="text-left text-sm font-medium text-white">
                Contato
              </button>
              <div className="flex flex-col gap-2 pt-2">
                <Button
                  onClick={() => setIsDriverFormOpen(true)}
                  className="w-full bg-white text-emerald-700 hover:bg-emerald-50"
                >
                  Seja Motorista
                </Button>
                <Button
                  onClick={() => setIsPassengerFormOpen(true)}
                  className="w-full border-2 border-white bg-transparent text-white hover:bg-white/10"
                >
                  Baixar App
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative bg-emerald-600 px-4 py-16 md:py-24 ">
        <div className="container mx-auto max-w-6xl">
          {/* Badge */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-700/50 px-4 py-2 text-sm text-white backdrop-blur-sm">
              <Car className="h-4 w-4" />
              <span className="font-medium">Ecomovee — Mobilidade justa, inteligente e sustentável</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="mb-12 text-center text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl text-balance">
            A Ecomovee conecta motoristas e passageiros de forma transparente, econômica e ecológica
          </h1>

          {/* Two Cards */}
          <div className="mb-12 grid gap-6 md:grid-cols-2">
            <Card className="border-emerald-400/20 bg-emerald-700/40 backdrop-blur-sm transition-transform hover:scale-105">
              <CardContent className="flex flex-col items-center gap-3 p-8 text-center">
                <div className="rounded-full bg-emerald-500/20 p-3">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Para os motoristas</h3>
                <p className="text-emerald-50">Mais liberdade e rentabilidade</p>
              </CardContent>
            </Card>

            <Card className="border-emerald-400/20 bg-emerald-700/40 backdrop-blur-sm transition-transform hover:scale-105">
              <CardContent className="flex flex-col items-center gap-3 p-8 text-center">
                <div className="rounded-full bg-emerald-500/20 p-3">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Para os passageiros</h3>
                <p className="text-emerald-50">Conforto nas viagens, conscientes e com menor impacto ambiental.</p>
              </CardContent>
            </Card>
          </div>

          {/* Subheading */}
          <p className="mb-8 text-center text-xl text-white md:text-2xl text-balance">
            Uma nova forma de se mover pela cidade, onde todos saem ganhando
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              onClick={() => setIsDriverFormOpen(true)}
              size="lg"
              variant="secondary"
              className="w-full gap-2 bg-white text-emerald-700 hover:bg-emerald-50 sm:w-auto"
            >
              <Car className="h-5 w-5" />
              Motoristas: faça seu pré-cadastro
            </Button>
            <Button
              onClick={() => setIsPassengerFormOpen(true)}
              size="lg"
              className="w-full gap-2 border-2 border-white bg-emerald-700 text-white hover:bg-emerald-800 sm:w-auto"
            >
              <Users className="h-5 w-5" />
              Passageiros: cadastre-se antecipadamente
            </Button>
          </div>

          {/* Small note */}
          <p className="mt-6 text-center text-sm text-emerald-100">
            ✓ Ganhe vantagens exclusivas e descontos nas primeiras viagens
          </p>
        </div>
      </section>

      <section id="motoristas" className="bg-gradient-to-br from-slate-50 to-emerald-50 px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-emerald-600">
            Para Motoristas
          </div>
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Vantagens para Motoristas Ecomovee
          </h2>
          <p className="mb-16 text-center text-lg text-gray-600">
            Maximize seus lucros e minimize seu impacto ambiental dirigindo conosco
          </p>

          {/* Main Value Proposition Card - Lado Esquerdo */}
          <div className="mb-16 grid gap-8 lg:grid-cols-2">
            {/* Main Value Proposition Card - Lado Esquerdo */}
            <div className="flex flex-col justify-center">
              <Card className="border-none bg-gradient-to-br from-emerald-600 to-emerald-700 shadow-2xl">
                <CardContent className="p-10 md:p-12">
                  <div className="mb-6 inline-flex rounded-2xl bg-white/20 p-4 backdrop-blur-sm">
                    <Shield className="h-14 w-14 text-white" />
                  </div>
                  <h3 className="mb-3 text-4xl font-bold leading-tight text-white md:text-5xl">100% DO VALOR É SEU!</h3>
                  <p className="mb-4 text-2xl font-semibold text-emerald-100">ZERO TAXAS por corrida</p>
                  <p className="text-lg leading-relaxed text-emerald-50">
                    Você fica com todo o valor das corridas. Sem comissões, sem taxas ocultas. Sua corrida, seu
                    dinheiro.
                  </p>
                  <div className="mt-8 flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                    <div className="text-3xl">💰</div>
                    <p className="text-sm font-medium text-white">
                      Enquanto outros cobram até 25% de taxa, você fica com 100%!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Benefits Grid - Lado Direito */}
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="border-emerald-200 bg-white/80 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-xl bg-emerald-100 p-3">
                    <Zap className="h-7 w-7 text-emerald-600" />
                  </div>
                  <h4 className="mb-3 text-xl font-bold text-gray-900">Economia Drástica</h4>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Reduza seus gastos com combustível em até 80% e economize com manutenções.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 bg-white/80 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-xl bg-purple-100 p-3">
                    <Shield className="h-7 w-7 text-purple-600" />
                  </div>
                  <h4 className="mb-3 text-xl font-bold text-gray-900">Incentivos Exclusivos</h4>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Programa de parceria e benefícios especiais para motoristas cadastrados.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 bg-white/80 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-xl bg-blue-100 p-3">
                    <ArrowRight className="h-7 w-7 text-blue-600" />
                  </div>
                  <h4 className="mb-3 text-xl font-bold text-gray-900">Experiência Premium</h4>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Dirija com mais conforto e receba avaliações melhores e gratificantes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 bg-white/80 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-xl">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-xl bg-orange-100 p-3">
                    <svg className="h-7 w-7 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h4 className="mb-3 text-xl font-bold text-gray-900">Suporte Rápido</h4>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Atendimento prioritário e suporte técnico sempre disponível.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Info Box */}
          <Card className="mb-8 border-2 border-emerald-300 bg-gradient-to-r from-emerald-50 to-blue-50">
            <CardContent className="flex items-start gap-4 p-6 md:p-8">
              <div className="rounded-xl bg-emerald-600 p-3 shadow-lg">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="mb-2 text-lg font-bold text-gray-900">📁 Receba um Folder Explicativo Completo</h4>
                <p className="leading-relaxed text-gray-700">
                  Ao fazer seu pré-cadastro, você receberá um folder detalhado com todas as informações sobre como
                  funciona a plataforma, vantagens exclusivas e o passo a passo para começar a dirigir.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button
              onClick={() => setIsDriverFormOpen(true)}
              size="lg"
              className="gap-2 bg-emerald-600 px-8 py-6 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-emerald-700 hover:shadow-xl"
            >
              Quero ser Motorista Parceiro
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          <p className="mt-4 text-center text-sm text-gray-500">🎯 Cadastre-se agora e receba seu folder explicativo</p>
        </div>
      </section>

      <section
        id="passageiros"
        className="bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 px-4 py-16 md:py-24"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-emerald-100">
            Para Passageiros
          </div>
          <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Viaje com Propósito: Escolha Ecomovee
          </h2>
          <p className="mb-16 text-center text-xl text-emerald-50">
            Sua escolha por um transporte mais limpo faz a diferença.
          </p>

          {/* Passenger Benefits Grid */}
          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Card Grande - Impacto Positivo */}
            <Card className="border-emerald-400/30 bg-white/95 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-2xl md:col-span-2 lg:col-span-1 lg:row-span-2">
              <CardContent className="flex h-full flex-col justify-between p-8">
                <div>
                  <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 p-4 shadow-lg">
                    <Leaf className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="mb-4 text-2xl font-bold text-gray-900">Impacto Positivo Direto</h4>
                  <p className="mb-6 leading-relaxed text-gray-700">
                    Cada viagem contribui para a redução da emissão de gases poluentes. Faça parte da mudança que o
                    planeta precisa.
                  </p>
                </div>
                <div className="rounded-xl bg-emerald-50 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="text-3xl font-bold text-emerald-600">85%</div>
                    <span className="text-sm text-gray-600">Redução de emissões</span>
                  </div>
                  <p className="text-xs text-gray-500">Comparado a veículos convencionais</p>
                </div>
              </CardContent>
            </Card>

            {/* Card Médio - Ar Mais Puro */}
            <Card className="border-emerald-400/30 bg-white/95 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-2xl">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 p-3 shadow-lg">
                  <TreePine className="h-8 w-8 text-white" />
                </div>
                <h4 className="mb-3 text-xl font-bold text-gray-900">Ar Mais Puro</h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  Ajude a melhorar a qualidade do ar que todos respiramos na cidade.
                </p>
              </CardContent>
            </Card>

            {/* Card Médio - Viagens Silenciosas */}
            <Card className="border-emerald-400/30 bg-white/95 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-2xl">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 p-3 shadow-lg">
                  <Volume2 className="h-8 w-8 text-white" />
                </div>
                <h4 className="mb-3 text-xl font-bold text-gray-900">Viagens Silenciosas</h4>
                <p className="text-sm leading-relaxed text-gray-600">
                  Desfrute de um trajeto mais tranquilo, livre do ruído dos motores.
                </p>
              </CardContent>
            </Card>

            {/* Card Largo - Sustentabilidade */}
            <Card className="border-emerald-400/30 bg-white/95 backdrop-blur-sm transition-all hover:scale-105 hover:shadow-2xl md:col-span-2">
              <CardContent className="flex flex-col gap-6 p-6 md:flex-row md:items-center">
                <div className="inline-flex rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 p-4 shadow-lg">
                  <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="mb-2 text-xl font-bold text-gray-900">Apoio à Sustentabilidade</h4>
                  <p className="leading-relaxed text-gray-600">
                    Incentive materiais que investem em tecnologias limpas e renováveis. Cada viagem é um voto por um
                    futuro melhor.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Brand Section with CTA */}
          <div className="rounded-2xl bg-white/10 p-8 backdrop-blur-md md:p-12">
            <div className="flex justify-center">
              <Button
                onClick={() => setIsPassengerFormOpen(true)}
                size="lg"
                className="gap-2 bg-white px-8 py-6 text-lg font-semibold text-emerald-600 shadow-xl transition-all hover:scale-105 hover:bg-emerald-50"
              >
                Quero usar Ecomovee
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>

            <p className="mt-6 text-center text-sm text-emerald-100">
              🌱 Cadastre-se antecipadamente e ganhe vantagens exclusivas
            </p>
          </div>
        </div>
      </section>

      <section id="sobre" className="bg-slate-900 px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Plataforma Global
          </div>
          <h2 className="mb-4 text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl text-balance">
            Uma plataforma integrada à maior rede de transporte sustentável
          </h2>
          <p className="mb-16 text-center text-lg text-gray-300">
            Conectamos motoristas de veículos elétricos a passageiros conscientes em todo o Brasil.
          </p>

          {/* Stats Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold text-emerald-400 md:text-6xl">85%</div>
              <p className="text-lg text-gray-300">Redução de emissões</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold text-emerald-400 md:text-6xl">10%</div>
              <p className="text-lg text-gray-300">Economia nos custos</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-5xl font-bold text-emerald-400 md:text-6xl">90%</div>
              <p className="text-lg text-gray-300">menos CO₂ por km rodado</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contato" className="bg-slate-950 px-4 py-12 text-gray-400">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Brand */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600">
                  <Car className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Ecomovee</span>
              </div>
              <p className="text-sm">Transporte sustentável para um futuro melhor.</p>
            </div>

            {/* Empresa */}
            <div>
              <h4 className="mb-4 font-semibold text-white">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-emerald-400">
                    Para Motoristas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400">
                    Para Passageiros
                  </a>
                </li>
              </ul>
            </div>

            {/* Suporte */}
            <div>
              <h4 className="mb-4 font-semibold text-white">Suporte</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-emerald-400">
                    suport@ecomovee.com.br
                  </a>
                </li>
              </ul>
            </div>

            {/* Redes Sociais */}
            <div>
              <h4 className="mb-4 font-semibold text-white">Redes Sociais</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-emerald-400">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-emerald-400">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2025 Ecomovee. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      <Dialog open={isDriverFormOpen} onOpenChange={setIsDriverFormOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-emerald-700">Cadastro de Motorista Parceiro</DialogTitle>
            <DialogDescription>
              Preencha o formulário abaixo para se tornar um motorista parceiro da Ecomovee. Você receberá todas as
              informações por e-mail.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleDriverFormSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="driver-name">Nome Completo *</Label>
              <Input id="driver-name" placeholder="Seu nome completo" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="driver-email">E-mail *</Label>
              <Input id="driver-email" type="email" placeholder="seu@email.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="driver-phone">Telefone/WhatsApp *</Label>
              <Input id="driver-phone" type="tel" placeholder="(00) 00000-0000" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="driver-city">Cidade *</Label>
              <Input id="driver-city" placeholder="Sua cidade" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="driver-vehicle">Tipo de Veículo</Label>
              <Input id="driver-vehicle" placeholder="Ex: Carro elétrico, híbrido..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="driver-message">Mensagem (opcional)</Label>
              <Textarea id="driver-message" placeholder="Conte-nos um pouco sobre você..." rows={3} />
            </div>
            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={() => setIsDriverFormOpen(false)} className="flex-1">
                Cancelar
              </Button>
              <Button type="submit" className="flex-1 bg-emerald-600 text-white hover:bg-emerald-700">
                Enviar Cadastro
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={isPassengerFormOpen} onOpenChange={setIsPassengerFormOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-emerald-700">Cadastro de Passageiro</DialogTitle>
            <DialogDescription>
              Faça seu pré-cadastro e seja um dos primeiros a usar a Ecomovee quando lançarmos em sua cidade!
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handlePassengerFormSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="passenger-name">Nome Completo *</Label>
              <Input id="passenger-name" placeholder="Seu nome completo" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="passenger-email">E-mail *</Label>
              <Input id="passenger-email" type="email" placeholder="seu@email.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="passenger-phone">Telefone/WhatsApp *</Label>
              <Input id="passenger-phone" type="tel" placeholder="(00) 00000-0000" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="passenger-city">Cidade *</Label>
              <Input id="passenger-city" placeholder="Sua cidade" required />
            </div>
            <div className="rounded-lg bg-emerald-50 p-4">
              <p className="text-sm text-emerald-800">
                🎁 Ao se cadastrar antecipadamente, você ganhará descontos exclusivos nas suas primeiras viagens!
              </p>
            </div>
            <div className="flex gap-3 pt-4">
              <Button type="button" variant="outline" onClick={() => setIsPassengerFormOpen(false)} className="flex-1">
                Cancelar
              </Button>
              <Button type="submit" className="flex-1 bg-emerald-600 text-white hover:bg-emerald-700">
                Confirmar Cadastro
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
