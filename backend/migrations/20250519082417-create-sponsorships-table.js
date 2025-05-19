export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sponsorships', {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true,
        defaultValue: null,
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: true,
        defaultValue: null,
      },
      toppings_discount_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: true,
        defaultValue: null,
        references: {
          model: 'toppings_discount',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
      },
      orderline_discount_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: true,
        defaultValue: null,
        references: {
          model: 'orderline_discount',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
      },
      order_discounts_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: true,
        defaultValue: null,
        references: {
          model: 'order_discounts',
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

    await queryInterface.addIndex('sponsorships', ['toppings_discount_id'], {
      name: 'fk_sponsorships_toppings_discount1_idx',
    });
    await queryInterface.addIndex('sponsorships', ['orderline_discount_id'], {
      name: 'fk_sponsorships_orderline_discount1_idx',
    });
    await queryInterface.addIndex('sponsorships', ['order_discounts_id'], {
      name: 'fk_sponsorships_order_discounts1_idx',
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('sponsorships');
  },
};
