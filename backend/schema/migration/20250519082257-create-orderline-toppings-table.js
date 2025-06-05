export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orderline_toppings', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      orderline_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
          model: 'orderline',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
      },
      parent_topping_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: true,
        defaultValue: null,
        references: {
          model: 'orderline_toppings',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
      },
      topping_id: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null,
      },
      type: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null,
      },
      price: {
        type: Sequelize.STRING(40),
        allowNull: true,
        defaultValue: null,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null,
      },
      remote_code: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null,
      },
    });

    // Add indexes
    await queryInterface.addIndex('orderline_toppings', ['parent_topping_id'], {
      name: 'fk_orderline_toppings_orderline_toppings1_idx',
    });
    await queryInterface.addIndex('orderline_toppings', ['orderline_id'], {
      name: 'fk_orderline_toppings_orderline1_idx',
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('orderline_toppings');
  },
};
