#!/bin/bash

echo "🚀 Iniciando build para GitHub Pages..."

# Limpar diretório de saída
rm -rf out

# Build do Next.js
echo "📦 Executando build do Next.js..."
npm run build

# Verificar se o build foi bem-sucedido
if [ $? -eq 0 ]; then
    echo "✅ Build concluído com sucesso!"
    echo "📁 Arquivos gerados em: ./out"
    echo "🌐 Pronto para deploy no GitHub Pages!"
    
    # Listar arquivos principais
    echo ""
    echo "📋 Arquivos principais gerados:"
    ls -la out/
    
    if [ -f "out/index.html" ]; then
        echo "✅ index.html criado com sucesso!"
    else
        echo "❌ Erro: index.html não foi criado!"
        exit 1
    fi
else
    echo "❌ Erro no build!"
    exit 1
fi
