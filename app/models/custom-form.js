import AbstractModel from 'hospitalrun/models/abstract';
import DS from 'ember-data';
export default AbstractModel.extend({
  columns: DS.attr('number'),
  fields: DS.attr('custom-fields'),
  formType: DS.attr('string'),
  name: DS.attr('string'),

  validations: {
    formType: {
      presence: true
    },
    name: {
      presence: true
    },
    columns: {
      numericality: {
        allowBlank: true,
        onlyInteger: true,
        lessThanOrEqualTo: 12
      }
    }
  }
});
