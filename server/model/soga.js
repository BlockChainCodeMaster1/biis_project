const SOGA = (sequelize, DataTypes) => {
  var table = sequelize.define('soga', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    address: DataTypes.STRING,
    tx: DataTypes.STRING,
    is_whitelist: DataTypes.STRING
  })
  table.sync();
  return table;
}

export default SOGA;