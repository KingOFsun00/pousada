# Pousada Bistrô Savacipo

Um refúgio de tranquilidade na Serra do Cipó com hospedagem premium e gastronomia requintada.

## 🚀 Deploy no GitHub Pages

Este projeto está configurado para ser deployado automaticamente no GitHub Pages.

### Configuração Inicial

1. **Fork ou clone este repositório**
2. **Atualize a URL no `_config.yml`**:
   ```yaml
   url: "https://SEU-USUARIO.github.io"
   baseurl: "/pousada"
   ```
   Substitua `SEU-USUARIO` pelo seu nome de usuário do GitHub.

3. **Ative o GitHub Pages**:
   - Vá para Settings > Pages
   - Source: "GitHub Actions"

### Deploy Automático

O projeto usa GitHub Actions para deploy automático. A cada push para a branch `main`, o site será automaticamente buildado e deployado.

### Deploy Manual

Para fazer deploy manual:

```bash
# Instalar dependências
npm install

# Build para GitHub Pages
npm run build:gh-pages

# Os arquivos estarão na pasta `out/`
```

### Scripts Disponíveis

- `npm run dev` - Desenvolvimento local
- `npm run build` - Build para produção
- `npm run build:gh-pages` - Build otimizado para GitHub Pages
- `npm run deploy` - Deploy para GitHub Pages

### Estrutura do Projeto

```
pousada/
├── app/                    # Páginas Next.js
├── components/             # Componentes React
├── public/                # Arquivos estáticos
├── styles/                # Estilos CSS
├── .github/workflows/     # GitHub Actions
└── scripts/               # Scripts de build
```

### Tecnologias

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Radix UI** - Componentes acessíveis
- **NextAuth.js** - Autenticação

### Configurações Especiais

- **Static Export**: Configurado para exportação estática
- **Base Path**: Configurado para `/pousada`
- **Trailing Slash**: Habilitado para compatibilidade
- **Images**: Configuradas como unoptimized para static export

### Troubleshooting

1. **Erro 404**: Verifique se o `basePath` está correto no `next.config.mjs`
2. **Imagens não carregam**: Verifique se estão na pasta `public/`
3. **Build falha**: Execute `npm run build:gh-pages` localmente para debug

### Links Úteis

- [GitHub Pages](https://pages.github.com/)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Actions](https://docs.github.com/en/actions)
