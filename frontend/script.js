const API_URL_EQUIP = 'http://localhost:8080/api/equipamentos';
const API_URL_COLAB = 'http://localhost:8080/api/colaboradores';

document.addEventListener('DOMContentLoaded', () => {
    loadEquipamentos();
    carregarColaboradores();
});

// --- FUNÇÕES DE MODAL ---
function abrirColaboradorModal() {
    document.getElementById('colaborador-modal').classList.remove('hidden');
}

function fecharColaboradorModal() {
    document.getElementById('colaborador-modal').classList.add('hidden');
    document.getElementById('colaborador-form').reset();
}

// --- LÓGICA DE COLABORADORES ---

document.getElementById('colaborador-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const novoColaborador = {
        nome: document.getElementById('colab-nome').value,
        departamento: document.getElementById('colab-depto').value,
        email: document.getElementById('colab-email').value
    };

    try {
        const response = await fetch(API_URL_COLAB, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(novoColaborador)
        });

        if (response.ok) {
            fecharColaboradorModal();
            carregarColaboradores(); // Atualiza a lista de seleção
            alert("Colaborador cadastrado!");
        }
    } catch (error) {
        console.error("Erro ao salvar colaborador:", error);
    }
});

async function carregarColaboradores() {
    try {
        const response = await fetch(API_URL_COLAB);
        const colaboradores = await response.json();
        const select = document.getElementById('colaborador-select');
        
        select.innerHTML = '<option value="">Nenhum (Disponível no estoque)</option>' + 
            colaboradores.map(c => `<option value="${c.id}">${c.nome} (${c.departamento})</option>`).join('');
    } catch (error) {
        console.error("Erro ao buscar colaboradores:", error);
    }
}

// --- LÓGICA DE EQUIPAMENTOS ---

document.getElementById('asset-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const colabId = document.getElementById('colaborador-select').value;

    const newAsset = {
        nome: document.getElementById('name').value,
        tipo: document.getElementById('type').value,
        numeroSerie: document.getElementById('serial').value,
        status: colabId ? 'Em Uso' : 'Disponível',
        colaborador: colabId ? { id: parseInt(colabId) } : null
    };

    try {
        const response = await fetch(API_URL_EQUIP, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newAsset)
        });

        if (response.ok) {
            loadEquipamentos();
            this.reset();
            document.getElementById('modal').classList.add('hidden');
        }
    } catch (error) {
        console.error("Erro ao salvar equipamento:", error);
    }
});

async function loadEquipamentos() {
    try {
        const response = await fetch(API_URL_EQUIP);
        const assets = await response.json();
        
        const table = document.getElementById('inventory-table');
        table.innerHTML = assets.map((asset) => `
            <tr class="hover:bg-gray-50 transition">
                <td class="px-6 py-4 font-medium text-gray-900">${asset.nome}</td>
                <td class="px-6 py-4 text-gray-600">${asset.tipo}</td>
                <td class="px-6 py-4 text-gray-600 font-mono text-xs">${asset.numeroSerie}</td>
                <td class="px-6 py-4 text-gray-600">
                    ${asset.colaborador ? asset.colaborador.nome : '<span class="text-gray-400italic text-sm">Estoque</span>'}
                </td>
                <td class="px-6 py-4">
                    <span class="px-2 py-1 text-xs rounded-full ${asset.colaborador ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}">
                        ${asset.status}
                    </span>
                </td>
            </tr>
        `).join('');
    } catch (error) {
        console.error("Erro ao buscar equipamentos:", error);
    }
}