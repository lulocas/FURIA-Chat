# FURIA - Chatbot Inteligente

## 📚 Descrição
**FURIA** é um chatbot desenvolvido para facilitar interações automatizadas e oferecer suporte personalizado aos usuários. Criado utilizando o Dialogflow, o projeto é projetado para entender e responder a mensagens de forma inteligente e natural. Ele pode ser integrado a diferentes plataformas e adaptado para diversas aplicações, como atendimento ao cliente, FAQs automatizadas, ou suporte interno.

## 🚀 Funcionalidades
- Processamento de linguagem natural para entender perguntas em **português (pt-BR)**.
- Respostas dinâmicas utilizando a API do Dialogflow.
- Fluxos de conversa configuráveis e personalizáveis.
- Suporte a entidades personalizadas para maior precisão.
- Design responsivo e interativo.

## 🛠️ Tecnologias Utilizadas
- **Frontend:** JavaScript, HTML, CSS e Bootstrap.
- **Backend/API:** Dialogflow API v2.
- **Plataforma:** Google Cloud Platform (GCP).

## ⚙️ Pré-requisitos
Antes de rodar o projeto, certifique-se de ter:
1. Uma conta configurada no **Google Cloud Platform (GCP)** com a API do Dialogflow ativada.
2. As credenciais de uma conta de serviço (arquivo JSON) configuradas.
3. Um **Access Token** válido para autenticação nas chamadas da API.

## 📦 Como Configurar e Executar
### 1. Clone o repositório:
```bash
git clone https://github.com/lulocas/FURIA-Chat.git
cd FURIA-Chat
```

### 2. Configure as Credenciais:
1. Acesse o OAuth 2.0 Playground:

- Abra este link no navegador: OAuth 2.0 Playground.

2. Configuração Inicial:

- No canto superior direito, clique em "Configuration".

- Insira suas credenciais da API. Coloque o Client ID e o Client Secret da sua conta no Google Cloud.
(Me envie um email solicitando a criação de uma credencial)

- Clique em Close para salvar.

3. Selecione os Escopos da API:

- Na seção "Step 1", selecione os escopos necessários para o seu projeto. Por exemplo: https://www.googleapis.com/auth/dialogflow.

- Clique em Authorize APIs.

4. Autorize o Acesso:

- Você será redirecionada para a tela de login do Google.

- Faça login com a conta associada ao projeto.

5. Troque o Código de Autorização pelo Access Token:

- Após autorizar, um Authorization Code será gerado automaticamente.

- Na seção "Step 2", clique em Exchange authorization code for tokens.

6. Visualize o Access Token:

- Depois que o token for gerado, ele será exibido na seção "Step 3".

- O Access Token e o Refresh Token estarão disponíveis para uso.

7. Troque o token no código:
   
- Adicione o token no código como variável de ambiente.
```bash
headers: {
                        Authorization: `Bearer TOKEN_DE_ACESSO`,
                        'Content-Type': 'application/json'
                    }
```

### 3. Teste o Chatbot:
Interaja com o chatbot e valide as respostas. Ajuste intenções ou entidades no Dialogflow, se necessário.

## 📝 Contribuições
Sinta-se à vontade para contribuir com o projeto! Sugestões, relatórios de bugs e pull requests são bem-vindos. Siga estes passos:

1. Crie um fork do projeto.

2. Faça suas alterações em uma branch específica.

3. Envie um pull request explicando as alterações feitas.

## ❗ Avisos de Segurança
Este projeto utiliza tokens de autenticação sensíveis. Certifique-se de nunca incluir esses tokens diretamente no código ou enviá-los para repositórios públicos.

## 📩 Contato
Desenvolvedora: Luísa de Andrade Deschamps

LinkedIn: https://www.linkedin.com/in/luisa-deschamps-404a35311/

E-mail: andradeps434@gmail.com
