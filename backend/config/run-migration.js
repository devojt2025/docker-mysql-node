import { Sequelize } from 'sequelize';
import configDb1 from './config_db1.js';
import configDb2 from './config_db2.js';

// Import only the functions for the intended schema
import {
    up_orders_v2,
    up_delivery_fee_v2,
    up_order_discounts_v2,
    up_orderline_v2,
    up_orderline_discount_v2,
    up_orderline_toppings_v2,
    up_toppings_discount_v2,
    up_sponsorships_v2,
} from '../schema/foodpanda.js';

import {
    up as upOrders,
    up_campaigns,
    up_orderline,
    up_modifiers,
    up_promos
} from '../schema/grab.js'; // adjust path if needed
// OR: import from grab-schema.js if needed

// Choose the config based on environment or args
const target = process.argv[2]; // "db1" or "db2"

const config = target === 'db1' ? configDb1.development : configDb2.development;

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    logging: false,
});

const queryInterface = sequelize.getQueryInterface();

async function migrate() {
    try {
        console.log(`Running migrations on ${target}...`);
        await sequelize.authenticate();

        if (target === 'db1') {
            // Run selected migrations
            await up_orders_v2(queryInterface, Sequelize);
            await up_delivery_fee_v2(queryInterface, Sequelize);
            await up_order_discounts_v2(queryInterface, Sequelize);
            await up_orderline_v2(queryInterface, Sequelize);
            await up_orderline_discount_v2(queryInterface, Sequelize);
            await up_orderline_toppings_v2(queryInterface, Sequelize);
            await up_toppings_discount_v2(queryInterface, Sequelize);
            await up_sponsorships_v2(queryInterface, Sequelize);
            
            console.log('Migration completed successfully.');
        }
        else if (target === 'db2') {
            // Run selected migrations for Grab schema
            await upOrders(queryInterface, Sequelize);
            await up_campaigns(queryInterface, Sequelize);
            await up_orderline(queryInterface, Sequelize);
            await up_modifiers(queryInterface, Sequelize);
            await up_promos(queryInterface, Sequelize);

            console.log('Migration completed successfully.');
        } else {
            console.error('Invalid target specified. Use "db1" or "db2".');
        }

    } catch (err) {
        console.error('Migration failed:', err);
    } finally {
        await sequelize.close();
    }
}

migrate();
