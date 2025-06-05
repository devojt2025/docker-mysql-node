// migrations/20250605-init-grab-schema.js
import {
  up as upOrders,
  up_campaigns,
  up_orderline,
  up_modifiers,
  up_promos
} from '../schema/grab.js'; // adjust path if needed

export async function up(queryInterface, Sequelize) {
  await upOrders(queryInterface, Sequelize);
  await up_campaigns(queryInterface, Sequelize);
  await up_orderline(queryInterface, Sequelize);
  await up_modifiers(queryInterface, Sequelize);
  await up_promos(queryInterface, Sequelize);
}

export async function down(queryInterface) {
  // Drop in reverse order to avoid FK issues
  await down_promos(queryInterface);
  await down_modifiers(queryInterface);
  await down_orderline(queryInterface);
  await down_campaigns(queryInterface);
  await down(queryInterface); // orders
}
