const paginate = require('express-handlebars-paginate');

const helpers = {};

helpers.paginate = paginate.createPagination;

helpers.select =  (savedTimestamp) => {
    return timeagoInstance.format(savedTimestamp);
};
helpers.isSelected = (element, value) =>  {
    return element === value ? 'selected' : ''; 
};
helpers.isEqual = (a, b, options) =>  {
    if (a == b) { return options.fn(this); }
    return options.inverse(this);
}
module.exports = helpers;