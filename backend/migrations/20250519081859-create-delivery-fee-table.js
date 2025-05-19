export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('delivery_fee', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null,
      },
      value: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
        defaultValue: null,
      },
      orders_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
          model: 'orders',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: null,
      },
    });

    await queryInterface.addIndex('delivery_fee', ['orders_id'], {
      name: 'fk_delivery_fee_orders1_idx',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('delivery_fee');
  },
};
