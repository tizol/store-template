/***********************************************************
 * USER
 ***********************************************************/
// SCHEMAS
import '/imports/api/users/schema/users.js';
import '/imports/api/wallets/schema/wallets.js';
import '/imports/api/products/schema/products.js';
import '/imports/api/tokens/schema/tokens.js';
import '/imports/api/prices/schema/prices.js';

// METHODS
import '/imports/api/users/methods/on_create_user.js';
import '/imports/api/users/methods/forgot_user_password.js';
import '/imports/api/users/methods/update_tokens.js';
import '/imports/api/users/methods/sent_address.js';
import '/imports/api/users/methods/receive_address.js';
import '/imports/api/emails/emails.js';
import '/imports/api/users/methods/select_currency.js';
import '/imports/api/users/methods/admin_reapprove.js';
import '/imports/api/users/methods/add_more_orders.js';

// PUBLICATIONS
import '/imports/api/users/publications/profile.js';
import '/imports/api/wallets/publications/active_wallets.js';
import '/imports/api/products/publications/productsList.js';
import '/imports/api/products/publications/productDetail.js';
import '/imports/api/tokens/publications/token_counts.js';
import '/imports/api/prices/publications/currency_prices.js';

//Admin Publications
import '/imports/api/users/publications/adminAllUsers.js';
