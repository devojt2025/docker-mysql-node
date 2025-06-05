import {
  up_orders_v2,
  down_orders_v2,
  up_delivery_fee_v2,
  down_delivery_fee_v2,
  up_order_discounts_v2,
  down_order_discounts_v2,
  up_orderline_v2,
  down_orderline_v2,
  up_orderline_discount_v2,
  down_orderline_discount_v2,
  up_orderline_toppings_v2,
  down_orderline_toppings_v2,
} from '../schema/foodpanda.js'; // adjust path as needed

export default {
  async up(queryInterface, Sequelize) {
    // Run each "up" migration in sequence
    await up_orders_v2(queryInterface, Sequelize);
    await up_delivery_fee_v2(queryInterface, Sequelize);
    await up_order_discounts_v2(queryInterface, Sequelize);
    await up_orderline_v2(queryInterface, Sequelize);
    await up_orderline_discount_v2(queryInterface, Sequelize);
    await up_orderline_toppings_v2(queryInterface, Sequelize);
  },

  async down(queryInterface, Sequelize) {
    // Run each "down" migration in reverse order
    await down_orderline_toppings_v2(queryInterface, Sequelize);
    await down_orderline_discount_v2(queryInterface, Sequelize);
    await down_orderline_v2(queryInterface, Sequelize);
    await down_order_discounts_v2(queryInterface, Sequelize);
    await down_delivery_fee_v2(queryInterface, Sequelize);
    await down_orders_v2(queryInterface, Sequelize);
  },
};
