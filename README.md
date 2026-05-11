# 💻 IT Asset Manager

Um sistema Fullstack para gestão de ativos de TI e controle de equipamentos corporativos, desenvolvido com foco em performance e integridade de dados relacionais.

## 🎯 O Projeto
Este sistema resolve o problema de rastreabilidade de hardware dentro de uma empresa. Ele permite o cadastro de equipamentos e a atribuição destes ativos aos colaboradores de diferentes departamentos, garantindo que o setor de TI saiba exatamente com quem está cada máquina.

### ✨ Funcionalidades
- **Gestão de Equipamentos:** Cadastro completo com Número de Série, Categoria e Status.
- **Gestão de Colaboradores:** Cadastro de funcionários por departamento (RH, TI, Financeiro, etc).
- **Rastreabilidade (Relacionamento):** Vínculo dinâmico entre o equipamento e o colaborador (`@ManyToOne`), atualizando o status do ativo para "Em Uso" ou "Estoque" de forma automática.
- **Interface Responsiva:** Frontend limpo e intuitivo criado com Tailwind CSS.

## 🛠️ Tecnologias Utilizadas

**Backend:**
- Java 21
- Spring Boot 3
- Spring Data JPA / Hibernate (Mapeamento Objeto-Relacional)
- MySQL (Banco de Dados)
- Maven

**Frontend:**
- HTML5 & CSS3
- JavaScript (Fetch API)
- Tailwind CSS

## 🚀 Como executar o projeto localmente

### Pré-requisitos
- [Java JDK 21+](https://www.oracle.com/java/technologies/downloads/)
- Banco de Dados MySQL (pode utilizar o XAMPP)

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/SEU_USUARIO/it-asset-manager.git](https://github.com/SEU_USUARIO/it-asset-manager.git)
