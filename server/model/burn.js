const BURN = (sequelize, DataTypes) => {
  var table = sequelize.define('burn', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    address: DataTypes.STRING,
    tx: DataTypes.STRING,
    is_burn: DataTypes.STRING
  })
  table.sync();
  return table;
}

export default BURN;