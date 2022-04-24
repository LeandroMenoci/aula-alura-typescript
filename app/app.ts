import { NegociacoesView } from './views/negociacoes-view';
import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController()
const form = document.querySelector('.form')
if (form) {
  form.addEventListener('submit', (event: any) => {
    event.preventDefault()
    controller.adiciona()
  })
} else {
  throw Error('Não foi possivel iniciar a aplicação, verifique se o form existe.')
}


