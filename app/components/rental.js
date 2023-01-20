import Component from '@glimmer/component';
export default class RentalComponent extends Component {
  get key() {
    return Math.round(Math.random() * 10) % 2 === 0;
  }
}
