import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import routes from '/imports/startup/client/routes.jsx';

// CSS IMPORTS
import '/imports/stylesheets/bootstrap.min.css';
import '/imports/stylesheets/main.css';
import '/imports/stylesheets/util.css';
// import '/imports/stylesheets/custom.css';
// import '/imports/stylesheets/flipclock.css';

// this says that we're going to import routes!
Meteor.startup(() => {
  render(routes(), document.getElementById('app'));
});
