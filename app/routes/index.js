import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];
export default class IndexRoute extends Route {
  async model() {
    let response = await fetch('/api/rentals.json');
    let { data } = await response.json();

    return data.map((model) => {
      const { attributes } = model;

      return COMMUNITY_CATEGORIES.includes(attributes.category)
        ? { type: 'Community', ...attributes }
        : { type: 'Standalone', ...attributes };
    });
  }
}
