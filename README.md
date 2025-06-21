# Agentic RAG

Um sistema de **RAG (Retrieval-Augmented Generation)** baseado em agentes que utiliza a plataforma Langbase para criar uma base de conhecimento inteligente e responder consultas com contexto relevante.

## 📋 Sobre o Projeto

Este projeto implementa um sistema de IA que combina:

- **Memória de IA**: Armazenamento de documentos e conhecimento
- **Agente de Recuperação**: Busca informações relevantes na base de conhecimento
- **Agente de Suporte**: Gera respostas contextualizadas baseadas nas informações recuperadas

O sistema é ideal para criar assistentes de IA que podem responder perguntas baseadas em documentos específicos, mantendo precisão e rastreabilidade das fontes.

## 🚀 Funcionalidades

- ✅ Upload de documentos para base de conhecimento
- ✅ Recuperação inteligente de informações relevantes
- ✅ Geração de respostas contextualizadas
- ✅ Citação automática de fontes
- ✅ Sistema de agentes paralelos
- ✅ Integração com Langbase

## 📦 Instalação

1. **Clone o repositório:**

```bash
git clone https://github.com/mauFade/agentic-rag
cd agentic-rag
```

2. **Instale as dependências:**

```bash
yarn install
```

3. **Configure as variáveis de ambiente:**

```bash
cp .env.example .env
```

Edite o arquivo `.env` e adicione sua chave da API do Langbase:

```env
LANGBASE_API_KEY=your_api_key
```

## 🔧 Configuração Inicial

Antes de usar o sistema, você precisa configurar a base de conhecimento:

### 1. Criar a Memória de IA

```bash
yarn ts-node create-memory.ts
```

### 2. Criar o Agente de Suporte

```bash
yarn ts-node create-pipe.ts
```

### 3. Fazer Upload dos Documentos

```bash
yarn ts-node upload-docs.ts
```

## 📖 Como Usar

### Execução Principal

Para executar o sistema completo com uma consulta:

```bash
yarn ts-node index.ts
```

O arquivo `index.ts` contém um exemplo de uso:

```typescript
const query = "What is agent parallelization?";
const chunks = await runMemoryAgent(query);
const completion = await runAiSupportAgent({ chunks, query });
```

### Scripts Disponíveis

| Script             | Descrição                                  |
| ------------------ | ------------------------------------------ |
| `create-memory.ts` | Cria a memória de IA no Langbase           |
| `create-pipe.ts`   | Cria o agente de suporte                   |
| `upload-docs.ts`   | Faz upload dos documentos da pasta `docs/` |
| `index.ts`         | Executa o sistema completo                 |

## 🏗️ Arquitetura

O projeto está organizado em módulos específicos:

### `agents.ts`

Contém os dois agentes principais:

- **`runMemoryAgent`**: Recupera informações relevantes da base de conhecimento
- **`runAiSupportAgent`**: Gera respostas baseadas no contexto recuperado

### `create-memory.ts`

Configura a memória de IA no Langbase com modelo de embedding.

### `create-pipe.ts`

Cria o agente de suporte com prompt personalizado.

### `upload-docs.ts`

Faz upload automático dos documentos da pasta `docs/` para a base de conhecimento.

## 📁 Estrutura de Arquivos

```
agentic-rag/
├── agents.ts          # Agentes principais do sistema
├── create-memory.ts   # Criação da memória de IA
├── create-pipe.ts     # Criação do agente de suporte
├── upload-docs.ts     # Upload de documentos
├── index.ts          # Execução principal
├── docs/             # Documentos da base de conhecimento
│   ├── architechture-agent.txt
│   └── langbase-faq.txt
└── package.json
```

## 🔑 Configuração da API

Para obter sua chave da API do Langbase:

1. Acesse [Langbase](https://langbase.com)
2. Crie uma conta ou faça login
3. Vá para as configurações da API
4. Copie sua chave de API
5. Adicione no arquivo `.env`

## 📝 Personalização

### Adicionando Novos Documentos

1. Coloque seus documentos na pasta `docs/`
2. Modifique `upload-docs.ts` para incluir os novos arquivos
3. Execute `yarn ts-node upload-docs.ts`

### Modificando Prompts

Edite o `systemPrompt` em `agents.ts` para personalizar o comportamento do agente.

### Ajustando Recuperação

Modifique o parâmetro `topK` em `runMemoryAgent` para controlar quantos chunks são recuperados.

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Autor

**Mauricio Cardoso** - [mauricio.cds00@gmail.com](mailto:mauricio.cds00@gmail.com)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!
