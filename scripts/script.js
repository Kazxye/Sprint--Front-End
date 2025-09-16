    // Função para inicializar ícones Lucide de forma segura
    function initLucideIcons() {
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      } else {
        // Fallback: tentar novamente após um delay
        setTimeout(initLucideIcons, 500);
      }
    }
    
    // Função para transição entre páginas
    function transitionToMain() {
      const intro = document.getElementById('intro');
      const main = document.getElementById('main');
      
      // Adiciona animação de saída à página intro
      intro.classList.add('animate-slide-out');
      
      // Após a animação de saída, mostra a página principal
      setTimeout(() => {
        intro.classList.add('hidden');
        main.classList.remove('hidden');
        main.classList.add('animate-slide-in');
        
        // Inicializa os ícones Lucide após mostrar a página
        initLucideIcons();
      }, 1000);
    }
    
    // Função para mostrar a página de pesquisa
    function showSearch() {
      const main = document.getElementById('main');
      const messages = document.getElementById('messages');
      const search = document.getElementById('search');
      
      main.classList.add('hidden');
      messages.classList.add('hidden');
      search.classList.remove('hidden');
      search.classList.add('animate-slide-in');
      
      // Inicializa os ícones Lucide na página de pesquisa
      initLucideIcons();
    }
    
    // Função para mostrar a página de mensagens
    function showMessages() {
      const main = document.getElementById('main');
      const search = document.getElementById('search');
      const messages = document.getElementById('messages');
      
      main.classList.add('hidden');
      search.classList.add('hidden');
      messages.classList.remove('hidden');
      messages.classList.add('animate-slide-in');
      
      // Inicializa os ícones Lucide na página de mensagens
      initLucideIcons();
    }
    
    // Função para voltar à página principal
    function showMain() {
      const messages = document.getElementById('messages');
      const search = document.getElementById('search');
      const main = document.getElementById('main');
      
      messages.classList.add('hidden');
      search.classList.add('hidden');
      main.classList.remove('hidden');
      main.classList.add('animate-slide-in');
      
      // Inicializa os ícones Lucide na página principal
      initLucideIcons();
    }
    
    // Inicia a transição após 4.5 segundos (após todas as animações da intro)
    setTimeout(() => {
      transitionToMain();
    }, 4500);
    
    // Opcional: permite pular clicando na tela
    document.getElementById('intro').addEventListener('click', () => {
      transitionToMain();
    });
    
    // Inicializa os ícones Lucide quando a página carrega
    window.addEventListener('load', function() {
      initLucideIcons();
    });