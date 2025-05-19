import Orders from './Orders';
import OrderDiscounts from './OrderDiscounts.js';
import Orderline from './Orderline.js';
import OrderlineDiscounts from './OrderlineDiscounts.js';
import OrderlineToppings from './OrderlineToppings.js';
import ToppingsDiscount from './ToppingsDiscount.js';
import Sponsorships from './Sponsorships.js';
import DeliveryFee from './DeliveryFee.js';

// Orders and OrderDiscounts
Orders.hasMany(OrderDiscounts, { foreignKey: 'orders_id' });
OrderDiscounts.belongsTo(Orders, { foreignKey: 'orders_id' });

// OrderDiscounts and Sponsorships
OrderDiscounts.hasMany(Sponsorships, { foreignKey: 'order_discounts_id' });
Sponsorships.belongsTo(OrderDiscounts, { foreignKey: 'order_discounts_id' });

// Orders and DeliveryFee
Orders.hasMany(DeliveryFee, { foreignKey: 'orders_id' });
DeliveryFee.belongsTo(Orders, { foreignKey: 'orders_id' });

// Orders and Orderline
Orders.hasMany(Orderline, { foreignKey: 'orders_id' });
Orderline.belongsTo(Orders, { foreignKey: 'orders_id' });

// Orderline and OrderlineDiscounts
Orderline.hasMany(OrderlineDiscounts, { foreignKey: 'orderline_id' });
OrderlineDiscounts.belongsTo(Orderline, { foreignKey: 'orderline_id' });

// Orderline and OrderlineToppings
Orderline.hasMany(OrderlineToppings, { foreignKey: 'orderline_id' });
OrderlineToppings.belongsTo(Orderline, { foreignKey: 'orderline_id' });

// OrderlineToppings and ToppingDiscounts
OrderlineToppings.hasMany(ToppingsDiscount, { foreignKey: 'orderline_toppings_id' });
ToppingsDiscount.belongsTo(OrderlineToppings, { foreignKey: 'orderline_toppings_id' });

// ToppingDiscounts and Sponsorships (for topping discounts)
ToppingsDiscount.hasMany(Sponsorships, { foreignKey: 'toppings_discount_id' });
Sponsorships.belongsTo(ToppingsDiscount, { foreignKey: 'toppings_discount_id' });


export default {
  Orders,
  Orderline,
  OrderlineDiscounts,
  OrderlineToppings,
  ToppingsDiscount,
  Sponsorships,
  DeliveryFee,
};
