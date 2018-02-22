import { Mongo } from 'meteor/mongo';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

Meteor.methods({
  addMoreOrders(){
    if (!this.userId) {
      throw new Meteor.Error('Please log in');
    }


  let selector = { _id: this.userId };

  let currentOrder = Meteor.users.findOne(selector);

  let archiveOrder = {
    "currency" : currentOrder.currency,
  	"amount" : currentOrder.amount,
  	"carats" : currentOrder.carats,
  	"fluffs" : currentOrder.fluffs,
  	"referral" : currentOrder.referral,
  	"wallet_address" : currentOrder.wallet_address,
  	"wallet_id" : currentOrder.wallet_id,
  	"status" : currentOrder.status,
  	"sent_address" : currentOrder.sent_address,
  	"sent_date" : currentOrder.sent_date,
  	"receive_address" : currentOrder.receive_address,
    "ip_address": currentOrder.ip_address
  };

  var orderId = new Mongo.ObjectID();
  orderId = orderId._str;

  archiveOrder.id = orderId;

  Meteor.users.update(selector, {$addToSet: {orders: archiveOrder}, $set: {status: 'approved', sent_date: null, wallet_id: null}});

    return 'success'
  },
})
