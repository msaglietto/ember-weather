import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeQueryResponse(store, primaryModelClass, payload) {
    return {
      data: payload.list.map(item => {
        return {
          id: item.id,
          type: primaryModelClass.modelName,
          attributes: {
            name: item.name,
            country: item.sys.country,
            flag: 'http://openweathermap.org/images/flags/' + item.sys.country.toLowerCase() + '.png',
            main: item.weather[0].main,
            description: item.weather[0].description,
            icon: 'http://openweathermap.org/img/w/' + item.weather[0].icon + '.png'
          }
        };
      })
    };
  }
});
