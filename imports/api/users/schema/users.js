import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Meteor.users.schema = new SimpleSchema({
  emails: {
    type: Array,
    optional: true,
    label: "emails",
  },
  'emails.$': {
    type: Object,
    label: "emails.$",
  },
  'emails.$.address': {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: "emails.$.address"
  },
  'emails.$.verified': {
    type: Boolean,
    label: "emails.$.verified"
  },
  createdAt: {
    type: Date,
  },
  /**
   * Services for accounts packages like Facebook or Instagram
   */
  services: {
    type: Object,
    optional: true,
    blackbox: true,
  },
  /**
   * NOTE: We do not use profile.first_name for Security see docs at
   * http://guide.meteor.com/accounts.html#dont-use-profile
   */
   updated_at: {
    type: Date,
    label: "updated at",
    optional: true,
    denyInsert: true,
    autoValue: function() {
      if (this.isUpdate) return new Date();
    }
  },
  "first_name": {
    type: String,
    optional: true,
    label: "first_name"
  },
  "last_name": {
    type: String,
    optional: true,
    label: "last_name"
  },
  "roles": {
    type: [String],
    optional: true,
    label: "roles",
    allowedValues: ['admin']
  },
  "sent_address": {
    type: String,
    optional: true,
    label: "sent_address"
  },
  "receive_address": {
    type: String,
    optional: true,
    label: "receive_address"
  },
  "wallet_address": {
    type: String,
    optional: true,
    label: "wallet_address"
  },
  "wallet_id": {
    type: String,
    optional: true,
    label: "wallet_id"
  },
  "nem_address": {
    type: String,
    optional: true,
    label: "nem_address"
  },
  "currency": {
    type: String,
    optional: true,
    label: "currency"
  },
  "eth_address": {
    type: String,
    optional: true,
    label: "eth_address"
  },
  "btc_address": {
    type: String,
    optional: true,
    label: "btc_address"
  },
  "referral": {
    type: String,
    optional: true,
    label: "referral"
  },
  "country": {
    type: String,
    optional: true,
    label: "country"
  },
  "ip_address": {
    type: String,
    optional: true,
    label: "ip_address"
  },
  "amount": {
    type: Number,
    optional: true,
    label: "amount",
    decimal: true
  },
  "carats": {
    type: Number,
    optional: true,
    label: "carats",
    decimal: true
  },
  "fluffs": {
    type: Number,
    optional: true,
    label: "fluffs",
    decimal: true
  },
  "notes": {
    type: String,
    optional: true,
    label: "notes"
  },
  select_date: {
    type: Date,
    optional: true,
    label: "select_date"
  },
  sent_date: {
    type: Date,
    optional: true,
    label: "sent_date"
  },
  completed_date: {
    type: Date,
    optional: true,
    label: "completed_date"
  },
  "status": {
    type: String,
    optional: true,
    label: "status" //approved, sent, claim, completed
  },
  "orders": {
    type: [Object],
    optional: true,
    label: "orders",
    blackbox: true
  }
});


Meteor.users.attachSchema(Meteor.users.schema);

/**
 * Deny all client-side updates to user documents.  Protects against people
 * writing to profile. http://guide.meteor.com/accounts.html#dont-use-profile
 */
Meteor.users.deny({
  update() { return true; },
});
