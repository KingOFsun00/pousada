# 🏨 Pousada Bistrô Savacipo

[![Deploy to GitHub Pages](https://github.com/seu-usuario/pousada-savacipo/actions/workflows/deploy.yml/badge.svg)](https://github.com/seu-usuario/pousada-savacipo/actions/workflows/deploy.yml)

Site oficial da **Pousada Bistrô Savacipo**, localizada na Serra do Cipó, MG.

## 🌐 Site Online

**Acesse:** [https://seu-usuario.github.io/pousada-savacipo](https://seu-usuario.github.io/pousada-savacipo)

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones modernos
- **GitHub Pages** - Hospedagem gratuita

## 📱 Funcionalidades

- ✅ Design responsivo e moderno
- ✅ Tema claro/escuro
- ✅ Sistema de autenticação
- ✅ Formulários de contato e reserva
- ✅ Galeria de imagens interativa
- ✅ Dashboard do usuário
- ✅ Cálculo automático de preços
- ✅ Navegação suave e animações
- ✅ SEO otimizado

## 🛠️ Desenvolvimento Local

1. **Clone o repositório:**
\`\`\`bash
git clone https://github.com/seu-usuario/pousada-savacipo.git
cd pousada-savacipo
\`\`\`

2. **Instale as dependências:**
\`\`\`bash
npm install
\`\`\`

3. **Execute em desenvolvimento:**
\`\`\`bash
npm run dev
\`\`\`

4. **Acesse:** [http://localhost:3000](http://localhost:3000)

## 🚀 Deploy no GitHub Pages

### Configuração Automática (Recomendado)

1. **Fork este repositório**
2. **Vá em Settings > Pages**
3. **Selecione "GitHub Actions" como source**
4. **O deploy será automático a cada push na branch `main`**

### Deploy Manual

\`\`\`bash
# Build e export
npm run build

# Deploy manual (se configurado gh-pages)
npm run deploy
\`\`\`

## 📂 Estrutura do Projeto

\`\`\`
├── app/                     # App Router (Next.js 14)
│   ├── page.tsx            # Página inicial
│   ├── quartos/            # Página de quartos
│   ├── reserva/            # Sistema de reservas
│   ├── contato/            # Página de contato
│   ├── login/              # Sistema de login
│   ├── dashboard/          # Dashboard do usuário
│   └── layout.tsx          # Layout principal
├── components/             # Componentes React
│   ├── navigation.tsx      # Navegação principal
│   ├── footer.tsx         # Rodapé
│   ├── hero.tsx           # Seção hero
│   └── ...                # Outros componentes
├── lib/                   # Utilitários
│   ├── simple-auth.ts     # Sistema de autenticação
│   └── github-pages.ts    # Helpers para GitHub Pages
├── public/                # Arquivos estáticos
│   ├── images/            # Imagens do site
│   └── .nojekyll          # Configuração GitHub Pages
└── .github/workflows/     # GitHub Actions
    └── deploy.yml         # Workflow de deploy
\`\`\`

## 🔐 Sistema de Autenticação

**Credenciais de teste:**

**Cliente:**
- E-mail: `cliente@email.com`
- Senha: `123456`

**Administrador:**
- E-mail: `admin@pousadasavacipo.com.br`
- Senha: `admin123`

## 🎨 Personalização

### Cores do Tema
\`\`\`css
:root {
  --primary-color: #5d4037;    /* Marrom escuro */
  --secondary-color: #8d6e63;  /* Marrom médio */
  --accent-color: #d7ccc8;     /* Bege claro */
  --light-color: #efebe9;      /* Creme */
  --dark-color: #3e2723;       /* Marrom muito escuro */
}
\`\`\`

### Fontes
- **Playfair Display** - Títulos e elementos decorativos
- **Montserrat** - Texto corpo e navegação

## 📞 Contato

- **Telefone:** (31) 98888-0727
- **Email:** contato@pousadasavacipo.com.br
- **Endereço:** Serra do Cipó, Jaboticatubas - MG
- **Instagram:** [@bistro_pousada_savacipo](https://www.instagram.com/bistro_pousada_savacipo/)

## 📄 Licença

Este projeto é propriedade da Pousada Bistrô Savacipo. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para a Pousada Bistrô Savacipo**
