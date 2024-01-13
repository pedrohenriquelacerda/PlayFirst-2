export default {
  number: 1,
  notification: "Bem vindo(a) ao tabuleiro :D Comece selecionando uma opção para andar",
  isPowerUp: true,
  options: [
    {
      number: 1,
      button: {
        text: 'Bloco 1',
        solution: {
          visible: false,
          board: 2,
        }
      },
    },
    {
      number: 2,
      button: {
        text: 'Bloco 2',
        solution: {
          visible: false,
          board: 7,
        }
      },
    },
    {
      number: 3,
      button: {
        text: 'Bloco 3',
        solution: {
          visible: false,
          board: 3,
        },
      },
    },
  ]
}