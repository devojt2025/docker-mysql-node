export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('orderline', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      order_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
          model: 'orders',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
      },
      product_id: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      category_name: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null,
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: true,
        defaultValue: null,
      },
      paid_price: {
        type: Sequelize.STRING(40),
        allowNull: true,
        defaultValue: null,
      },
      quantity: {
        type: Sequelize.STRING(40),
        allowNull: true,
        defaultValue: null,
      },
      remote_code: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null,
      },
      unit_price: {
        type: Sequelize.STRING(40),
        allowNull: true,
        defaultValue: null,
      },
      vat_total: {
        type: Sequelize.STRING(40),
        allowNull: true,
        defaultValue: null,
      },
      comment: {
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: null,
      },
      variation_name: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null,
      },
      item_unavailability_handling: {
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

    await queryInterface.addIndex('orderline', ['order_id'], {
      name: 'fk_orderline_orders1_idx',
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('orderline');
  },
};
