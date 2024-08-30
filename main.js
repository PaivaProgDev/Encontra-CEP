async function buscarCep() {
   const inputValue = document.querySelector('#insert-cep-input').value;

   if (inputValue.length === 8) {
      const urlApi = `https://brasilapi.com.br/api/cep/v1/${inputValue}`;

      const api = await fetch(urlApi);
      const data = await api.json();

      const messageCep = document.querySelector('.message-cep');
      messageCep.classList.remove('message-active');

      if (inputValue !== data.cep) {
         messageCep.classList.add('message-active');

         document.querySelector('.estado p').innerHTML = '';
         document.querySelector('.rua p').innerHTML = '';
         document.querySelector('.bairro p').innerHTML = '';
         document.querySelector('.cidade p').innerHTML = '';

         return;
      }

      document.querySelector('.estado p').innerHTML = data.state;
      document.querySelector('.rua p').innerHTML = data.street;
      document.querySelector('.bairro p').innerHTML = data.neighborhood;
      document.querySelector('.cidade p').innerHTML = data.city;
   }
};

const themeMode = () => {
   document.querySelector('body').classList.toggle('dark-mode');
};