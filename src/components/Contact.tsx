import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase'; // importação do supabase

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação dos campos obrigatórios
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erro de Validação",
        description: "Preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Salvar dados no Supabase
    const { error } = await supabase.from('contacts').insert([formData]);

    if (error) {
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro ao salvar a mensagem.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Montar link do WhatsApp
    const whatsappNumber = '5569992476425'; // sem "+" ou espaços
    const whatsappMessage = encodeURIComponent(
      `Novo contato via site:\n\nNome: ${formData.name}\nEmail: ${formData.email}\nAssunto: ${formData.subject}\nMensagem: ${formData.message}`
    );
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    // Abrir WhatsApp numa nova aba
    window.open(whatsappURL, '_blank');

    // Notificar sucesso e limpar formulário
    toast({
      title: "Mensagem enviada",
      description: "Você será redirecionado ao WhatsApp.",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-dark-light relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-10 w-48 h-48 rounded-full bg-neon-blue/5 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/5 w-32 h-32 rounded-full bg-neon-blue/10 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">Entre em contato</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
           Tem uma pergunta ou quer trabalhar em conjunto? Preencha o formulário abaixo e eu vou entrar em contato com você o mais breve possível.
          </p>
        </div>

        <div className="max-w-3xl mx-auto glass-card p-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-white">Seu Nome<span className="text-neon-blue">*</span></label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Lucas Amourin"
                  className="bg-dark-medium border-neon-blue/20 text-white"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-white">Seu E-mail <span className="text-neon-blue">*</span></label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="lucasamourin@exemplo.com"
                  className="bg-dark-medium border-neon-blue/20 text-white"
                  required
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="subject" className="text-white">Assunto</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Projeto e-commerce"
                  className="bg-dark-medium border-neon-blue/20 text-white"
                />
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="message" className="text-white">Menssagem <span className="text-neon-blue">*</span></label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Conte-me sobre seu projeto..."
                  className="bg-dark-medium border-neon-blue/20 text-white min-h-[150px]"
                  required
                />
              </div>
            </div>
            
            <div className="flex justify-center">
              <Button
                type="submit"
                className="neon-button px-8 py-6 rounded-md text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Menssagem'}
              </Button>
            </div>
          </form>
        </div>

        <div className="max-w-3xl mx-auto mt-16 flex flex-wrap justify-center gap-6">
          <a href="mailto:douglascode2025@gmail.com" className="flex items-center gap-2 text-white hover:text-neon-blue transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            douglascode2025@gmail.com
          </a>
          <a href="tel:+5569992476425" className="flex items-center gap-2 text-white hover:text-neon-blue transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +55 (69) 99247-6425
          </a>
          <a href="#" className="flex items-center gap-2 text-white hover:text-neon-blue transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Porto Velho, RO
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
