import { Meteor } from 'meteor/meteor';
import { withTracker, createContainer } from 'meteor/react-meteor-data';
import HomeLayout from '/imports/ui/layouts/Home/HomeLayout.jsx';

const HomeLayoutContainer =  createContainer((props) => {
   const homeProfileSub = Meteor.subscribe('profile');
  let user = Meteor.user();
  let path = props.location.pathname;

  return {
    path: path,
    isLoggedIn: !!Meteor.userId(),
    //user: user,
    dataIsReady: homeProfileSub.ready()
  };
}, HomeLayout);

export default HomeLayoutContainer;
