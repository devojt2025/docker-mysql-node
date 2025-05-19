export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('toppings_discount', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
      orderline_toppings_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
          model: 'orderline_toppings',
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

    await queryInterface.addIndex('toppings_discount', ['orderline_toppings_id'], {
      name: 'fk_toppings_discount_orderline_toppings1_idx',
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('toppings_discount');
  },
};
