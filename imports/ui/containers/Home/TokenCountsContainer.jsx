import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import TokenCounts from '/imports/ui/components/Home/TokenCounts.jsx';
import { Tokens } from '/imports/api/tokens/schema/tokens.js';

const TokenCountsContainer =  createContainer((props) => {
  //console.warn('props.currency ', props.currency);
  const tokenCountsSub = Meteor.subscribe('tokenCounts', props.currency);
  let token = Tokens.findOne({currency: props.currency});

  return {
    token: token,
    dataIsReady: tokenCountsSub.ready()
  };
}, TokenCounts);

export default TokenCountsContainer;
