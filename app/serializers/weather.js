import DS from 'ember-data';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default DS.JSONAPISerializer.extend({
  normalizeFindRecordResponse(store, primaryModelClass, payload, id) {
    let forecast = [],
      date, i, item;

    for (i = 1; i < payload.list.length; i += 1) {
      item = payload.list[i];
      date = new Date(item.dt * 1000);
      forecast.push({
        date: DAYS[date.getDay()] + ' ' + date.getDate(),
        icon: 'http://openweathermap.org/img/w/' + item.weather[0].icon + '.png',
        day: item.temp.day,
        description: item.weather[0].description,
        rain: item.rain | 0,
        min: item.temp.min,
        max: item.temp.max
      });
    }

    return {
      data: {
        id: id,
        type: primaryModelClass.modelName,
        attributes: {
          city: payload.city,
          today: {
            temp: payload.list[0].temp.day,
            main: payload.list[0].weather[0].main,
            morn: payload.list[0].temp.morn,
            eve: payload.list[0].temp.eve,
            night: payload.list[0].temp.night
          },
          forecast: forecast
        }
      }
    };
  }
});
