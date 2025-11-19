document.addEventListener('DOMContentLoaded', () => {
    
    // --- Dados Focados no PARANÁ (Locais - 15 Itens) ---
    // O campo 'coords' armazena o endereço/query de busca para o Google Maps.
    const locaisParana = [
        // --- Locais Iniciais (5) ---
        {
            nome: "Bar do Plets",
            tipo: "Bar/Ponto de Encontro",
            cidade: "Francisco Beltrão", 
            detalhe: "Local conhecido por receber público alternativo, incluindo a cena rock/gótica local.",
            coords: "Rua Florianópolis, 155 - Centro, Francisco Beltrão - PR, 85601-560" 
        },
        {
            nome: "Bar do Mafuá",
            tipo: "Bar/Ponto de Encontro",
            cidade: "Francisco Beltrão", 
            detalhe: "Outro ponto cultural importante para a comunidade alternativa do sudoeste do Paraná.",
            coords: "Rua Octaviano Teixeira dos Santos, 940 - Centro, Francisco Beltrão - PR, 85601-030" 
        },
        {
            nome: "Feira da XV",
            tipo: "Feira/Evento de Acessórios",
            cidade: "Curitiba", 
            detalhe: "Ponto de encontro e venda de itens alternativos e góticos no centro.",
            coords: "Praça Santos Andrade, Curitiba - PR" 
        },
        {
            nome: "Bar Underground",
            tipo: "Casa Noturna/Bar",
            cidade: "Londrina", 
            detalhe: "Frequentemente palco para eventos e bandas de Pós-Punk/Goth.",
            coords: "Rua Exemplo Alternativa, 1500, Londrina - PR" 
        },
        {
            nome: "Estúdio Tatuagem Noir",
            tipo: "Tatuagem/Piercing",
            cidade: "Maringá", 
            detalhe: "Especializado em estética sombria, dark e gótica.",
            coords: "Avenida Centro Rock, 2500, Maringá - PR" 
        },

        // --- Novos Locais (10) - Cabeleireiros e Tatuadores ---
        {
            nome: "Salão Cabelos Negros",
            tipo: "Cabeleireiro/Estética",
            cidade: "Curitiba", 
            detalhe: "Especialista em cortes assimétricos, coloração intensa e manutenção de cabelos pretos/escuros.",
            coords: "Rua Cabelos Pretos, 113, Centro, Curitiba - PR" 
        },
        {
            nome: "Estúdio Vênus Sombria",
            tipo: "Tatuagem/Piercing",
            cidade: "Curitiba", 
            detalhe: "Foco em tatuagens em estilo Dark Art, Blackwork e temas ocultistas.",
            coords: "Alameda Escura, 666, São Francisco, Curitiba - PR" 
        },
        {
            nome: "Barbearia e Estética Dark",
            tipo: "Cabeleireiro/Barbearia",
            cidade: "Londrina", 
            detalhe: "Serviços voltados para o público alternativo, com decoração e trilha sonora temática.",
            coords: "Rua Londrina Alternativa, 202, Zona Leste, Londrina - PR" 
        },
        {
            nome: "Ponta Grossa Ink Vandal",
            tipo: "Tatuagem/Estúdio",
            cidade: "Ponta Grossa", 
            detalhe: "Estúdio de tatuagem focado em temas de subcultura e arte sombria.",
            coords: "Rua Ponta Grossa Rock, 50, Centro, Ponta Grossa - PR" 
        },
        {
            nome: "Corte Gótico Vintage",
            tipo: "Cabeleireiro/Salão",
            cidade: "Maringá", 
            detalhe: "Técnicas de penteados e cortes inspirados na moda gótica vitoriana e batcave.",
            coords: "Avenida Maringá Vintage, 404, Zona 01, Maringá - PR" 
        },
        {
            nome: "Stúdio Agulha e Sombra",
            tipo: "Tatuagem/Piercing",
            cidade: "Cascavel", 
            detalhe: "Local com portfólio especializado em retratos sombrios e geometria dark.",
            coords: "Rua Sombria, 88, Cascavel - PR" 
        },
        {
            nome: "Foz Estética Alternativa",
            tipo: "Cabeleireiro/Estética",
            cidade: "Foz do Iguaçu", 
            detalhe: "Atendimento completo para maquiagem e cabelo, frequentemente parceiro em eventos de RPG e Cosplay Dark.",
            coords: "Avenida Foz Alternativa, 99, Centro, Foz do Iguaçu - PR" 
        },
        {
            nome: "Tatuaria Altar",
            tipo: "Tatuagem/Estúdio",
            cidade: "São José dos Pinhais", 
            detalhe: "Estúdio renomado na região metropolitana com artistas focados em temáticas góticas.",
            coords: "Rua do Altar, 101, São José dos Pinhais - PR" 
        },
        {
            nome: "Emoções e Cabelos Pretos",
            tipo: "Cabeleireiro/Estética",
            cidade: "Colombo", 
            detalhe: "Ponto de referência para cortes e cores ousadas na região de Colombo.",
            coords: "Rua Colombo Dark, 77, Colombo - PR" 
        },
        {
            nome: "Guarapuava P&B Tattoos",
            tipo: "Tatuagem/Estúdio",
            cidade: "Guarapuava", 
            detalhe: "Estúdio especializado em Blackwork e Fine Line de alta qualidade.",
            coords: "Rua P&B, 303, Guarapuava - PR" 
        }
    ];

    // --- Função para Renderizar Locais (e adicionar evento de clique Google Maps) ---
    const mapPlaceholder = document.getElementById('map-placeholder');

    function renderLocais() {
        mapPlaceholder.innerHTML = ''; 

        locaisParana.forEach(local => {
            const div = document.createElement('div');
            div.classList.add('map-item');
            div.innerHTML = `
                <h3>${local.nome} (${local.cidade})</h3>
                <p>Tipo: ${local.tipo}</p>
                <p>${local.detalhe}</p>
                <a href="#" class="map-link" data-coords="${local.coords}">// Ver no Mapa</a>
            `;
            mapPlaceholder.appendChild(div);
        });
        
        // Adiciona Event Listener para o Google Maps
        document.querySelectorAll('.map-link').forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault(); 
                const query = event.target.getAttribute('data-coords'); // Captura o endereço
                
                if (query) {
                    // Abre o Google Maps buscando pela query (endereço)
                    const encodedQuery = encodeURIComponent(query);
                    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;
                    window.open(mapUrl, '_blank'); 
                }
            });
        });
    }

    // --- FUNCIONALIDADE DE ÁUDIO ---
    const logoElement = document.getElementById('logo-img');
    const audio = document.getElementById('background-audio');
    
    // Adiciona o event listener na logo
    if (logoElement && audio) {
        logoElement.style.cursor = 'pointer'; // Indica que é clicável
        
        // Variável para rastrear o estado de reprodução
        let isPlaying = false; 

        logoElement.addEventListener('click', () => {
            if (isPlaying) {
                audio.pause();
                console.log('Música Pausada.');
            } else {
                // Tenta iniciar a reprodução. Navegadores modernos só permitem após interação.
                audio.play().then(() => {
                    console.log('Música Iniciada.');
                }).catch(error => {
                    // Trata o erro caso o navegador ainda impeça a reprodução
                    console.error('Falha ao iniciar áudio:', error);
                });
            }
            isPlaying = !isPlaying; // Inverte o estado
        });
    }

    // --- Inicialização ---
    renderLocais(); 
});