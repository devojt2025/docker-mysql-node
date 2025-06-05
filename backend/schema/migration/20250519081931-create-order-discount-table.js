export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order_discounts', {
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
      name: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null,
      },
      amount: {
        type: Sequelize.DECIMAL(10, 2),
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

    await queryInterface.addIndex('order_discounts', ['order_id'], {
      name: 'fk_order_discounts_orders1_idx',
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('order_discounts');
  },
};
