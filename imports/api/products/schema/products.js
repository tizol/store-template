import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Products = new Mongo.Collection("products");

ProductSchema = new SimpleSchema({
  created_at: {
    type: Date,
    label: "created at",
    optional: true,
    denyUpdate: false,
    autoValue: function() {
      if (this.isInsert) return new Date();
      else if (this.isUpsert) return {$setOnInsert: new Date};
      else return this.unset();
    }
  },
  updated_at: {
    type: Date,
    label: "updated at",
    optional: true,
    denyInsert: true,
    autoValue: function() {
      if (this.isUpdate) return new Date();
    }
  },

  product_id: {
    type: String,
    label: "product_id",
    max: 128,
  },

  product_name: {
    type: String,
    label: "product name",
    max: 128
  },

  "main_image": {
    type: String,
    label: 'images',
    optional: true
  },

  "more_images": {
    type: [Object],
    label: 'more_images',
    optional: true,
    blackbox: true
  },

  brand_id: {
    type: String,
    label: "brand_id",
    max: 128,
    optional: true
  },

  brand_name: {
    type: String,
    label: "brand_name",
    max: 128,
    optional: true
  },

  brand_logo: {
    type: String,
    label: "brand_logo",
    max: 128,
    optional: true
  },

  categories: {
    type: [String],
    label: "categories",
    optional: true
  },

  //company - brand owner
  company_id: {
    type: String,
    label: "company_id",
    max: 128,
    optional: true,
  },

  company_name: {
    type: String,
    label: "company_name",
    max: 128,
    optional: true,
  },

  company_wallet: {
    type: String,
    label: "company_wallet",
    max: 128,
    optional: true,
  },

  "description": {
    type: String,
    label: "description",
    max: 2000,
    optional: true,
  },

  rank: {
    type: Number,
    label: "rank",
    optional: true
  },

  actives: {
    type: Boolean,
    label: "actives",
    optional: true
  },

  price: {
    type: Number,
    label: 'price',
    decimal: true,
    optional: true
  },

  status: {
    type: String,
    label: "status",
    max: 128,
    optional: true,
  },

  currency: {
    type: String,
    label: "currency",
    max: 128,
    optional: true,
  },

  notes: {
    type: String,
    label: "notes",
    max: 128,
    optional: true,
  },

});


Products.attachSchema(ProductSchema);

if(Meteor.isServer) {
  Products._ensureIndex({product_id: 1});
  Products._ensureIndex({product_name: 1});
  Products._ensureIndex({rank: 1});
}
