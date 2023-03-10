import Component from '@glimmer/component';
import ENV from 'super-rentals/config/environment';

const MAPBOX_API = 'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';
export default class MapComponent extends Component {
  get src() {
    const { lng, lat, width, height, zoom } = this.args;

    const coordinates = lng + ',' + lat + ',' + zoom;
    const dimensions = width + 'x' + height;
    const access_token = 'access_token=' + this.token;

    return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${access_token}`;
  }

  get token() {
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }
}
