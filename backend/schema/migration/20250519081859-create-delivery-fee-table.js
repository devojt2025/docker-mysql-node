export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("delivery_fee", {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      order_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
          model: "orders",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "NO ACTION",
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

    await queryInterface.addIndex("delivery_fee", ["order_id"], {
      name: "fk_delivery_fee_orders1_idx",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("delivery_fee");
  },
};
